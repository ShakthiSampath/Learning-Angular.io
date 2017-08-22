let router = require('express').Router();

router.use('/candidate', require('./candidate'));

module.exports = router;