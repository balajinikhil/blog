const Articles = require("../model/Articles");
const Article = require("../model/Articles");
const catchAsync = require("../utils/catchAsync");

exports.getAllArticles = catchAsync(async(req,res,next)=>{

    const articles = await Article.find().populate("author");

    res.status(200).json({
        status:"success",
        articles
    })
})

exports.addNewArticle = catchAsync(async(req,res,next)=>{

    const article = await Article.create(req.body);

    res.status(201).json({
        status:"created",
        article
    })
});

