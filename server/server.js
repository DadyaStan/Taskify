const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
    const users = [
        {
            "name": "Customer Review",
            "type": "management",
            "days": 3,
            "startDay": 17,
            "deadline": 19,
            "person": "src"
        },
        {
            "name": "Domain & Host",
            "type": "back-end",
            "days": 1,
            "startDay": 20,
            "deadline": 20,
            "person": "src"
        },
        {
            "name": "Logo Design",
            "type": "design",
            "days": 1,
            "startDay": 18,
            "deadline": 18,
            "person": "src"
        },
        {
            "name": "Logo Review",
            "type": "management",
            "days": 2,
            "startDay": 18,
            "deadline": 19,
            "person": "src"
        }
    ]
    res.json(users);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});