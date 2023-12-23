const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('JRz WebServer!');
});

// Listen to the App Engine-specified port, or 80010 otherwise
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
