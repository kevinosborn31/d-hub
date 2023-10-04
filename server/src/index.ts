import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors";

import googleRoutes from "./routes/google-routes";

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_PW = "CDNVrbIc5qULTLys";
const MONGO_ALIAS = "dhub.1tf8hpf.mongodb.net";

const url = `mongodb+srv://kevinosborn:${MONGO_PW}@${MONGO_ALIAS}/?retryWrites=true&w=majority`;
const dbName = "dHub";

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: "GET,POST",
  })
);

app.use(express.json());

app.use("/api/google", googleRoutes);

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(async (req, res, next) => {
  try {
    await client.connect();

    console.log("Connected to MongoDB");
    await client.db("admin").command({ ping: 1 });

    req.dbClient = client;
    req.db = client.db(dbName);

    next();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    res.status(500).json({ error: "Database connection error" });
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => console.log("Server on port", PORT));
