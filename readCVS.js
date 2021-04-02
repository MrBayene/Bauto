var csv = require("jquery-csv");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
readTextFile("file:///code/Bauto/Trans.csv")

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //console.log(allText);
                var array=transformToArray(allText)
                //console.log(array)
                addToDB(array)
            }
        }
    }
    rawFile.send(null);
}

function transformToArray(text){
    var result = csv.toObjects(text);
    return result
}

function addToDB(array){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://admin:polgara@cluster0.6pa1q.mongodb.net/Cluster0?retryWrites=true&w=majority";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Bauto");
        array.forEach(function(item,index){
            var trans = { 
                RegisterDate: item.RegDate, 
                TransactionDate: item.TransDate,
                Name: item.Ref,
                Description:item.Description,
                Amount:item.Amount,
                Balance:item.Balance  
            };
            const query = trans
            const update = { $set: trans} 
            const options = { upsert: true };
            dbo.collection("Transactions").updateOne(query, update, options);

            //    dbo.collection("Transactions").updateOne(trans, function(err, res) {
              //      if (err) throw err;
                    //});
            //console.log(trans)
        })
        //console.log("1 document inserted");
        db.close();

        //var myobj = { name: "Company Inc", address: "Highway 37" };
        
    })
}

function print(){
    console.log("CHECK")
}
