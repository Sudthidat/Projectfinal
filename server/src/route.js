const PastilleController = require('./controllers/PastilleController')
const UserController = require('./controllers/UserController')

module.exports = (app) => {


    //get all user
    app.get('/pastilles', PastilleController.index)

    //create
    app.post('/pastille', PastilleController.create)

    //edit
    app.put('/pastille/:pastilleId', PastilleController.put)

    //delete
    app.delete('/pastille/:pastilleId', PastilleController.remove)

    //show by id
    app.get('/pastille/:pastilleId', PastilleController.show)

    //---------------------------------------------//

    //get all user
    app.get('/users', UserController.index)

    //create
    app.post('/user', UserController.create)

    //edit
    app.put('/user/:userId', UserController.put)

    //delete
    app.delete('/user/:userId', UserController.remove)

    //show by id
    app.get('/user/:userId', UserController.show)


}