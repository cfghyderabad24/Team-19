const express = require('express');
const router = express.Router();
const User = require('./models/User');

router.post('/api/submit', (req, res) => {
    const { name, gender, percentage, college, stream, fathersOccupation, income, residenceArea, NGO, incomeCertificate, twelveMemo } = req.body;

    const user = new User({
        name,
        gender,
        percentage,
        college,
        stream,
        fathersOccupation,
        income,
        residenceArea,
        NGO,
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: 'Error creating user' });
        } else {
            res.send({ message: 'User created successfully' });
        }
    });
});

module.exports = router;