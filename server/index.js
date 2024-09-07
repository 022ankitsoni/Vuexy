import connectDB from './database/db.js';
import express from 'express';
import cors from 'cors';
import router from './routes/route.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/',router);
app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Hello',
    });
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