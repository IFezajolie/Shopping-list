const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.get('/new_item', (req, res) => {
  res.render('new_item.ejs');
});


// Define a new route to handle POST requests to add new items
app.post('/index', (req, res) => {
  // Parse the request body to extract the new item data
  const newItem = req.body;
  // Add the new item to the items array
  items.push(newItem);
  // Send a response to confirm the item has been added
  res.status(201).send('Item added successfully');
});

// addItemBtn.addEventListener('onclick', function() {
//   // Call a function to handle adding a new item here
// }); 

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
