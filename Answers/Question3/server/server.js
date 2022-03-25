const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const port = 3434;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3434',
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const choiceController = require('./controllers/choiceController');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
  res.setHeader('content-type', 'text/html');
});

const assetsPath = path.join(__dirname, '../assets');

app.use('/', express.static(assetsPath));

app.post('/choices', choiceController.postChoices, (req, res) => {
  res.status(200).json({ messages: 'Successfully created your choices.' });
});

app.listen(port, () => {
  console.log(`SERVER IS LISTENING TO PORT ${port}`);
});
