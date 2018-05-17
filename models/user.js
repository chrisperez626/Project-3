var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {       
        firstname:{
            type: DataTypes.String,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        lastname:{
            type: DataTypes.String,
            allowNull: false,
            validate:{
                len: [1]
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
            type: DataTypes.String,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        cell:{
            type: DataTypes.String,
            allowNull: true,
        }
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};