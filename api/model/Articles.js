const mongoose = require('mongoose');

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
        default:Date.now()
    },

    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    }
    
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article