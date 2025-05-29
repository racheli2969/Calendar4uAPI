import { create, find, findByIdAndUpdate, findByIdAndDelete } from '../models/task.model';

export function create(data) { return create(data); }

export function getAll() { return find().sort({ deadline: 1 }); }

export function update(id, data) { return findByIdAndUpdate(id, data, { new: true }); }

export function remove(id) { return findByIdAndDelete(id); }

// src/services/task.service.js
const Task = require('../models/task.model');

exports.getAllTasks = () => Task.find();
