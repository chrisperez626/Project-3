var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes){
    const User = sequelize.define("User", {       
        firstname:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        initial:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        }
    },{
        timestamps:false
    });

    User.associate = function(models){
        User.hasMany(models.Task,{
            foreignKey:{
                allowNull:false
            }
        });
    };

    

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};