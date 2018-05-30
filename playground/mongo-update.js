// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Cannot connect to MongoDB Server`);
  }
  console.log('Connected to Mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5b094f822bca64693fe643d8')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then( (res) => {
    //   console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b08646c2fab194580c8c8d1')
    }, {
      $set: {
        name: 'David Jones'
      },
      $inc: {
        age: 1
      }
    },{
        returnOriginal: false
      }).then( (res) => {
      console.log(res);
    });

  //db.close();
});
