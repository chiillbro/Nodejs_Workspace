// import greet from "./greet.js";

// const greet = require("./greet");

// const { people_1, people_2 } = require("./Peoples");

// greet(people_1);
// greet(people_2);

// greet("Siva");

// **********************************OS Module*****************************************************

// import os, { platform } from "os";

// console.log(os.arch());

// console.log(platform());
// // console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.homedir());
// // console.log(os.networkInterfaces());

// console.log(os.freemem());
// console.log(os.totalmem());

// ******************************URL Module**************************************

// import { URL } from "url";

// const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

// console.log(myURL.hash);
// console.log(myURL.searchParams);
// console.log(myURL.host);
// console.log(myURL.hostname);
// console.log(myURL.search);
// console.log(myURL.href);
// console.log(myURL.pathname);
// console.log(myURL.toString);
// console.log(myURL.toJSON);
// console.log(myURL.port);
// console.log(myURL.protocol);

// ****************************HTTP Module, Creating Server********************************

// import http from "http";

// const myServer = http.createServer((req, res) => {
//   console.log(req.url);
//   res.statusCode = 404;
//   res.statusMessage = "Bad";
//   res.setHeader("content-type", "text/html");

// Short hand for status code, message, headers

//   res.writeHead(400, "OK!", { "content-type": "text/html" });

//   res.write("<h1>Hello Node js<h1/>");
// });
// const port = 8000;
// myServer.listen(port, () => console.log(`Listening to server: ${port}`));

// ****************************HTTP Module, Routing***********************************

// import http from "http";

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     res.writeHead(202, "OK", { "content-type": "text/html" });
//     res.write("<h1>Home</h1>");
//     res.write("<a href='/contact'>Contact</a>");
//     res.end();
//   } else if (req.url === "/contact") {
//     res.writeHead(202, "OK", { "content-type": "text/html" });
//     res.write("<h1>Contact page</h1>");
//     res.end();
//   } else if (req.url === "/about") {
//     res.writeHead(202, "OK", { "content-type": "text/html" });
//     res.write("<h1>About page</h1>");
//     res.end();
//   } else {
//     res.writeHead(404, "Bad Request", { "content-type": "text/html" });
//     res.write("<h1>Page not found</h1>");
//     res.end();
//   }
// });

// server.listen(8000, () => console.log("Server up!"));

// **********************Serving files for routing*******************************

// import http from "http";
// import fs from "fs";

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     res.writeHead(202, "OK", { "content-type": "text/html" });
//     fs.readFile("public/index.html", (error, data) => {
//       if (error) throw error;
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url === "/about") {
//     res.writeHead(202, "OK", { "content-type": "text/html" });
//     fs.readFile("public/about.html", (error, data) => {
//       if (error) throw error;
//       res.write(data);
//       res.end();
//     });
//   } else {
//     res.writeHead(404, "Bad", { "content-type": "text/html" });
//     res.write("<h1>Page not found</h1>");
//     res.end();
//   }
// });

// server.listen(8000, () => console.log("Server up!"));

// ****************************Events*************************************

// import EventEmitter from "events";

// const myEventEmitter = new EventEmitter();

// myEventEmitter.on("response", (name, id) => {
//   console.log(`name : ${name}, id : ${id}`);
// });

// myEventEmitter.emit("response", "siva", 34);
// myEventEmitter.emit("response", "Huxn", 34);

//**************************streams*********************************

import { createReadStream } from "fs";

// import fs from "fs";

// for (let i = 0; i < 10000; i++) {
//   fs.writeFileSync("./data.txt", `${i}\n`, { flag: "a" });
// }

const stream = createReadStream("./data.txt", {
  highWaterMark: 1,
  encoding: "utf8",
});

stream.on("data", (data) => {
  console.log(data);
});
