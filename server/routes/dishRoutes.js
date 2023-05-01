const DishController = require('../controllers/dishController')


module.exports = app => {
    app.get('/api/allDishes', DishController.allDishes);
    app.get('/api/oneDish/:id', DishController.oneDish);
    app.get('/api/DCMon/:id', DishController.oneDish);
    app.post('/api/newDish', DishController.createDish);
    app.put('/api/updateDish/:id', DishController.updateDish);
    app.delete('/api/allDishes/:id', DishController.deleteDish)
}