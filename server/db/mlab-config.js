var mongoose = require('mongoose')
var connectionString = 'mongodb://steve0:steve0@ds115350.mlab.com:15350/steve-musicvue'
var connection = mongoose.connection

mongoose.connect(connectionString)
mongoose.set('debug', true)

connection.on('error', err=>{
    console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', ()=>{
    console.log('Connected to Database')
})
