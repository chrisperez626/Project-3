module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("Project", {
        projectname: {
            type: DataTypes.String,
            allowNull: false,
            validate:{
                len: [1]
            }
        }       
    });

    return Project;
}