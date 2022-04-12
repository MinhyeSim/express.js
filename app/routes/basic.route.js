const { getBmi } = require('../controllers/basic.controller');
module.exports = x => x.app.post(`${x.url}/bmi`, getBmi) ;