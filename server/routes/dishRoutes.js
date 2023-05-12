const DishController = require('../controllers/dishController')


module.exports = app => {
    app.get('/api/allDishes', DishController.allDishes);
    app.get('/dishApi', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    });
    app.get('/api/oneDish/:id', DishController.oneDish);
    app.post('/api/newDish', DishController.createDish);
    app.put('/api/updateDish/:id', DishController.updateDish);
    app.delete('/api/allDishes/:id', DishController.deleteDish)
}