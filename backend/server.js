
import  express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRouter from "./routes/UserRoutes.js";
import cors  from "cors";
const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://amirtha:amirtha@cluster0.yptchkw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error connecting to the database:', error);
});

db.once('open', () => {
    console.log('Database connected successfully');
    // Start your server or perform other actions after the database connection is established
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/api/add',UserRouter);

app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

