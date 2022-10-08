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



module.exports = router;
