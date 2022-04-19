const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    new UserSchema(req.body).save(()=>{
        console.log('####### 진행 4 ######')
        res.status(200).json({'result':'ok'}) 
    })    
}
exports.userlist = (req,res) => {
    console.log(`userController access !!!`)
    UserSchema.find()
    .exec((err,users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({success : true, users})
    })    
}

exports.userlist = (req,res) => {
    console.log(`userController access !!!`)
    UserSchema.find()
    .exec((err,users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({success : true, users})
    })    
}
exports.login = (req,res) => {
    console.log(`userController access !!!`)
    UserSchema.find({userid: req.params.id, password: req.params/password})
    .exec((err,users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({success : true, users})
    })    
}