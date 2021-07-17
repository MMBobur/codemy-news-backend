const db = require("../model/index");
const jwt = require("jsonwebtoken")
const UserCont = db.users;

exports.create = (req, res) => {
  
  if (!req.body.login) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const user = {
    login: req.body.login,
    password: req.body.password,
    username: req.body.username,
  };

  UserCont.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Create error: " + err);
    });
};

exports.findAll = (req, res) => {
  UserCont.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindAll error: " + err);
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  UserCont.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindById error: " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  UserCont.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: " Tutorial was updated succesfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}`,
        });
      }
    })
    .catch((err) => {
      console.log("Update err: " + err);
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  UserCont
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Users was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Users with id=${id}. Maybe Staff was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Users with id=" + id,
      });
    });
};


exports.auth = async function (req, res, next) {
  const{username, password, id} = req.body;
  UserCont.findAll({
    where: {
      username: username,
      password: password
    }
  })
  .then((data) => {
    if(data[0].username === username && data[0].password === password){
      const token = jwt.sign({
        id : data[0].id,
        title: username,
        role: 'user'
      },
      process.env.TOKEN_SECRET_KEY,
      {
        algorithm:"HS256",
        expiresIn:process.env.TOKEN_ADMIN_EXPIRESIN,
      }
      );
      return res.status(200).json({ token });
    }
  })
  .catch((err) => {
    console.log("Errorni yomoni: " + err);
  });
}
