// Create web server
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// Routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/comments', (req, res) => {
  fs.readFile(__dirname + '/public/comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/comments', (req, res) => {
  fs.readFile(__dirname + '/public/comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const comments = JSON.parse(data);
      comments.push(req.body);

      fs.writeFile(__dirname + '/public/comments.json', JSON.stringify(comments, null, 2), (err) => {
        if (err) {
          console.log(err);
        } else {
          res.send('Comment added');
        }
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});