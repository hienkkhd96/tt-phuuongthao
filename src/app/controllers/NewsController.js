class NewsControllers {
    // [GET] /news
    index(req, res) {
        res.render("news");
    }
    show(req, res) {
        res.send("NEWDETAIL!!!")
    }
}

module.exports = new NewsControllers;
