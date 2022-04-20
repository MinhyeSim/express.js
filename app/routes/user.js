/**const {signup, userlist, profile, login} = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/signup`,signup)
                        x.app.post(`${x.url}/login`,login)
                        x.app.get(`${x.url}/list`,userlist)}*/
                        
import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());

app.post('/join', cors(corsOptions),(req, res) => {
    const service = new BasicService()
    res.status(200).json(service.getBmi(req, res))
})

export default app