const routeAuth = require("./route.auth");

module.exports = (app) => {

    app.use("/*", (req, res, next) => {
        let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
        console.log(fullUrl);
        next()
    });
    app.use("/auth", routeAuth)
};
