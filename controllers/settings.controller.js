"use strict";

const Success = require("../constants/success.constant");

/**
 * @function gotSettings
 * @param {{body: {settingsDetails: Object}}} req
 * @param {*} res
 * @return {JSON} Success status and settings object
 * @description Returns the JSON of settings object located in req.body.settingsDetails
 */
function gotSettings(req, res) {
    return res.status(200).json({
        message: Success.SETTINGS_GET,
        data: {
            openTime: "2023-11-14T13:00:00.000Z",
            closeTime: "2025-01-08T16:59:00.000Z",
            confirmTime: "2024-01-23T04:59:00.000Z",
            isRemote: false,
            id: "61ea403fc5cf7d6e233def54",
        },
    });
}

/**
 * @function patchedSettings
 * @param {{body: {settingsDetails: Object}}} req
 * @param {*} res
 * @return {JSON} Success status and settings object
 * @description Returns the JSON of settings object located in req.body.settingsDetails
 */
function patchedSettings(req, res) {
    return res.status(200).json({
        message: Success.SETTINGS_PATCH,
        data: req.body.settingsDetails,
    });
}

module.exports = {
    gotSettings: gotSettings,
    patchedSettings: patchedSettings,
};
