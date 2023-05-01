const Dish = require('../models/dishModel');


module.exports={

allDishes: (req, res) => {
    Dish.find({})
        .then((allDishes) => {
            res.json(allDishes)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneDish: (req, res) => {
    Dish.findOne({_id: req.params.id})
        .then((dish) => {
            res.json(dish)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

createDish: (req, res) => {
    Dish.create(req.body)
        .then((newDish) => {res.json(newDish)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
updateDish: (req, res) => {
    Dish.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedDish) => {res.json(updatedDish)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
deleteDish: (req, res) => {
    Dish.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => {
            res.json(deleteConfirmation)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},


}