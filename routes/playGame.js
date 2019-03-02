var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body.magic);
    if (req.body.magic == ""){
        var d = new Date();
        var currentYear = d.getFullYear();
        req.body.magic = currentYear;
        console.log("Choose current year as magic number for user.")
    }else{
        if (Number.isInteger(Number(req.body.magic))){
            if (Number(req.body.magic) < 0){
                var d = new Date();
                var currentYear = d.getFullYear();
                req.body.magic = currentYear;
                console.log("Choose current year as magic number for user.")
            }
        }else{
            var d = new Date();
            var currentYear = d.getFullYear();
            req.body.magic = currentYear;
            console.log("Choose current year as magic number for user.")
        }
    }

    if (Number.isInteger(req.body.magic))
    console.log(req.body.game);
    if (req.body.game === "lotto"){
        res.render('lotto',{magic:req.body.magic});
    }else if(req.body.game === "powerball"){
        res.render('Powerball',{magic:req.body.magic});
    }else if(req.body.game === 'ozlotto'){
        res.render('OZlotto',{magic:req.body.magic});
    }else{
        res.send("404 : game not found")
    }
});

module.exports = router;
