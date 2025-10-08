const express = require('express');
const router = express.Router();
const episodes = require('../data/episodes.json');

// Get all characters
router.get('/', (req, res) => {
  res.json(episodes);
});

// Get character by ID
router.get('/:id', (req, res) => {
  const episode = episodes.find(c => c.id === parseInt(req.params.id));
  if (!episode) return res.status(404).json({ error: 'Episodes not found' });
  res.json(episode);
});

module.exports = router;