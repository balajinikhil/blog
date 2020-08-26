const Author = require("../model/Author");
const Article = require("../model/Articles");
const catchAsync = require("../utils/catchAsync");

exports.getAllArticles = catchAsync(async(req,res,next)=>{

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 20;
    const skip = (page - 1) * limit;
    const articles = await Article.find().sort("-publishedAt").populate("author").skip(skip).limit(limit)

    res.status(200).json({
        status:"success",
        total:articles.length,
        articles
    })
})

exports.addNewArticle = catchAsync(async(req,res,next)=>{

    const article = await Article.create(req.body);

    const author = await Author.findById(req.body.author);
    await author.articles.push(article);
    author.save();

    res.status(201).json({
        status:"created",
        article
    })
});

exports.getOneArticle = catchAsync(async(req,res,next)=>{

    const article = await Article.findById(req.params.id).populate("author");

    res.status(200).json({
        status:"success",
        article
    })
})