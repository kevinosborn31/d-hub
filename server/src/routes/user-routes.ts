import express, { Request, Response, Router } from "express";
import { getUserData } from "../controllers/google-controller";
import { sendVerificationEmail } from "../utils/sendVerificationEmail";

const router: Router = express.Router();

router.get("users", async (req, res) => {
  const collection = req.db.collection("users");
  const users = await collection.find({}).toArray();
  res.json(users);
});

router.get("users/:userId", async (req, res) => {
  const userId = req.params.userId;
  const collection = req.db.collection("users");

  try {
    const user = await collection.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error retrieving user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("users/verify", async (req, res) => {
    const userId = req.body.userId;
    const collection = req.db.collection("users");
  
    // Update the user's 'verified' property to true
    await collection.updateOne({ _id: userId }, { $set: { verified: true } });
  
    // Fetch the updated user document
    const user = await collection.findOne({ _id: userId });
  
    // Send the verification email
    sendVerificationEmail(user.email);
  
    res.json(`Verification email sent to ${user.email}`);
  });
  

export default router;
