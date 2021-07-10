const db = require("../../models");
const UserCont = db.users;

exports.create = (req, res) => {
  // if (!req.body.login) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });
  //   return;
  // }

  const cate = {
    login: req.body.login,
    password: req.body.password,
    username: req.body.username,
  };

  UserCont.create(cate)
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
  UserCont.findById(id)
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
          message: " Titorial was updated succesfully.",
        });
      } else {
        res.send({
          message: `Cannot update Titorial with id=${id}`,
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