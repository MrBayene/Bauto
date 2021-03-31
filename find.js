var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:polgara@cluster0.6pa1q.mongodb.net/Cluster0?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Bauto");
  var query =  { test: "First" };
  dbo.collection("Transactions").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});