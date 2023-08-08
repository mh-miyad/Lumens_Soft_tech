import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 2000;
//! Here use Middleware  /
app.use(express.json());
app.use(cors());

//! Here use Middleware  /
app.get("/", (req, res) => {
  res.send("Lumen is available");
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const createProjectCollection = client
      .db("projectDB")
      .collection("project");
    app.post("/createProject", async (req, res) => {
      const { data } = req.body;
      try {
        const result = await createProjectCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });
    app.get("/allProjectList", async (req, res) => {
      const result = await createProjectCollection.find().toArray();
      res.send(result);
    });

    //* Here  Router is connected
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
    //* Here  Router is connected
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
