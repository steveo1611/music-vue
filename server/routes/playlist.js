var router = require('express').Router()
var Playlist = require('../models/playlist')


router.get('/api/playlists/:id?', (req, res) => {
    if (req.params.id) {
        Playlist.findById(req.params.id)
            .then(playlists => {
               return res.send(playlist)
            })
            .catch(errors => {
               res.status(404).send({ 'error': 'No Playlist at that ID' })
            })
        }
    })       
         
    router.get('/api/playlists', (req, res) => {
        Playlist.find({})
        .then(playlists => {
              return res.send(playlists)
        })
        .catch(err => {
            res.status(400).send({err})
        })
    })

// router.get('/api/playlists', (req, res) => {
//     Playlist.find({})
//     .then(playlists => {
//        return res.send(playlists)
//     })
//     .catch(errors => {
//         res.status(404).send({ 'error': 'No playlists are available'})
//     })
// })

router.post('/api/playlists', (req, res) => {
    Playlist.create(req.body)
        .then(newPlaylist => {
            return res.send(newPlaylist)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//PUT
//Add a single song
router.put('/api/song/:id', (req, res) => {
    Playlist.findById(req.param.id)
        .then(function (playlists) {
            playlist.songs.$addToSet(req.body)
            playlist.save()
            // res.send('"Successfully added" + req.trackname')
            res.send("Successfully added")
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//Update entire song array from entir playlist
router.put('/api/playlists/:id', (req, res) => {
    Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(playlist => {
            res.send(playlist)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.delete('/api/playlists/:id', (req, res) => {
    Playlist.findByIdAndRemove(req.params.id)
        .then(oldPlaylist => {
            res.send("successfullly deleted")
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = {
    router
}