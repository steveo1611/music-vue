let mongoose = require('mongoose')
let Schema = mongoose.Schema
// let ObjectId = Schema.Types.ObjectId
let schemaName = 'Playlist'

let song = new Schema({
    title: String,
    albumArt: String,
    artist: String,
    album: String,
    preview: String,
    price: String
})


let playlist = new Schema({
    title: String,
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