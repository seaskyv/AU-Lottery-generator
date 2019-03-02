var express = require('express');
var router = express.Router();
var request = require('request')

router.post("/", function(req, res, next) {
    console.log("Playing Lotto");
    console.log(req.body.Magic);
    console.log(req.body.game);
    console.log(req.body.number);
    console.log(req.method);
    console.log(req.path);
    console.log(req.params);
    var games=req.body.system;
    console.log("Will play " + games + " games.");
    var options= require('../middleware/buildRequest')(req.body.game,req.body.Magic,req.body.number,req.body.system);
    console.log(options)
    try{
    request(options, function(err, response, body) {
      console.log(response)
      if (!err && response.statusCode === 200){
          console.log("Will make request")
          console.log(body);
          console.log("Made request")
          //console.log(response)
          //res.locals.body = body;
          console.log(body[0]);
          console.log(body[0]["numbers"]);
          //var num_array=  body[0]["numbers"].split(",");
          var num_array=[];
          //console.log(num_array);
          var col_w = 80/games;
          col_w = col_w.toFixed(2);
          console.log("col width is " + col_w);
          var returnTable='<table align="center" cellspacing=\'0\' border=\'1\'>\
          <colgroup>\
          <col span="1">\
          </colgroup>\
          <tr><th width=\'20%\'>Game</th><th width=\'80%\' colspan="' + games + '">Numbers</th></tr>';
          for (i=0;i<body.length;i++){
            index=i+1;
            returnTable = returnTable + '\
            <tr>\
            <td>Game ' + index + '</td>';
            var num_array = body[i]["numbers"].split(",");
            for(k=0;k<num_array.length;k++){
              returnTable = returnTable + '\
              <td width=\'' + col_w + '%\'>' + num_array[k] + '</td>';
            }
            returnTable = returnTable + '\
            </tr>'
          }
          returnTable = returnTable + '\
          </table>';
          //res.send(body);
          res.send(returnTable);
      }
      else{
          var returnErr;
          if (typeof response !== 'undefined'){
            console.log(response.statusCode + ":" + err)
            res.send(response.statusCode + ":" + err);
          }else{
            console.log(err);
            res.send(err.errno);
          }
      }

      //console.log(body.url);
      //console.log(body.explanation);
  });
    }
    catch(e){
      console.log(e);
      res.send(e);
    }
  console.log("Lotter route Called")
  //next();
  });

module.exports = router;
