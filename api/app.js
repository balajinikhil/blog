const path = require("path")
const express = require('express');
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");


const app = express();

// OWN MODULES
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controller/ErrorController");
const ApiRoutes = require("./routes/apiRoutes")


app.use(morgan("dev"));

app.use(function(req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'self'");
  return next();
});




// CORS
app.use(cors());
app.options("*", cors());

//SERVING STATIC fILES
app.use(express.static(path.join(__dirname, "/public")));

// SET SECURITY HTTP HEADERS
app.use(helmet());

// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.expectCt());
// app.use(helmet.frameguard());
// app.use(helmet.hidePoweredBy());
// app.use(helmet.hsts());
// app.use(helmet.ieNoOpen());
// app.use(helmet.noSniff());
// app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.referrerPolicy());
// app.use(helmet.xssFilter());


//  RATE LIMIT
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour!",
  });
  app.use("/", limiter);

//URL ENCODE DATA
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.json());
app.use(cookieParser());

// DATA-SANITIZATION, CODE-INJECTION
app.use(mongoSanitize());
app.use(xss());

//PARAMS POLLUTION
app.use(
    hpp({
      whitelist: [
        //  array of vals
      ],
    })
  );
  
if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

// ROUTES
app.use("/api/v1/", ApiRoutes );

// UNHANDELED ROUTES
app.all("*", (req,res,next)=>{
    next(new AppError(`can't find ${req.originalUrl}`, 404))
})

// GLOBAL ERROR HANDLER 
app.use(globalErrorHandler)

module.exports = app