"use strict";
const VALIDATOR = require("./validator.helper");

module.exports = {
    idValidator: [
        VALIDATOR.mongoIdValidator("param", "id", false),
    ],
};
