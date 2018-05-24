let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'WatchList'

let schema = new Schema({
    song: {type: String},
    artist: {type: String},
    album: {type: String},
    imgUrl: {type: String}
})
