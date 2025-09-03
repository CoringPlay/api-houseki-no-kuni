const express = require('express');
const router = express.Router();
const gems = require('../data/gems.json');

// Get all gems
router.get('/', (req, res) => {
  res.json(gems);
});

// Get character by ID
router.get('/:id', (req, res) => {
  const gem = gems.find(c => c.id === parseInt(req.params.id));
  if (!character) return res.status(404).json({ error: 'Gems not found' });
  res.json(character);
});

module.exports = router;