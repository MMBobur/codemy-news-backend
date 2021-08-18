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
        message: err.message || "Some error occurred while retrieving News.",
      });
    });
};

exports.create = (req, res) => {

  const userw = {

    category_id: req.body.category_id,
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    data: req.body.data,
    image: req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
  };

  

  News
    .create(userw)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the News.",
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
        message: "Error retrieving News with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const userw = {
    category_id: req.body.category_id,
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    data: req.body.data,
    image: req.protocol + "://" + req.get("host") + "/img/" + req.file.filename,
  };

  const id = req.params.id;
  News.update(userw, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "News was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update News with id=${id}. Maybe Staff was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating News with id=" + id,
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
          message: "News was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete News with id=${id}. Maybe Staff was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete News with id=" + id,
      });
    });
};

