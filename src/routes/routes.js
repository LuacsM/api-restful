const router = require('express').Router()
const studentController = require('../controllers/students')


router.get('/students/:id?', studentController.getId)
router.get('/students/matricula/:matricula?/:age?', studentController.get)
router.post('/students', studentController.post)
router.put('/students/:id', studentController.put)
router.delete('/students/:id', studentController.remove)

module.exports = router