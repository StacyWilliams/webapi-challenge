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
let choreId = 1;


server.get("/chores", (req, res) => {

    const completed = req.query.completed;
    if(completed === "true") {
        res.send(200).json(chores.completed)
    }else{
        if(completed !== "true") {
            res.send(200).json(!chores.completed)
        }
    }  
    }
  ); //endpoint working sort of...just returns 'ok'

server.get("/", (req, res) => {
    res.status(200).json({message: "It's working"})
  }); //endpoint is working


server.get("/chores/:id", (req, res) => {
    const chore = chores.find(chore => choreId === (req.params.id))

    if(chore) {
        res.status(200).json(chore.id)//this doesn't work
    }else{
        res.status(404).json({ message: "chore not found"})//this works
    }
});


server.post("/chores", (req, res) => {
    const chore = req.body;
    chore.id = choreId;
    choreId = choreId + 1;
    chores.push(chore); 
    res.status(201).json({chores});
}); //endpoint works

server.put("/chores", (req, res) => {
    

});

server.delete("/chores/:id", (req, res) => {
  

});



module.exports = server;