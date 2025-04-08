const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
  learningStyle: {
    visual: { type: Number, default: 0 },
    auditory: { type: Number, default: 0 },
    kinesthetic: { type: Number, default: 0 }
  },
  knowledgeLevel: Map, // { "topicId": 0-100 }
  interactions: [{
    contentId: mongoose.Schema.Types.ObjectId,
    engagement: Number,
    completion: Number,
    timestamp: Date
  }],
  resetPasswordToken: String,
  resetPasswordExpire: Date
}, { timestamps: true });

// Add pre-save hooks and methods
