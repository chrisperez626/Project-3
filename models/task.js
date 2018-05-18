module.exports = function(sequelize, DataTypes){
    const Task = sequelize.define("Task", {
        taskname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull:false,
            
        }        
    },{
        timestamps:false
    });

    Task.associate = function(models){
        Task.belongsTo(models.Project,{
            foreignKey:{
                allowNull:false
            }
        });
    };

    return Task;
}