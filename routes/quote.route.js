const router = require('express').Router();
const { QuoteController } = require('../controllers');

router.get('/quotes', QuoteController.index);
router.get('/quotes/all', QuoteController.get);

module.exports = router;