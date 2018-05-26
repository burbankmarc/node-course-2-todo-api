// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Cannot connect to MongoDB Server`);
  }
  console.log('Connected to Mongodb server');

      // db.collection('Todos').deleteMany({text: 'eat'}).then((result) => {
      //   console.log(result);
      // });

      // db.collection('Todos').deleteOne({text: 'eat'}).then( (res) => {
      //   console.log(res);
      // });

      // db.collection('Todos').findOneAndDelete({completed: false}).then( (res) => {
      //   console.log(res);
      // });

      db.collection('Users').find({name: 'Ralph'}).toArray().then((res) => {
        for(i = 1; i < res.length; i++) {
          var recordID = res[i]._id;
          console.log('Deleting duplicate', recordID);
          db.collection('Users').deleteOne({_id: new ObjectID(recordID)}).then( (res) => {
          });
          }
      }, (err) => {
        console.log('Cannot find', err);
      }, (err) => {
        console.log(err);
      });



  //db.close();
});
