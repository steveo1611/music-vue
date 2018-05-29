var router = require('express').Router()
var Playlist = require('../models/playlist')


router.get('api/lists', (req, res, next) => {
    Playlist.find({})
        .then(playlist => {
            res.status(200).send(playlist)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})


router.post('/api/lists/:listId', (req, res, next) => {
    Lists.findByIdAndUpdate(req.params.listId, req.body).then(list => {
        res.send(list)
    })
})

router.put('/api/playlistAdd/:playlistId', (req, res, next) => {
    // debugger
    $push:{req.body}
// debugger
    // this.playlist
    db.collection.save()
    .then(() => {
        res.send(this.playlist)
    })
})




router.put('/api/playlist/:playlistId', (req, res, next) => {
    // if (req.body._id == true) {
    //      console.log('new-create')
    //      console.log(req.body)
    //     // debugger
    //     Playlist.create(req.body).then(playlist => {
    //         //debugger 
    //         // list.songs.$addToSet(req.body)
    //         playlist.$push(req.body)
    //         //    .then(() => {
    //                 res.send(playlist)
    //             })
    //             .catch(err => {
    //                 res.status(400).send(err)
    //             })
    //     // })
    // } else {

        Playlist.findById(req.params.playlistId).then(list => {
            console.log('add user')
            console.log(req.body)
            debugger
            // list.playlist.$addToSet(req.body)
            // list.songs.$addToSet(req.body)
            playlist.$push(req.body)
            list.save()
                .then(() => {
                    res.send(list)
                })
                .catch(err => {
                    res.status(400).send(err)
                })
        })
    }
)





module.exports = {
    router
}