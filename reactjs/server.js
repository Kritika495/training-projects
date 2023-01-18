const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/addressBookDB").then(res => {
  console.log("mongodb connection established");
});

let Contact = mongoose.model("address",
  new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    picture: { type: String }
  },
    {
      collection: "address"
    }));

app.use(cors({
  origin: "*",
  methods: "*"
}));
app.use(bodyParser.json());

app.get("/", function (request, response) {
  response.send("<h1>Welcome to addressBook server</h1>");
});
app.get("/api/contacts", function (request, response) {
  //response.send("<h1>You have sent a request</h1>");
  Contact.find((err, contacts) => {
    if (err) {
      response.send(err);
    }
    else {
      response.json(contacts);
    }
  });

});
app.get("/api/contacts/:id", function (req, res) {
  let id = req.params.id;
  Contact.findOne({ "id": id }, function (err, data) {
    if (err) {
      req.send(err);
    }

    res.json(data);
  });
  //res.send("get by id " + id);
});
//delete request
app.delete("/api/contacts/:id", function (req, res) {

  let id = req.params.id;
  console.log("id:", id);

  Contact.deleteOne({ "id": id }, function (err, data) {
    if (err) {
      res.send(err);
    }

    Contact.find(function (err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  });
});

//insert by id
app.post("/api/contacts", function (req, res) {
  let contact = new Contact();
  //specify the values to the fields of the model 
  Contact.findOne().sort({ id: -1 }).then((data) => {   //sorts in descending order
    contact.id = data.id + 1;                   //max id + 1
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone
    contact.picture = req.body.picture;

    contact.save(function (err, data) {
      if (err) {
        res.send(err)
      }
      res.json(data);
    });
  })

  //save the model to db
});

app.put("/api/contacts", function (req, res) {
  let contact = new Contact();
  //specify the values to the fields of the model 
  contact.id = req.body.id;
  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  contact.picture = req.body.picture;
  //save the model to db
  contact.save(function (err) {
    if (err) {
      res.send(err)
    }
    res.send(data);
  });
});

app.listen(4300, () => {
  console.log("Server running at 4300");
});