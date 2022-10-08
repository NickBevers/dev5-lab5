var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    if(req.query.user) {
        res.json({
            status: 'success',
            message: `GETTING message for username ${req.query.user}`,
            data: {
                user: req.query.user
            }
        })
    } else {
        res.json({ 
            status: 'success', 
            message: 'GETTING messages', 
            data: { 
                messages: [
                    {
                        user: "John",
                        message: "Hello"
                    },
                    {
                        user: "Jane",
                        message: "Hi"
                    },
                    {
                        user: "Victor",
                        message: "Hey Guys!"
                    }
                ]
            }
        });
    }
});

router.get('/:id', (req, res, next) => {
    res.json({
        status: 'success',
        message: `GETTING message with ID ${req.params.id}`,
        data: {
            message: {
                user: "John",
                message: "Hello"
            }
        }
    });
});


router.post('/', (req, res, next) => {
    res.json({
        status: 'success',
        message: 'POSTING a new message for user Pikachu',
        data: {
            message: {
                user: "John",
                message: "Hello"
            }
        }
    });
});

router.put('/:id', (req, res, next) => {
    res.json({
        status: 'success',
        message: `UPDATING a message with id ${req.params.id}`,
        data: {
            message: {
                user: "John",
                message: "Hello"
            }
        }
    });
});

router.delete('/:id', (req, res, next) => {
    res.json({
        status: 'success',
        message: `DELETING a message with id ${req.params.id}`,
        data: {
            message: {
                user: "John",
                message: "Hello"
            }
        }
    });
});

module.exports = router;
