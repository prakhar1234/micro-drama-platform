const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '' },
  favoriteGenres: [String],
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Drama' }],
  watchHistory: [{
    drama: { type: mongoose.Schema.Types.ObjectId, ref: 'Drama' },
    episode: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' },
    watchedAt: { type: Date, default: Date.now }
  }],
  ageVerified: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
