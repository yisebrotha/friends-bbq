const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/orders', (req, res) => {
  const orderId = 'FBQ-' + Math.floor(100000 + Math.random() * 900000);
  console.log('New Order:', req.body);
  res.status(201).json({
    success: true,
    orderId,
    message: 'Order received! Kitchen is preparing.'
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
