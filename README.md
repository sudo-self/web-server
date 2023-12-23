# web-server-app

### create a project folder
```s
sudo mkdir jrz
cd jrz

```
### install <a href="https://nodejs.org/en/download/">Node.JS</a>

### create a package.json
```s
npm init
```
```
{
  "name": "jrz",
  "version": "1.0.0",
  "description": "JRz Web-Server",
  "main": "server.js",
  "scripts": {
   "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sudo-self/web-server-app.git"
  },
  "keywords": [
    "jrz"
  ],
  "author": "sudo-self",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sudo-self/web-server-app/issues"
  },
  "homepage": "https://github.com/sudo-self/web-server-app#readme"
}
```
### add a start script
```s

"scripts": {
  "start": "node server.js"
}
```
### create server.js
```
sudo touch server.js

sudo nano server.js
```

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('JRz Web-Server!');
});

// Listen to the specified port otherwise 8001
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

```
### start the web server 
```
npm run start
```
![Screenshot 2023-12-23 at 3 29 43 AM](https://github.com/sudo-self/web-server/assets/119916323/a9ac057d-cf7e-4915-a6e6-039204fff232)

https://localhost:8001

![npm start](https://github.com/sudo-self/web-server/assets/119916323/1423f479-a7d8-4b25-8c1b-f2531b2aaf61)

### create app.yaml

```
sudo touch app.yaml
runtime: nodejs16
```
### create a README.md

```
sudo touch README.md
```

### Project Folder<br>
  package.json<br>
  server.js<br> 
  app.yaml<br>
  README.md<br>

This is minimal project base ready to scale
  
