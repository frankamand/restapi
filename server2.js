//REST API demo in Node.js
var express = require('express'); // requre the express framework
const bodyParser = require('body-parser');
var app = express();
var fs = require('fs'); //require file system object


app.use(bodyParser.json());

// Endpoint to Get a list of users
app.get('/', function(req, res){
  fs.readFile(__dirname + "/" + "index.html", 'utf8', function(err, data){
      console.log(data);
      res.end(data); // you can also use res.send()
  });
})

app.post('/addUser', function(req, res){
  //Step 2: read existing users
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
      data = JSON.parse(data);
      //Step 3: append user variable to list
      //data["user5"] = user["user5"];
      console.log(data);
      res.end(JSON.stringify(data));
  });
})


app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

app.get('/getVar', function(req, res){
    fs.readFile(__dirname + "/" + "var.txt", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

app.put('/putVar', function (req, res) {
    res.send('Got a PUT request at /putVar')
    console.log('Got body:', req.body);
    fs.writeFile(__dirname + "/" + "var.txt",req.body ,function (err,data) {
        if (err) {
          return console.log(err);
        }
    }
    );
  })

  app.post('/putVar', function (req, res) {
    res.send('Got a POST request at /putVar')
    console.log('Got body:', req.body);
    fs.writeFile(__dirname + "/" + "var.txt",req.body ,function (err,data) {
        if (err) {
          return console.log(err);
        }
    }
    );
  })

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})