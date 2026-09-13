const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  drama: { type: mongoose.Schema.Types.ObjectId, ref: 'Drama', required: true },
  episodeNumber: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, default: '' },
  duration: { type: Number, required: true }, // in seconds (micro = 1-10 mins)
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    createdAt: { type: Date, default: Date.now }
  }],
}, { timestamps: true });

module.exports = mongoose.model('Episode', episodeSchema);
