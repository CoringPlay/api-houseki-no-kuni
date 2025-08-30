const express = require('express');
const router = express.Router();
const characters = require('../data/characters.json');

// Get all characters
router.get('/', (req, res) => {
  res.json(characters);
});

// Get character by ID
router.get('/:id', (req, res) => {
  const character = characters.find(c => c.id === parseInt(req.params.id));
  if (!character) return res.status(404).json({ error: 'Character not found' });
  res.json(character);
});

module.exports = router;