const { Pastille } = require('../models')

module.exports = {

    // Get all users
    async index(req, res) {
        try {
            const pastilles = await Pastille.findAll()
            res.send(pastilles)
        } catch (err) {
            res.status(500).send({
                error: 'The users inforgmation was incorrect'
            })
        }
    },
    // Create user
    // res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    async create(req, res) {
        try {
            const pastille = await Pastille.create(req.body)
            res.send(pastille.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create user incorrect'
            })
        }
    },

    // Edit user
    // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    async put(req, res) {
        try {
            await Pastille.update(req.body, {
                where: {
                    id: req.params.pastilleId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },

    // Delete user
    // res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    // delete user
    async remove(req, res) {
        try {
            const pastille = await Pastille.findOne({
                where: {
                    id: req.params.pastilleId
                }
            });
            if (!pastille) {
                return res.status(403).send({
                    error: 'The pastille information was incorrect'
                });
            }
            await pastille.destroy();
            res.send(pastille);
        } catch (err) {
            res.status(500).send({
                error: 'The pastille information was incorrect'
            });
        }
    },

    // Show user by id
    async show(req, res) {
        try {
            const pastille = await Pastille.findByPk(req.params.pastilleId)
            res.send(pastille)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
}


