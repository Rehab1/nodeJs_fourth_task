const express=require('express');
const router=express.Router();
const categories=require('../models/categories');

router.get('/',(req,res,next)=>{
    let categories=categories.getAll();
    res.send(categories);
});
router.post('/',(req,res,next)=>{
    debugger;
    let addedProduct=categories.add(req.body);
    res.send(addedProduct);
})
router.get('/:productId',(req,res,next)=>{
    let product=categories.getById(req.params.productId);
    res.send(product); 
});
router.delete('/:productId',(req,res,next)=>{
    let toBeDeleted=categories.delete(req.params.productId,true);
    res.send(toBeDeleted); 
});
router.patch('/:productId',(req,res,next)=>{
    let updated=categories.patch(req.params.productId,req.body);
    res.send(updated); 
});


module.exports=router;