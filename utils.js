const fs = require("fs");
const httpStatus = require("http-status-codes");
const contentTypes = require("./contentTypes");

module.exports = {
    getFile: (file, res) => {
        let path = `${file}`;
        console.log("Path: " + path);
        fs.readFile(path, (err, data) => {
            if (err) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end(`${httpStatus.INTERNAL_SERVER_ERROR} : Internal Serveur Error `);
            }
            res.end(data);
        });
    },
};