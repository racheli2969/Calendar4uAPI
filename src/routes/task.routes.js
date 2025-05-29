import { Router } from 'express';
const router = Router();
import { createTask, getAllTasks, updateTask, deleteTask } from '../controllers/task.controller';

// Routes
router.post('/', createTask);
router.get('/', getAllTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
