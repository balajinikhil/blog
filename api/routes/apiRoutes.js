const router = require('express').Router();

const {
    getAllArticles,
    addNewArticle
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

// AUTHORS
router.get("/authors", allAuthors);
router.post("/author/new", addAuthor);

// AUTH
router.post("/login", login )

module.exports = router