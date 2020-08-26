const mongoose = require('mongoose');
const slugify = require("slugify")

const articleSchema = new mongoose.Schema({
    title:{
        type:String
    },

    description:{
        type:String
    },

    urlToImg:{
        type:String
    },

    content:{
        type:String
    },

    publishedAt:{
        type:Date,
        default:new Date()
    },

    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    },

    slug:{
        type:String
    }
    
})

articleSchema.pre("save", function(next){
    this.slug = slugify(this.title, {
        lower:true
    })
    next()
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article