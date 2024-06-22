const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");
require("dotenv").config();

// Signup Controller for Registering Users
exports.signup = async (req, res) => {
  try {
    const {
      name,
      gender,
      percentage,
      college,
      stream,
      fathersOccupation,
      income,
      residenceArea,
      NGO,
      password,
      confirmPassword,
      otp,
    } = req.body;

    // Check if all fields are provided
    if (
      !name ||
      !gender ||
      !percentage ||
      !college ||
      !stream ||
      !fathersOccupation ||
      !income ||
      !residenceArea ||
      !NGO ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue",
      });
    }

    // Validate OTP
    const response = await OTP.find({ name }).sort({ createdAt: -1 }).limit(1);
    if (response.length === 0 || otp !== response[0].otp) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({
      name,
      gender,
      percentage,
      college,
      stream,
      fathersOccupation,
      income,
      residenceArea,
      NGO,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again",
    });
  }
};

// Login controller for authenticating users
exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill up all the required fields",
      });
    }

    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not registered",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { name: user.name, id: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User login success",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Login failure. Please try again",
    });
  }
};

// Send OTP for Email Verification
exports.sendotp = async (req, res) => {
  try {
    const { name } = req.body;

    const checkUserPresent = await User.findOne({ name });
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User is already registered",
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    while (await OTP.findOne({ otp })) {
      otp = otpGenerator.generate(6, { upperCaseAlphabets: false });
    }

    const otpPayload = { name, otp };
    await OTP.create(otpPayload);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for Changing Password
exports.changePassword = async (req, res) => {
  try {
    const userDetails = await User.findById(req.user.id);
    const { oldPassword, newPassword } = req.body;

    const isPasswordMatch = await bcrypt.compare(oldPassword, userDetails.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, message: "The password is incorrect" });
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    );

    try {
      const emailResponse = await mailSender(
        updatedUserDetails.email,
        "Password for your account has been updated",
        passwordUpdated(
          updatedUserDetails.email,
          `Password updated successfully for ${updatedUserDetails.name}`
        )
      );
      console.log("Email sent successfully:", emailResponse.response);
    } catch (error) {
      console.error("Error occurred while sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email",
        error: error.message,
      });
    }

    return res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Error occurred while updating password:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    });
  }
};
