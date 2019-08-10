const express = require("express");
const helmet = require("helmet");

const server = express();
server.use(helmet());
server.use(express.json());


let people = [
    {
        id:1,
        name: 'Mallorie Brooke',
       
      },
      {
        id: 2,
        name: 'Bailey Michael',
       
      },
      {
        id:3,
        name: 'Autumn Paige',
       
      },
];

let chores = [];

server.get("/", (req, res) => {
    res.status(200).json({message: "webapi-challenge"})
  }); //endpoint is working


  server.get("/chores", (req, res) => {

    const completed = req.query.completed;
    if(completed === "true") {
        res.send(200).json(chores.completed)
    }else{
        if(completed === "true") {
            res.send(200).json(!chores.completed)
        }else{
            res.send(200).json(chores)
        }
    }  
    }
  ); //endpoint working sort of...just returns 'ok'


  server.get("/chores/:id", (req, res) => {
    const chore = chores.find(chore => choreId === (req.params.id))

    if(chore) {
        res.status(200).json(choreId)//this doesn't work
    }else{
        res.status(404).json({ message: "chore not found"})//this works
    }
});


server.post("/chores", (req, res) => {
    const chore = {
        id: chores.length + 1,
        description: req.body.description,
        notes: req.body.notes,
        assignedTo: req.body.assignedTo,
        completed: "false"
    }
     
    if(chore.id){
        chores.push(chore);
        res.status(201).json({chores});
    }else{
        res.status(400).json({message: "please provide a chore"})
    }
   
}); 

server.put("/chores", (req, res) => {
    

});

server.delete("/chores/:id", (req, res) => {
  

});



module.exports = server;