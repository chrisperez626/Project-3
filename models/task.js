module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define("Task", {
        taskname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull:false
        }        
    });

    return Task;
}