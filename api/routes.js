const express = require('express')
const router = express.Router()
const communityMetricsController = require('./controllers/communityMetrics')

router.get('/', communityMetricsController.index);

module.exports = router;