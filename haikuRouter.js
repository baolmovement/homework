const 
    Haikus = require('./haikusCtrl'),
    express = require('express'),
    router = express.Router();

router.get('/', Haikus.index)
router.get('/:id', Haikus.show)
router.get('/new', Haikus.new)
router.post('/:id', Haikus.update)
router.post('/', Haikus.create) 
router.patch('/:id', Haikus.update)
router.delete('/:id', Haikus.destroy)
    

module.exports = router;