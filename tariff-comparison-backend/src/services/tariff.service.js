const ErrorException = require('../util/error-exception');
const Operation = require('../models/operation');

function replaceAll(str, find, replace) {
    //console.log(str);
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }

const compareProductVersion2 = (comsumption)=>{
    
    let products = []; 

        for(let i=0;i<config.products.length;i++){
            
            let variableString=replaceAll(config.products[i].equation,"$comsumption",comsumption);
            let productResult =
            {   comsumption:comsumption,
                cost:eval(variableString),
                recommended:false,
                code:config.products[i].code,
                name:config.products[i].name
            }
    
            products.push(productResult);

        }

    let min = Math.min.apply(null, products.map(function(item) {
        return item.cost;
        }));

          
    products.find(pro =>pro.cost==min).recommended=true;

    return products;
          
}

const compareProduct = (comsumption) =>{

    const productACost= productBasicCost(comsumption);
    const productBCost= productPackagedCost(comsumption);
    

    let result = {
        productA:{comsumption:comsumption,cost:productACost,recommended:productACost<productBCost,code:config.productACode,name:config.productAName},
        productB:{comsumption:comsumption,cost:productBCost,recommended:productACost>productBCost,code:config.productBCode,name:config.productBName},
    };

    return result;


}

const productPackagedCost = (comsumption) =>{
    let totalCost=800;
    if(comsumption>4000){
        totalCost= totalCost + (comsumption-4000)*0.3;
    }

    return totalCost;

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





module.exports = {
    compareProduct,
    purchaseProduct,
    productBasicCost,
    productPackagedCost,
    totalPurchased,
    compareProductVersion2
}