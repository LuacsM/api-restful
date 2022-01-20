const mongoose = require('mongoose')

function connect(){
    mongoose.connect('mongodb://localhost:27017/api-restful?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}
