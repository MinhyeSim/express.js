const { write } = require('../controllers/admin.controller');
module.exports = x => x.app.post(`${x.url}/write`, write) ;