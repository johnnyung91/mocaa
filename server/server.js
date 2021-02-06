const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

let data = fs.readFileSync('../employees.json');
let employees = JSON.parse(data);

app.use(cors());
app.use(express.json());

app.post('/api/get-employees', (req, res) => {
  const { name } = req.body;
  const filtered = employees.filter(employee => {
    return employee.name.toLowerCase().includes(name.toLowerCase())
  });
  res.status(200).send(JSON.stringify(filtered));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
