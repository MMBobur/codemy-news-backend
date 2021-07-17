const db = require("../model/index");
const News = db.News;

exports.findAll = (req, res) => {
  News
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};

exports.create = (req, res) => {

  const userw = {

    car_id: req.body.car_id,
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    data: req.body.data,
    image: req.protocol + "://" + req.get("host") + "/image/" + req.file.filename,
  };

  

  News
    .create(userw)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Users.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  News
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Users with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const userw = {
    car_id: req.body.car_id,
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    data: req.body.data,
    image: req.protocol + "://" + req.get("host") + "/image/" + req.file.filename,
  };

  const id = req.params.id;
  News.update(userw, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Users was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Users with id=${id}. Maybe Staff was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  News
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

