import express from 'express';

const app = express()

app.use(express.json())

app.get('/calculator', async (req, res) => {
    res.send({
        "id": 1,
        "super":"message",
    })
})

app.listen(8000,() => {
    console.log("i am listening on port 8000");
})