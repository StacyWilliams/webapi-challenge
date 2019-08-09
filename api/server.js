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

let chores = [
    {
      id: 1,
      description: 'Wash dishes',
      notes: 'load and unload plus wipe down counters',
      assignedTo: 1, // the id of Frodo,
      completed: true
    },
    {
      id: 2,
      description: 'laundry',
      notes: 'wash, dry, fold, and put away neatly',
      assignedTo: 2,
      completed: false
    },
    {
        id: 3,
        description: 'Vacuumn',
        notes: 'carpet and rugs in all rooms appliciable',
        assignedTo: 3, // the id of Frodo,
        completed: false
      },
      {
        id: 4,
        description: 'Trash and Brush Dog',
        notes: 'take out kitchen and bathroom trash, replace bags, and brush out Laocha',
        assignedTo: 3,
        completed: false
      },
  ]

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!!"})
});

// The R in CRUD
server.get('chores', function(req, res) {
    chores.find()
      .then(chores => {
        res.status(200).json(chores);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  // The C in CRUD
  server.post('chores', (req, res) => {
    // axios.post(url, data) < data shows up as req.body
    const choresInfo = req.body;
    console.log(choresInfo);
  
    chores.add(choresInfo)
      .then(hub => {
        res.status(201).json(chores);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  // the D
  server.delete('chores/:id', (req, res) => {
    const { id } = req.params;
  
    chores.remove(id)
      .then(deleted => {
        if (deleted) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: "can't find that chore" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  // the U
  server.put('chores/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
  
    chores.update(id, changes)
      .then(updated => {
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({ message: "can't find that chore" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = server;