const jwt = require("jsonwebtoken");
const moment = require("moment");
const db = require("../model/index");
const UserCont = db.users

module.exports = async function (req, res, next) {
  let token = req.headers["token"];
  let decoding = jwt.decode(token);
  let now = moment().unix(Number);
  let payload = jwt.decode(token, process.env.TOKEN_SECRET_KEY);
  if (!token) {
    return res.send("Token is required");
  }
  if (now > payload.exp) {
    return res.send("Token has expired!");
  } else {
    const id = decoding.id;
    UserCont.findByPk(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log("FindById error: " + err);
      });
  }
};
