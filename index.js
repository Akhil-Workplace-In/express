const express = require("express");

const app = express();

const port = 3000;

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.use(express.json());

const johnKidneys = users[0].kidneys;

function healthyKidneys(johnKidneys){
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < numberOfKidneys; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    return numberOfHealthyKidneys;
}       



app.get('/', function(req, res){
    let numKidneys = johnKidneys.length;
    let numOfHealthyKidneys = healthyKidneys(johnKidneys);
    let numOfUnHealthyKidneys = numKidneys - numOfHealthyKidneys;
    res.json({
        numKidneys,
        numOfHealthyKidneys, 
        numOfUnHealthyKidneys
    })

})

app.post('/', function(req, res){    
    const isHealthy = req.body.isHealthy;
    
    users[0].kidneys.push({
        healthy: isHealthy
    })  
    res.json({
        msg: "Done!"
    })
})

app.put('/', function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Updated"
    })

})
//removing unhelthy kidneys
app.delete('/', function(req, res){
    let newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }

    users[0].kidneys = newKidneys;
    console.log(users[0].kidneys);
    res.json({
        msg: "Deleted"
    })
})


app.listen(port, function(){
    console.log("App is listening at port: ", port);
})

