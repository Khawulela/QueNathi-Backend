require('dotenv').config(); // Ensure dotenv is configured to load .env variables

const { MongoClient, ServerApiVersion } = require('mongodb');

// Use process.env to access the MONGODB_URI from your .env file
const uri = process.env.MONGODB_URI || "mongodb+srv://matongavumile:CodeCrusadersQueueNathi@patient-details.jlagbgp.mongodb.net/?retryWrites=true&w=majority&appName=Patient-Details";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error); // More informative error message
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.error); // Use console.error for error logging