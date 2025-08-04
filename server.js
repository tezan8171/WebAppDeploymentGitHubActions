const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('<h1>Hello This is a Web App Deployed And Hosted on Server By Tezan Tyagi !</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
