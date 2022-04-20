const { MongoClient } = require('mongodb');
const { getBuildInfo } = require('../../../../AppData/Local/Programs/Microsoft VS Code/resources/app/out/vs/loader');
const connectionString = process.env.NODE_ENV
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let dbConnect;

module.exports = {
    acceptDb(callback){
        client.connect((err, db) => {
            if(err || !db){
                return callback(err)
            }
            dbConnect = db.db('soccerdb');
            console.log('DB 구성에서 몽고DB에 접속하다')
            return callback()
        })
    },
    getDb(){ return dbConnect}
}