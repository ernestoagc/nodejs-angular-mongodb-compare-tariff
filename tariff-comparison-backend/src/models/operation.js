
const { Schema, model } = require('mongoose');

const OperationSchema = Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    productName: {
        type: String
    },
    productCode: {
        type: String
    },
    cost: {
        type: Number
    },
    comsumption: {
        type: Number
    },
     
});



OperationSchema.methods.toJSON = function() {
    const { __v,  ...operation  } = this.toObject();
    return operation;
}

module.exports = model( 'Operation', OperationSchema );
