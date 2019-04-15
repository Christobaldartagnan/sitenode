var express = require('express');
var router = express.Router();

/* GET echo listing. */
router.get('/', function(req, res) {


    var repObj={

        quand:new Date().toISOString(),
        payload:`Message du client  ${req.query["message"]}  `
    };
  res.send(repObj);
});

module.exports = router;
