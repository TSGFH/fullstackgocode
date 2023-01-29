import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);


const GetProducts = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const Products = mongoose.model('Products', GetProducts);

app.get('/api/products', async (req, res) => {
    try {
        const data = await Products.find({})
        res.status(200).send(data)
    } catch (e) {
        console.log(e)
        res.status(500).send({message:e})
    }

}); 

mongoose.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log("i am listening on port " + PORT);
});