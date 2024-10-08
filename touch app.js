const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('SAP RPA Project');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
