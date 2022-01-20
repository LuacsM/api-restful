const productsModel = require('../models/products')

async function get(req, res){
    const {id} = req.params

    const obj = id ? { _id: id } : null

    const products = await productsModel.find(obj)

    res.send(products)
}

async function post(req, res){
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new productsModel({
        name,
        brand,
        price
    })

    product.save()

    res.send({
        message: "sucesso"
    })
}

async function put(req, res){
    const {id} = req.params


    const product = await productsModel.findOneAndUpdate({ _id: id}, req.body, {new: true})
    
    res.send({
        message: "sucesso",
        product,
    })

    /* Edita Produto 
    const product = await productsModel.findOne({_id: id})
    
    await product.updateOne(req.body)

    res.send({
        message: "sucesso",
        product,
    }) */
}

async function remove(req, res){
    const {id} = req.params

    const remove = await productsModel.deleteOne({_id: id})

    const message = remove ? "sucesso" : "error"

    res.send({
        message,
    })
}


module.exports = {
    get, post, put, remove,
}