const db = require("../models");

module.exports = {

    findAll: (req, res) => {
        db.Project
            .findAll(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },

    findbyId: (req,res) =>{
        db.Project.findbyId({
            where:{
                id:req.params.id
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },

    create: (req, res) => {
        db.Project.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },

    update: (req, res) => {
        db.Project.update( req.body, {
            where:{
                id:req.params.id
            }
        }).then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },

    remove: (req, res) => {
        db.Project
            .destroy({
                where:{
                    id:req.params.id
                }
            }).then(dbModel => dbModel.remove())
            .catch(err=>cosole.log(err));
    }
};
