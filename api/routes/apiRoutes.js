const router = require('express').Router();

const {
    getAllArticles,
    addNewArticle,
    getOneArticle
} = require("../controller/ArticlesController");

const {
    allAuthors,
    addAuthor,
    singleAuthor
} = require("../controller/AuthorController");

const {
    login
} = require("../controller/AuthController")

// ARTICLES
router.get("/articles", getAllArticles);
router.post("/article/new", addNewArticle);
router.get("/article/:id", getOneArticle);

// AUTHORS
router.get("/authors", allAuthors);
router.post("/author/new", addAuthor);
router.get("/author/:id", singleAuthor )

// AUTH
router.post("/login", login )

module.exports = router