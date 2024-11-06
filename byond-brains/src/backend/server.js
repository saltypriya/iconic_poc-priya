import express from 'express';
import pkg from 'pg'; 
const { Pool } = pkg; 
import bcrypt from 'bcrypt';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5001; 

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'ionicPoc', 
  password: 'Rg$74406', 
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// Registration Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    // Check if the username already exists
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashedPassword]
    );
    res.status(201).json({ message: 'User registered', user: result.rows[0] });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
      } else {
        res.status(401).json({ error: 'Invalid password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});
