// src/server.js
import { listen } from './app';
import connectDB from './config/db';
require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectDB(); // ⬅️ Connect to MongoDB

listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
