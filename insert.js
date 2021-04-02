var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:polgara@cluster0.6pa1q.mongodb.net/Cluster0?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Bauto");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("Transactions").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});