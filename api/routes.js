const express = require('express')
const router = express.Router()
const communityMetricsController = require('./controllers/communityMetrics')

router.get('/metrics', communityMetricsController.index);
router.get('/stats', communityMetricsController.stats)
module.exports = router;