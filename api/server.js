process.on("uncaughtException", (err)=>{
    console.log(err);
    process.exit(1);
})

const dotenv = require("dotenv");
dotenv.config({
    path:"./config.env"
})

const mongoose = require("mongoose");
const DB = process.env.DB
mongoose.connect(DB, {
    useFindAndModify:false,
    useCreateIndex:true,
    useNewUrlParser:true
}).then(()=>{
    console.log(`DB connected`);
}).catch((err)=>{
    console.log(`DB error ${err}`);
    process.exit(1)
});

const app = require("./app");


const PORT = process.env.PORT || 1040
const server = app.listen(PORT, ()=>{
    console.log(`Server up and running ${PORT}`);
})

process.on('unhandledRejection', (err)=>{
    server.close(()=>{
        process.exit(1);
    })
})