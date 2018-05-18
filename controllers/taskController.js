const db = require("../models");
// const router = require("express").Router();

module.exports = {
    findAll: (req, res) => {
        db.Task
            .findAll(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },

    findbyId:(req,res) =>{
        db.Task.findbyId({
            where:{
                id:req.params.id
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },

    create:(req, res) => {
        db.Task.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },

    update: (req, res) => {
        db.Task.update( req.body, {
            where:{
                id:req.params.id
            }
        }).then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },

    delete: (req, res) => {
        db.Task
            .destroy({
                where:{
                    id:req.params.id
                }
            }).then(dbModel => dbModel.remove())
            .catch(err=>cosole.log(err));
    }
};
