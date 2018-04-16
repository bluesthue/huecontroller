var http = require("http");
var url="192.168.0.14";
//var lights={1,2};


function blinken(l){
  console.log("blink");
  var rNum=Math.floor(Math.random()*65536);
  var blinkCmd="/api/SkLuq8Gg4XPd4yjD6g1vXeY-hDXlp-TaOCDLsc2s/lights/"+l+"/state";
  var blinkBdy='{"hue":'+rNum+',"sat":254,"alert":"select"}';//"effect":"colorloop"
  console.log(blinkBdy);
  var options = {
    host: url,
    port: 80,
    path: blinkCmd,
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(blinkBdy)
    }
  };
  var req=http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });
  req.write(blinkBdy);
  req.end();
}
//blinken();
var tmrBlinks=setInterval(function(){blinken(1);},500);
var tmrBlink2=setInterval(function(){blinken(2);},500);
