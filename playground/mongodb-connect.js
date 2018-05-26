// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Cannot connect to MongoDB Server`);
  }
  console.log('Connected to Mongodb server');

 // db.collection('Todos').insertOne({
 //  text: 'Something to do',
 //  completed: false
 // }, (err, res) => {
 //   if (err) {
 //     return console.log('Unable to insert Todo', err);
 //   }
 //
 //   console.log(JSON.stringify(res.ops, undefined, 2));
 // });

 //insert doc into Users, (name, age, location)


  // db.collection("Users").insertOne({
  //   name: 'David',
  //   age: 33,
  //   location: 'Va'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Error Inserting Document', err)
  //   }
  //
  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  //
  // });

  db.close();
});
