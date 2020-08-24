const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authorSchema = new mongoose.Schema({
    name:{
        type:String
    },

    email:{
        type:String,
        unique:true
    },

    password:{
        type:String
    },

    passwordConfirm:{
        type:String,
        validate:{
            validator:function(val){
                return val === this.password
            },
            message:"password dosen't match"
        }
    },

    articles:[{
       type: mongoose.Schema.Types.ObjectId,
       ref:"Article", 
    }]

});

authorSchema.pre("save",async function(next){
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author