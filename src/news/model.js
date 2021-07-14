module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define(
      "News",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        car_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        text: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data: {
          type: Sequelize.BLOB("long"),
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false
        },
        
      },
      {
        tableName: "News",
        timestamps: false,
      }
    );
    return News;
  };