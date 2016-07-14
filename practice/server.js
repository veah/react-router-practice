var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())

//serve static files like index.css
app.use(express.static(path.join(__dirname,'public')))

//send all requests to index.html so broserHistory in React-Router works
app.get('*',function(req,res){
        res.sendFile(path.join(__dirname,'public','index.html'))
    }
)

var PORT = process.env.PORT||3000
app.listen(PORT,function(){
    console.log('Production Express server running at localhost:' + PORT)
    }
)