import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'
import { createStream } from 'rotating-file-stream'
import dotenv from 'dotenv'
// import connectDatabase from './configs/db.config.js'
import routes from './src/routes/route.js';
dotenv.config()

// connectDatabase()

const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === "production"
console.log(isProd);
const app = express();

const accessLogStream = createStream("access.log", {
    interval: '1d',
    path: path.join(__dirname, "log")
})

// use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet())
app.use(isProd ? morgan('combined', { stream: accessLogStream }) : morgan('dev'))
app.use(cors())
app.use(express.json())
routes(app)

app.get('/', async (req, res) => {
    console.log(' acac zxs');
    console.log('câcc');
    console.log('cá');
    res.json({ message: "hello asdd  Toan" });


})

// app.get('*', async (req, res) => {
//     res.json({ message: "hel lo" });

// })


app.listen(PORT)
console.log(`listen on  port :${PORT}`);