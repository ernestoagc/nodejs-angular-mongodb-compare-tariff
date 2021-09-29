
const { Router } = require('express');

const { productCompare,productPurchased,productTotalPurchased,compareProductV2} = require('../controllers/product.controller');
const { check } = require('express-validator');
const {validateAttributes} = require('../middlewares/validate-attributes');
const router = Router();


router.post('/compare',[
    check('comsumption', 'The comsumption is mandatory').not().isEmpty(),
    validateAttributes
], productCompare );

router.post('/compare/v2',[
    check('comsumption', 'The comsumption is mandatory').not().isEmpty(),
    validateAttributes
], compareProductV2 );

router.post('/purchase',[
    check('productCode', 'The productCode is mandatory').not().isEmpty(),
    check('productName', 'The productName is mandatory').not().isEmpty(),
    check('cost', 'The totalCost is mandatory').not().isEmpty(),
    check('email', 'The email is mandatory').isEmail(),
    check('name', 'The name is mandatory').not().isEmpty(),
    validateAttributes
], productPurchased );

router.get('/totalPurchased',  productTotalPurchased );


module.exports = router;
