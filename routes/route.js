const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages,
  });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  const { messege, user_name } = req.body;

  messages.push({
    text: messege,
    user: user_name,
    added: new Date(),
  });

  res.redirect('/');
});
module.exports = router;
