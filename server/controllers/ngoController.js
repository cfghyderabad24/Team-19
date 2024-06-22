let ngos = [];  // In-memory storage for NGOs

// Function to register a new NGO
const registerNGO = (req, res) => {
  const { id, name, email, location, phoneNum, password } = req.body;

  // Check if all required fields are provided
  if (!id || !name || !email || !location || !phoneNum || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if an NGO with the same id or email already exists
  const existingNGO = ngos.find(ngo => ngo.id === id || ngo.email === email);
  if (existingNGO) {
    return res.status(400).json({ message: 'NGO with the same ID or email already exists' });
  }

  // Create a new NGO
  const newNGO = { id, name, email, location, phoneNum, password };
  ngos.push(newNGO);

  // Respond with the created NGO details
  res.status(201).json(newNGO);
};

module.exports = { registerNGO };
