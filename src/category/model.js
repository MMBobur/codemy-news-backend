module.exports = (sequelize, Sequelize) =>{
    const ModelCategories = sequelize.define(
      "category",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING,
          allowNull: true
        },
      },
      {
        tableName: "category",
        timestamps: false
      }
    );
    return ModelCategories;
  };