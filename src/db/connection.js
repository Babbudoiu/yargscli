const { MongoClient } = require('mongodb')
require("dotenv").config();

// Connection URL
const client = new MongoClient(process.env.MONGO_URI);

// Database Name
const dbName = 'myProject';
const command = process.argv[2];
const yargs = require("yargs");
const title = yargs.argv.title;
const actor = yargs.argv.actor;
const status = yargs.argv.status;

const app = async () => {
  // Use connect method to connect to the server
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('documents')
  if (command === "add") {
  await collection.insertOne({ title: title, actor: actor , status: status })
  } else if (command === "delete") {
   await  collection.deleteOne({ title: title, actor: actor  })
  } else if (command === "update") {
    await collection.findOneAndUpdate({ title: title }, {$set: { status: "watched"}}) 
  } else if (command === "list") {
    await collection.findOne({title: title})
  }
  client.close();
  
}

app()