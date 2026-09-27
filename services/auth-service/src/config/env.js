const dotenv = require("dotenv");

dotenv.config();

const env = {
    port: process.env.PORT || 3001,
    nodeEnv: process.env.NODE_ENV || "development"
};

module.exports = env;