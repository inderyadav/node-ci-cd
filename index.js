const express = require('express');
const cors = require('cors');

const app = express();

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:64954', // Angular port
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend Running 🚀');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API Working 🔥' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});