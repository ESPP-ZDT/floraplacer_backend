const express = require('express');
const { addFlora, getFlora, getFloraById, updateFlora, deleteFlora } = require('../controllers/FloraController');

const router = express.Router();
// Add Flora
router.route('/api/flora').post(addFlora);

// Get All Flora
//router.route('/api/flora').get(getFlora);

// Get Flora by ID
router.get('/api/flora/:id', getFloraById);

// Update Flora
router.put('/api/flora/:id', updateFlora);

// Delete Flora
router.delete('/api/flora/:id', deleteFlora);

module.exports = router;
