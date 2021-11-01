const db = require('../models');
const Floor = db.floors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    //validate requests
    console.log(req.body);
    if(Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: 'Content can not be empty'
        });
        return;
    }

    //create Floor
    const floor = {
        floor_number: req.body.floor_number,
        max_x_coordinate: req.body.max_x_coordinate,
        max_y_coordinate: req.body.max_y_coordinate
    };

    //Save floor in the database
    Floor.create(floor)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error occured while creating the floor",
            });
        });
};