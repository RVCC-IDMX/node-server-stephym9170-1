const http = require("http");
const fs = require ("fs")

const PORT = process.env.PORT || 3000;

 const server = http.createServer((req, res) => {
     console.log(req.url. req.method)
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
        res.end(data)
        }
    })
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
