//서버가 잘 돌아가는지 보는 곳 
import express from "express"
var indexRouter = express.Router();


indexRouter.route('/').get(function(_req, res) {
  res.json({"현재시간 : ":new Date().toLocaleString()})
});

export default indexRouter;
