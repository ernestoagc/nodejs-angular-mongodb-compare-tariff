const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

require('../config/setConfig');

const tariffService = require('./tariff.service');
describe("tariffService", function() {

    const compareProductuResult= {
        productA: {
            comsumption: 3500,
            cost: 830,
            recommended: false
        },
        productB: {
            comsumption: 3500,
            cost: 800,
            recommended: true
        }
    }


    it("validate the cost of consumption from product A",function() {
        expect(tariffService.productBasicCost(3500)).equal(830);
    });

    it("validate the cost of consumption from product B",function() {
        expect(tariffService.productPackagedCost(3500)).equal(800);
    });



});