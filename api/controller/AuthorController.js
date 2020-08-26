const Author = require("../model/Author");
const catchAsync = require("../utils/catchAsync");


exports.allAuthors = catchAsync(async(req,res,next)=>{

    const authors = await Author.find().populate("articles");

    res.status(200).json({
        status:"success",
        authors
    })
});

exports.addAuthor = catchAsync(async(req,res,next)=>{

    const author = await Author.create(req.body);

    res.status(201).json({
        status:"created",
        author
    })
});

exports.singleAuthor = catchAsync(async(req,res,next)=>{

    const author = await Author.findById(req.params.id).populate("articles");

    res.status(200).json({
        status:"success",
        author
    })
})