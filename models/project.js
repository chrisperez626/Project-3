module.exports = function(sequelize, DataTypes){
    var Project = sequelize.define("Project", {
        projectname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1]
            }
        }       
    });

    return Project;
}