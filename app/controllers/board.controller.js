const db = require('../models/index')
const Schema = db.board
exports.boardform = (req,res) => {
    new Schema(req.body).save(()=>{
        res.status(200).json({'result': 'ok'})
    })
}

exports.boardlist = (req,res)=> {
    console.log(`#### 성공성공 짝짝짝 ###`)
    Schema.find()
    .exec((err,boards) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({success: true, boards})
    })    
}