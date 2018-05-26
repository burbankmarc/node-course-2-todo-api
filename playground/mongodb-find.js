// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Cannot connect to MongoDB Server`);
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b08612be37a853d8c26d412')
  //  }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });


  // db.collection('Todos').find().count().then( (count) => {
  //   console.log('Todos');
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({location: 'Va'}).toArray().then( (docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to query the db', err);
  });

  //db.close();
});
