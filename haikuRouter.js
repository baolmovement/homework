const 
    Haikus = require('./haikusCtrl'),//Access to methods in controller
    express = require('express'),
    router = express.Router();

router.get('/', Haikus.index)//goes to Haikus controller and accesses method called index
router.get('/:id', Haikus.show)//goes to Haikus controller and accesses method called show
router.post('/:id', Haikus.update)//goes to Haikus controller and accesses method called update
router.post('/', Haikus.new) //goes to Haikus controller and accesses method called new
router.patch('/:id', Haikus.update)//goes to Haikus controller and accesses method called update
router.delete('/:id', Haikus.destroy)//goes to Haikus controller and accesses method called destroy
    

module.exports = router;