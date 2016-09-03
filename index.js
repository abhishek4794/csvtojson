var express=require('express')
var app     = express();
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

app.get('/',function(req,res){
	res.send('Hii, \n run /csvtojson/?q=url_of_csv_file');
})
app.get('/csvtojson', function(req, res) {

	converter.on("end_parsed", function (jsonArray) {
	
    		res.send({'messageCode':200,data:jsonArray})
	});

require("request").get(req.query.q).pipe(converter);

});

app.listen(4794);

console.log('listening on port 4794')
