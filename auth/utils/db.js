import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const uri = process.env.DB_URL;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(uri, options);

  await client.connect();

  return client.db();
}