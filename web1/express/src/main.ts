import { configDotenv } from 'dotenv';
import express from 'express'

configDotenv({quiet: true});
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send(`<h1>Root na porcie ${port}</h1>`)
});
app.get('/about', (req,res) => {
    res.send(`<h1>Cześć nygga</h1>`)
});
app.post('/login', (req,res) => {
    const data = req.body.nigga
    res.send(`<h1>POST trigger ${data}</h1>`,);
})


app.listen(3000, () => {
    console.log("App listens on port:", port)
})