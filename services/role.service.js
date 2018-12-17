"use strict";
const Role = require("../models/role.model");
const logger = require("./logger.service");

/**
 * @async
 * @function getRole
 * @param {string} roleName The name of the role that you're looking for.
 * @description 
 * Returns the role defined by the role name
 */
function getRole(roleName) {
    const TAG = "[Role Service # getRole]:";
    const query = {
        name: roleName
    };
    //get the roleBinding for account
    //Populate roles for roleBinding
    return Role.findOne(query, logger.queryCallbackFactory(TAG, "role", query));
}

/**
 * @function getById
 * @param {ObjectId} id The role id
 * @description 
 * Returns the role specified by the id.
 */
function getById(id) {
    const TAG = "[Role Service # getById]:";
    const query = {
        _id: id
    };
    //get the roleBinding for account
    //Populate roles for roleBinding
    return Role.findById(query, logger.queryCallbackFactory(TAG, "role", query));
}

/**
 * @function getAll
 * @description 
 * Returns all the roles in the database
 */
function getAll() {
    const TAG = "[Role Service # getAll]:";
    return Role.find({}, logger.queryCallbackFactory(TAG, "role", {}));
}

module.exports = {
    getRole: getRole,
    getById: getById,
    getAll: getAll
}