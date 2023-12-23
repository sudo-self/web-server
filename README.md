# web-server

### create a project folder
```s
sudo mkdir jrz
cd jrz

```
![Screenshot 2023-12-23 at 3 27 49 AM](https://github.com/sudo-self/web-server/assets/119916323/b89517bd-73a0-40bd-9637-da84208a9df2)


### install <a href="https://nodejs.org/en/download/">Node.JS</a>

### create a package.json

```s
npm init
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

// Listen to the App Engine-specified port, or 8001 otherwise
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

### Project
  app.yaml
  package.json
  server.js
