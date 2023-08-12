const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;
//! Here use Middleware  /
app.use(express.json());
app.use(cors());

//! Here use Middleware  end here /
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
    const createClientCollection = client.db("clientDB").collection("client");
    const teamCollection = client.db("teamDB").collection("teams");
    const blogCollection = client.db("blogDB").collection("blog");
    const serviceCollection = client.db("serviceDB").collection("service");
    const aboutCollection = client.db("aboutDB").collection("about");
    app.post("/aboutCreate", async (req, res) => {
      const data = req.body;

      try {
        const result = await aboutCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });
    app.post("/teamAdd", async (req, res) => {
      const data = req.body;

      try {
        const result = await teamCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });
    app.post("/blogAdd", async (req, res) => {
      const data = req.body;

      try {
        const result = await blogCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });
    app.post("/createClient", async (req, res) => {
      const data = req.body;

      try {
        const result = await createClientCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });
    app.post("/createProject", async (req, res) => {
      const data = req.body;

      try {
        const result = await createProjectCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });
    app.post("/serviceCreate", async (req, res) => {
      const data = req.body;

      try {
        const result = await serviceCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });
    app.get("/allClientList", async (req, res) => {
      const result = await createClientCollection.find().toArray();
      res.send(result);
    });
    app.get("/blogList", async (req, res) => {
      const result = await blogCollection.find().toArray();
      res.send(result);
    });
    app.get("/blogDetails", async (req, res) => {
      const id = req.query.id;
      const query = { _id: new ObjectId(id) };
      const result = await blogCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/teamDetails", async (req, res) => {
      const id = req.query.id;
      const query = { _id: new ObjectId(id) };
      const result = await teamCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/teamList", async (req, res) => {
      const result = await teamCollection.find().toArray();
      res.send(result);
    });
    app.get("/servicesDetails", async (req, res) => {
      const id = req.query.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/servicesList", async (req, res) => {
      const result = await serviceCollection.find().toArray();
      res.send(result);
    });
    app.get("/aboutList", async (req, res) => {
      const result = await aboutCollection.find().toArray();
      res.send(result);
    });
    app.delete("/aboutDelete/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };
        const result = await aboutCollection.deleteOne(query);

        if (result.deletedCount === 1) {
          res.status(200).json({ message: "About is  deleted successfully" });
        } else {
          res.status(404).json({ message: "About is  not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
      }
    });
    app.delete("/clientDelete/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };
        const result = await createClientCollection.deleteOne(query);

        if (result.deletedCount === 1) {
          res.status(200).json({ message: "Document deleted successfully" });
        } else {
          res.status(404).json({ message: "Document not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
      }
    });
    app.delete("/serviceDelete/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };
        const result = await serviceCollection.deleteOne(query);

        if (result.deletedCount === 1) {
          res
            .status(200)
            .json({ message: "Services  is  deleted successfully" });
        } else {
          res.status(404).json({ message: "Services   is  not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
      }
    });
    app.delete("/blogDelete/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };
        const result = await blogCollection.deleteOne(query);

        if (result.deletedCount === 1) {
          res.status(200).json({ message: "Blog is  deleted successfully" });
        } else {
          res.status(404).json({ message: "Blog  is  not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
      }
    });
    app.delete("/teamDelete/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };
        const result = await teamCollection.deleteOne(query);

        if (result.deletedCount === 1) {
          res.status(200).json({ message: "Team Member deleted successfully" });
        } else {
          res.status(404).json({ message: "Team Member is  not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
      }
    });
    app.get("/allProjectList", async (req, res) => {
      const result = await createProjectCollection.find().toArray();
      res.send(result);
    });
    app.delete("/deleteOne/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };
        const result = await createProjectCollection.deleteOne(query);

        if (result.deletedCount === 1) {
          res.status(200).json({ message: "Document deleted successfully" });
        } else {
          res.status(404).json({ message: "Document not found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
      }
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
