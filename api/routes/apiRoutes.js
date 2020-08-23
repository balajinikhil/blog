const router = require('express').Router();

const {
    getAllArticles,
    addNewArticle
} = require("../controller/ArticlesController");

const {
    allAuthors,
    addAuthor
} = require("../controller/AuthorController");

// ARTICLES
router.get("/articles", getAllArticles);
router.post("/article/new", addNewArticle);

// AUTHORS
router.get("/authors", allAuthors);
router.post("/author/new", addAuthor);

module.exports = router