let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Playlist'
let ObjectId = Schema.Types.ObjectId


let schema = new Schema({
    song: {type: String},
    artist: {type: String},
    album: {type: String},
    imgUrl: {type: String}
})

module.exports = mongoose.model(schemaName, schema)
