const {boardform,boardlist} = require('../controllers/board.controller');
module.exports = x => {x.app.post(`${x.url}/boardform`, boardform)
                       x.app.get(`${x.url}/boardlist`, boardlist)} ;