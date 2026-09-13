const mongoose = require('mongoose');

const dramaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, default: '' },
  genres: [String],
  tags: [String],
  style: {
    type: String,
    enum: ['anime', 'live-action', 'animated', 'mixed-media'],
    default: 'anime'
  },
  maturityRating: {
    type: String,
    enum: ['18+', 'mature', 'all-ages'],
    default: 'mature'
  },
  episodeCount: { type: Number, default: 0 },
  totalViews: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: {
    type: String,
    enum: ['ongoing', 'completed', 'hiatus'],
    default: 'ongoing'
  },
}, { timestamps: true });

module.exports = mongoose.model('Drama', dramaSchema);
