const articleController = require("./../controllers/article.ctrl");
const multipart = require("connect-multiparty");
const multipartWare = multipart();

module.exports = router => {
  // get all articles
  router.route("/articles").get(articleController.getAll);

  // add an article
  router
    .route("/article")
    .post(articleController.addArticle);

  // comment on an article
  router
    .route("article/comment")
    .post(articleController.commentArticle);

  // get a particular article to view
  router
    .route("article/:id")
    .get(articleController.getArticle);
};
