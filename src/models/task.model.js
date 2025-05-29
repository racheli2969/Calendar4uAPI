const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  deadline: { type: Date, required: true },
  minTime: Number,
  maxTime: Number,
  canBeDivided: Boolean,
  divisions: Number
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
