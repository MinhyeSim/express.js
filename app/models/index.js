import dotenv from 'dotenv'
import mongoose from 'mongoose';
mongoose.Promise = global.Promise


const db = {}
db.url = dotenv.MONGO_URI
db.mongoose = mongoose

//db.user = require('./user.model')(mongoose)
//db.board = require('./board.model')(mongoose)

export default db 

