"use strict";
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../src/app");
const agent = chai.request.agent(server.app);
const should = chai.should();
const logger = require("../src/services/logger.server.service");

const util = {
    hacker: require("../../tests/util/hacker.test.util"),
};

const storedHacker1 = util.hacker.hackerA;

describe("POST update one hacker", function () {
    it("should SUCCEED and update a hacker", function(done) {
        chai.request(server.app)
        .pose(`api/account/updateOneUser`)
        .type("application/json")
        .send(storedHacker1)
        .end(function (err, res) {
            // auth?
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.have.property("message");
            res.body.message.should.equal("Changed hacker");
            res.body.should.have.property("data");
            // Is this correct matching of data?
            res.body.data.should.equal("Changed information to: " + storedHacker1);
            done();
        });
    });
});