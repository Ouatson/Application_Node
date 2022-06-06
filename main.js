"use strict";

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");
// Pages html

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});

router.get("/courses.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});

router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

// Fichiers images

router.get("/uvs.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/img/uvs.png", res);
});

router.get("/hardway.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/img/hardway.jpg", res);
});

router.get("/bluetooth.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/img/bluetooth.png", res);
});

// Fichier de style

router.get("/localStyle.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/localStyle.css", res);
});

// Creation du serveur

http.createServer(router.handle).listen(port);
console.log(`The server is listening at http://127.0.0.1:${port}`);
