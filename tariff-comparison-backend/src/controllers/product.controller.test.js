const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const tariffService = require('../services/tariff.service');
const productController = require('./product.controller');

describe("ProductController", function() {

    var status, json, res;

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

    beforeEach(() => {
        status = sinon.stub();
        json = sinon.spy();
        res = { json, status };
        status.returns(res);
      });

      
 
    it("validate correct object response",async function() {
        
        const req = {
            body: { comsumption: 3500 }
          };


        await productController.productCompare(req, res);
        console.log(status.args);
        console.log(json.args);

        expect(status.calledOnce).to.be.true;
        expect(status.args[0][0]).to.equal(200);
        expect(json.calledOnce).to.be.true
        expect(json.args[0][0].productA.recommended).to.equal(false);
        
    });  


});