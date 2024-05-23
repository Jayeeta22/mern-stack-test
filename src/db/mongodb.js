const { MongoClient } = require('mongodb');

const uploadToMongoDB = async (data) => {
  // const uri =process.env.MONGODB_URI ;
  const uri ="mongodb+srv://eveIT:eveIT123@cluster0.dozng.mongodb.net/tickets-db" ;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("db connected")
    const database = client.db('tickets-db');
    const collection = database.collection('tickets');
    
    await collection.insertMany(data);
    console.log('Tickets successfully uploaded to MongoDB');
  } catch (error) {
    console.error('Error uploading tickets to MongoDB:', error);
  } finally {
    await client.close();
  }
};

module.exports = uploadToMongoDB;
