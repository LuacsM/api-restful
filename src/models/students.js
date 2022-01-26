const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: String,
    matricula: String,
    nameMother: String,
    cpf: String,
    tel: String,
    tel2: String,
    cep: String,
    address: String,
    numHouse: String,
    city: String,
    district: String,
    complement: String,
    email: String,
})

const Model = mongoose.model('students', schema)

module.exports = Model