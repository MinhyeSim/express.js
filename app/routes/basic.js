import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import BasicService from '../services/basic.service.js'

dotenv.config()
const corsOptions = {
    origin: process.env.ORIGiN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());

app.post('/bmi', cors(corsOptions),(req,res) => {
    const service = new BasicService()
    res.status(200).json(service.getBmi(req, res))
})

export default app