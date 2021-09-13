const { response, request } = require('express');
const {compareProduct,purchaseProduct,totalPurchased} = require('../services/tariff.service');
const ErrorException  = require('../util/error-exception');



const productCompare= async (req = request, res = response, next) => {
       
    const {comsumption} = req.body; 
   let result =   await compareProduct(comsumption);

    if (result instanceof  ErrorException) {   
        next(result);
        return ;
    }

    return res.status(200).json(result);  
}

const productPurchased= async (req = request, res = response, next) => {
       
    
   let result =   await purchaseProduct( req.body);
   
    if (result instanceof  ErrorException) {   
        next(result);
        return ;
    }

    return res.status(200).json(result);  
}

const productTotalPurchased= async (req = request, res = response, next) => {
       
    
    let result =   await totalPurchased();
    
     if (result instanceof  ErrorException) {   
         next(result);
         return ;
     }
 
     return res.status(200).json(result);  
 }

module.exports = {
    productCompare,
    productPurchased,
    productTotalPurchased
}