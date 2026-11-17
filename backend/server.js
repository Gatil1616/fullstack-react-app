
const express = require("express");
const cors = require("cors");

// Create an Express application
const app = express();

// Enable CORS
app.use(cors());

// Create a GET API
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from my Node.js Backend!"
    });
});

// Start the backend server
app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
