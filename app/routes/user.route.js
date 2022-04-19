const {signup, userlist, profile, login} = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/signup`,signup)
                        x.app.post(`${x.url}/login`,login)
                        x.app.get(`${x.url}/list`,userlist)}