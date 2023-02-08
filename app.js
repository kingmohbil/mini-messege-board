const express = require('express');
const router = require('./routes/route');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.use('/', router);

app.listen(8080, () => {
  console.log(`server is running on port 8080.....`);
});
