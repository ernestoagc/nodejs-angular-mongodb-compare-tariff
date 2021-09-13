const ErrorException = require('../util/error-exception');
const Operation = require('../models/operation');
const compareProduct = (comsumption) =>{

    const productACost= productBasicCost(comsumption);
    const productBCost= productPackagedCost(comsumption);
    
    let result = {
        productA:{comsumption:comsumption,cost:productACost,recommended:productACost<productBCost,code:config.productACode,name:config.productAName},
        productB:{comsumption:comsumption,cost:productBCost,recommended:productACost>productBCost,code:config.productBCode,name:config.productBName},
    };

    return result;


}

const productBasicCost = (comsumption) =>{
    let totalCost = (5*12) + comsumption * 0.22;
    return totalCost
}

const purchaseProduct = async (newoperation)=>{

    const { name,email ,productName, productCode,cost,comsumption } = newoperation;
    
    const operation = new Operation({ name,email ,productName, productCode,cost,comsumption });
    
    await operation.save();
    return operation;    
}

const getTotalCountProduct= async(code) =>{
   let cantidad=  await Operation.find({$and : [ {productCode: code}] }).count();
return cantidad;
}

const totalPurchased = async() =>{
    let quantityA= await getTotalCountProduct(config.productACode);
    let quantityB= await getTotalCountProduct(config.productBCode);

    let result = {productA:quantityA, productB:quantityB}
    return result;
}



const productPackagedCost = (comsumption) =>{
    let totalCost=800;
    if(comsumption>4000){
        totalCost= totalCost + (comsumption-4000)*0.3;
    }

    return totalCost;

}

module.exports = {
    compareProduct,
    purchaseProduct,
    productBasicCost,
    productPackagedCost,
    totalPurchased
}