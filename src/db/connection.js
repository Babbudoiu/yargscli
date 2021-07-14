const { MongoClient } = require('mongodb')
require("dotenv").config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const client = new MongoClient(process.env.MONGO_URI);

// Database Name
const dbName = 'myProject';
const command = process.argv[2];
const yargs = require("yargs");
const title = yargs.argv.movie;
const actor = yargs.argv.actor;

const app = async () => {
  // Use connect method to connect to the server
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('documents')
  if (command === "add") {
  await collection.insertOne({ title: title, actor: actor })
  } if (command === "delete") {
   await  collection.deleteOne({ name: "dave"})
  }
  client.close();
  
  

  return 'done.'
}

app()