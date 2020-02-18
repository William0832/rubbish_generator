const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generator = require('./generator');
const app = express();
const port = 3000;

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// setting routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const option = req.body.target;
  const rubbish = generator(option);
  const checkResult = { [option]: 'on' };
  res.render('index', { rubbish, checkResult });
});

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on localhost:${port}.`);
});
