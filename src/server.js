const express = require('express');
//const path = require("path")

//const db = require('./database')
const routes = require('./routes/routes')

const app = express()

//conecção com o banco de dados
//db.connect()


//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extends: true}))


// definindo as rotas
app.use('/api', routes)



// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))


