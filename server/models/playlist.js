let mongoose = require('mongoose')
let Schema = mongoose.Schema
// let ObjectId = Schema.Types.ObjectId
let schemaName = 'Playlist'

let song = new Schema({
    trackName: {type: String},
    albumArt: {type: String},
    artistName: {type: String},
    album: {type: String},
    preview: {type: String},
    price: {type: String}
})

let playlist = new Schema({
    title: {type: String},
    songs: [song]
})



playlist.pre('save', function(next){
    this.markModified('songs')
    next()
})

module.exports = mongoose.model(schemaName, playlist)

//old bad code:

// let songSchema = new Schema({
// // let schema = new Schema({
//     Id: ObjectId, 
//         // trackName: String, required: true,
//     trackName: String,
//     collectionName: String,
//     artistName: String,
//     artworkUrl100: String,
//     trackId: String,
//     artistId: String,
//     // trackId: String, unique: true,
//     // artistId: String, unique: true,
//     collectionArtistName: String,
//     previewUrl: String,
//     collectionPrice: Number,
//     trackPrice: Number,
//     releaseDate: Date
// })


// // let songSchema = new Schema({
// //     name: 'string'
// // })

// let schema = new Schema({
//     title: String,
//     songs: [songSchema]
// })