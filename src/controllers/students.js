const studentsModel = require('../models/students')

async function get(req, res){
    const {matricula, age} = req.params

    const obj = matricula ? { matricula: matricula, age: age } : null

    const students = await studentsModel.find(obj)

    res.send(students)
}

async function getId(req, res){
    const {id} = req.params

    const obj = id ? { _id: id} : null

    const students = await studentsModel.find(obj)

    res.send(students)
}

async function post(req, res){
    const {
        name,
        matricula,
        age,
        nameMother,
        cpf,
        tel,
        tel2,
        cep,
        address,
        numHouse,
        city,
        district,
        complement,
        email,
    } = req.body

    const student = new studentsModel({
        name,
        matricula,
        age,
        nameMother,
        cpf,
        tel,
        tel2,
        cep,
        address,
        numHouse,
        city,
        district,
        complement,
        email,
    })

    student.save()

    res.send({
        message: "sucesso"
    })
}

async function put(req, res){
    const {id} = req.params


    const student = await studentsModel.findOneAndUpdate({ _id: id}, req.body, {new: true})
    
    res.send({
        message: "sucesso",
        student,
    })
}

async function remove(req, res){
    const {id} = req.params

    const remove = await studentsModel.deleteOne({_id: id})

    const message = remove ? "sucesso" : "error"

    res.send({
        message,
    })
}


module.exports = {
    get, post, put, remove, getId,
}