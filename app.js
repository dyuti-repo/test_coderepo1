
const express = require('express')

const app = express()                    //initialising app with express

app.get('/',function(req,res){          //fetching data of "/" from server
    res.send("Hello World")             //res.send bcoz as this is sent from server so response & send to client...
})

//--------------------------------------------------------------
//fetching different url information from server

app.get('/alien',function(req,res){                
    const id = req.query.id
    res.send("Welcome back Alien " + id)
})

app.get('/alien/:id',function(req,res){     //:id also.known.as url parameter ; ? a.k.a url query string 
    const id = req.params.id               //This describes when in any browser client search in search bar if requests for alien whose id =20
    if (id == 20)
    {
        res.send("Hey Pattanaik " + id)
    }
    else if (id == 21)
    {
        res.send("Hey Naveen " + id)       //Show the page to the client from server alien whose id =20 or21 etc 
    }                                      // (possible using params & query string ?)
               
})

//--------------------------------------------------------------
//starting a server
app.listen(9000,function(req,res){
    console.log("Running....")
})    // starting the server at port 9000

