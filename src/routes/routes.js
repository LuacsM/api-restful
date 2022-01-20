const router = require('express').Router()
const productController = require('../controllers/products')


router.get('/products/:id?', productController.get)
router.post('/products', productController.post)
//router.put('/products/:id', productController.put)
//router.delete('/products/:id', productController.delete)

module.exports = router