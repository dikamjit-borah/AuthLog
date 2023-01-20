module.exports = (app) => {

    app.use("/*", (req, res, next) => {
        let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
        console.log(fullUrl);
        next()
    });
    app.get("/sign_up", (req, res)=>console.log("sign up"))
};
