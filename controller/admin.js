const Product=require('../model/booking');

const path=require('path');

exports.postAddProduct=(req,res,next)=>{
    console.log(req.body);
    const username=req.body.username;
    const phone=req.body.phoneNumber;
    const email=req.body.email;

    Product.create({
        username:username,
        phone:phone,
        email:email
    })
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);

    })
}

exports.getProducts=(req,res,next)=>{
    Product.findAll()
    .then((product)=>{
        res.json(product)
    })
}

exports.deleteProducts=(req,res,next)=>{
    const id=req.params.productId
    Product.destroy({where:{id:id}})
    .then(()=>{
        res.sendStatus(200);
    })
}