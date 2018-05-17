module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("Task", {
        taskname: {
            type: DataTypes.String,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        status: {
            type: DataTypes.string,
            allowNull:false
        }        
    });

    return User;
}