const express = require('express');
const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler');
const Product = require("./.././Models/ProductModel.js");
const productRoute = express.Router();
//GET ALL PRODUCTS
productRoute.get("/", asyncHandler(
    async (req,res)=>{
        const pageSize = 8;
        const page = Number(req.query.pageNumber) || 1
        const keyword = req.query.keyword ? {
            name:{
                $regex:req.query.keyword,
                $options:"i"
            },
        }
        :{}
        // res.setHeader('Access-Control-Allow-Origin','*')
        const count = await Product.countDocuments({...keyword});
        const products = await Product.find({...keyword})
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ _id: -1 })
        res.json({products, page, pages : Math.ceil(count / pageSize)})
    }
))
//GET SINGLE PRODUCT
productRoute.get("/:id", asyncHandler(
    async (req,res)=>{
        // const productId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404)
            throw new Error("Product Not Found")
        }
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }
    }
))
//PRODUCT REVIEW
productRoute.post("/:id/review",asyncHandler(
    async(req,res)=>{
        const { rating,comment } = req.body;
        const product = await Product.findById(req.params.id);
        if(product){
            const alreadyReviewed = product.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()
            )
            if(alreadyReviewed){
                res.status(400)
                throw new Error("product already reviewed")
            }
            const review = {
                name: req.user.name,
                rating:Number(rating),
                comment,
                user:req.user._id
            }
            product.reviews.push(review)
            product.numReviews = product.reviews.length
            product.rating = 
            product.reviews.reduce((acc,item)=> item.rating + acc,0 ) /
            product.reviews.length;
            await product.save()
            res.status(201).json({message:"Review added"})
        }
        else{
            res.status(404);
            throw new Error("Product Not Found")
        }
    }
))


module.exports = productRoute;