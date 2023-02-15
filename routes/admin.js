const path=require('path');

const express=require('express');

const adminController=require('../controller/admin');

const router=express.Router();

router.post('/add-product',adminController.postAddProduct)

router.delete('/delete-appointment/:productId',adminController.deleteProducts)

router.get('/',adminController.getProducts)

module.exports=router;