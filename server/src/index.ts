import express from 'express';
import { json } from 'body-parser';
import { MongoClient, ServerApiVersion  } from 'mongodb';

const app = express();
const port = 8000;
const MONGO_PW = 'CDNVrbIc5qULTLys';
const MONGO_ALIAS = 'dhub.1tf8hpf.mongodb.net';

const url = `mongodb+srv://kevinosborn:${MONGO_PW}@${MONGO_ALIAS}/?retryWrites=true&w=majority`; 
const dbName = 'dHub'; 

const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

app.use(async (req, res, next) => {
  try {
    await client.connect();

    console.log('Connected to MongoDB');
    await client.db("admin").command({ ping: 1 });

    req.dbClient = client;
    req.db = client.db(dbName);

    next();
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    res.status(500).json({ error: 'Database connection error' });
  } finally {
    await client.close();
  }
});

app.use(json());

app.get('/api/users', async (req, res) => {
  const collection = req.db.collection('users'); 
  const users = await collection.find({}).toArray();
  res.json(users);
});

app.get('/api/users/:userId', async (req, res) => {
    const userId = req.params.userId;
    const collection = req.db.collection('users');
  
    try {
      const user = await collection.findOne({ _id: userId });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      console.error('Error retrieving user:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });  

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

