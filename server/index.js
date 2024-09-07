import connectDB from './database/db.js';
import express from 'express';
import cors from 'cors';
import router from './routes/route.js';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the path to your build folder
// console.log(__dirname)
const buildPath = path.join(__dirname, "build");


app.use(router);
app.get("/", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });


const startServer = async () => {
    try {
      connectDB();
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();