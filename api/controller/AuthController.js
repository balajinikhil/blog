const catchAsync = require("../utils/catchAsync");
const Author = require("../model/Author");
const AppError = require("../utils/AppError");

exports.login = catchAsync(async(req,res,next)=>{

    const author = await Author.findOne({email:req.body.email});

    if(!author || !await author.checkPassword(req.body.password, author.password)) next(new AppError("Check Username and Password", 404))

    else{
        res.status(200).json({
            status:"success",
            auth:true
        })
    }
})