import express, { json } from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes';
const authRoutes = require('./routes/auth.routes');

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/api/tasks', taskRoutes);

app.use('/api/auth', authRoutes);


export default app;
