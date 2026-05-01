const express = require('express');
const cors = require('cors');

const app = express();

// app.use(cors());
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://69f48cf6356c9d716f2b8e49--symphonious-zabaione-cb8775.netlify.app'
  ],
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