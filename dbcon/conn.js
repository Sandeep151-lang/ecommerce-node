const mongoose = require('mongoose');

const uri = "mongodb+srv://project1:project@cluster0.einxh.mongodb.net/project1?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`connection successfull`)
}).catch(() => {
    console.log(`connection error`)
})

module.exports = db;