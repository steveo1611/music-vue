var mongoose = require('mongoose')
var connectionString = 'mongodb://steveo:steveo@ds135540.mlab.com:35540/steveo-musicvue'
var connection = mongoose.connection

mongoose.connect(connectionString)
mongoose.set('debug', true)

connection.on('error', err=>{
    console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', ()=>{
    console.log('Connected to Database')
})
