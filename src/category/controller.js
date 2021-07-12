const db = require("../model/index");

const CateCont = db.categories;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //Create Categoty
  const cate = {
    name: req.body.name,
    color: req.body.color,
  };

  CateCont.create(cate)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Create error: " + err);
    });
};

exports.findAll = (req, res) => {
  CateCont.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindAll error: " + err);
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  CateCont.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("FindById error: " + err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  CateCont.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log("Update error: " + err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  CateCont.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      console.log("Delete error: " + err);
    });
};