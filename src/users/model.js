module.exports= (sequelize , Sequelize ) => {
    const User = sequelize.define("users",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        login:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        username:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        tableName:"users",
        timestamps:true
    }

    );
    return User;
    };
    