const router = require('express').Router();

const {
    getAllArticles,
    addNewArticle,
    getOneArticle
} = require("../controller/ArticlesController");

const {
    allAuthors,
    addAuthor
} = require("../controller/AuthorController");

const {
    login
} = require("../controller/AuthController")

// ARTICLES
router.get("/articles", getAllArticles);
router.post("/article/new", addNewArticle);
router.get("/article/:slug", getOneArticle);

// AUTHORS
router.get("/authors", allAuthors);
router.post("/author/new", addAuthor);

// AUTH
router.post("/login", login )

module.exports = router