"use strict";

const assert = require("assert");
const jtfd = require("./../../index.js");

describe("FormData UNIT", function(){

    it("should be able to parse json object", function(){

        const jsonData = {
            bla: "123",
            list: ["456", "789"],
            blup: 0,
            enc: "!%$$$öäüy§"
        };

        const expectedResult = "bla=123&list=456&list=789&blup=0&enc=" + encodeURIComponent(jsonData.enc);
        assert.equal(jtfd(jsonData), expectedResult);
    });
});