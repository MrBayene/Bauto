const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:polgara@cluster0.6pa1q.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("bauto").collection("transactions");
  // perform actions on the collection object
  console.log(collection);
  client.close();
});