# simple web server with node.js

### create a project folder:

sudo mkdir jrz

cd jrz

### install <a href="https://nodejs.org/en/download/">Node.JS</a>

### create a package.json

npm init

### add a start script

<code>

"scripts": {
  "start": "node server.js"
}

</code>

### create a server.js

sudo touch server.js

sudo nano server.js

<code>

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

// Listen to the App Engine-specified port, or 8001 otherwise
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

</code>

### start the web server 

npm run start

https://localhost:8001


![npm start](https://github.com/sudo-self/web-server/assets/119916323/1423f479-a7d8-4b25-8c1b-f2531b2aaf61)


