const express = require('express');
const router = express.Router();
const episodes = require('../data/characters.json');

// Get all characters
router.get('/', (req, res) => {
  res.json(episodes);
});

// Get character by ID
router.get('/:id', (req, res) => {
  const episode = episodes.find(c => c.id === parseInt(req.params.id));
  if (!character) return res.status(404).json({ error: 'Character not found' });
  res.json(character);
});

module.exports = router;