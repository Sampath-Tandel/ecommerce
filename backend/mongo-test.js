import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

try {
  await client.connect();
  console.log("✅ Connected successfully!");
  await client.close();
} catch (err) {
  console.error(err);
}
