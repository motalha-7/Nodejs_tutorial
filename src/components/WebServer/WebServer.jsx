import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const code = `const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello, World!');
  res.end();
});
server.listen(3000, () => console.log('Server running at http://localhost:3000/'));`;

const WebServer = () => (
  <div>
    <h1>Creating a Web Server</h1>
    <SyntaxHighlighter language="javascript" style={coy}>
      {code}
    </SyntaxHighlighter>
  </div>
);

export default WebServer;
