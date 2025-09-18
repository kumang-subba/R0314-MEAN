const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write('<table border="1" style="border-collapse: collapse; width: 100%;">');
  res.write("<tr><th>Name</th><th>Address</th><th>City</th></tr>");
  res.write("<tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr>");
  res.write("<tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>");
  res.write("</table>");
  res.end();
});

server.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
