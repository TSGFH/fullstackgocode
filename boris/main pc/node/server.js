import express from 'express';

const app = express()

app.use(express.json())

app.get('/calculator', async (req, res) => {
    res.send("")
})

app.listen(8000,() => {
    console.log("i am listening on port 8000");
})