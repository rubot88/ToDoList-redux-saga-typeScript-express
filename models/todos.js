'use strict';

const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    required: true
  }
});

module.exports = model('Todo', todoSchema);
