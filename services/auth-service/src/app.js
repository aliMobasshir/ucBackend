const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "auth-service",
        message: "Auth service is running"
    });
});

app.use("/users", userRoutes);

module.exports = app;