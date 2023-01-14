const express = require('express');
const { addFlora, getFlora, getFloraById, updateFlora, deleteFlora } = require('../controllers/FloraController');

const router = express.Router();
// Add Flora
router.route('/api/flora').post(addFlora);

// Get All Flora
router.route('/api/flora').get(getFlora);

// Get Flora by ID
router.route('/api/flora/:id').get(getFloraById);

// Update Flora
router.route('/api/flora/:id').put(updateFlora);

// Delete Flora
router.route('/api/flora/:id').delete(deleteFlora);

module.exports = router;
