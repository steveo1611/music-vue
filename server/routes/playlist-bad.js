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

router.put('/api/playlist', (req, res, next)=> {
    // debugger
    Playlist.songs.create(req.body).then(playlist => {
    Playlist.songs.id.push(req.body).then(playlist => {
    {$addToSet: { songs: req.body}}
    res.send(playlist)
})
})
})

router.post('/api/lists/:listId', (req, res, next) =>{
    Lists.findByIdAndUpdate(req.params.listId, req.body).then(list => {
    res.send(list)
    })
    })
    
router.put('/api/lists/:listId/songs', (req, rew, next) =>{
    Lists.findById(req.params.listId).then(list => {
        list.songs.$addToSet(req.body)
    })
})



// router.put('/api/lists/:listId', (req, res, next) =>{
//     // Playlist.findById(req.params.id).then(playlist =>{
//       Playlist.findOne({_id:req.body.trackId}, function(err,doc){ 
            
//         // if(err);
//         //     res.sendStatus(500).send('database error' ).end();
//         // if(!doc){
//         //     res.sendStatus(404).send('Song was not found').end()
//         // }else{
//        var doc = Playlist.songSchema.id(_id)
//        debugger
//         doc.songs.push({trackName: req.body.trackName});
       
//         doc.markModified('songs')
//         doc.save();
//          res.sendStatus(200).send('song saved').end();
//         })
//      })
    
    
    
    
    // Playlist.findById(req.params.id, function (err, req){}).then(playlist =>{
    // //    debugger
    //     playlist.$addToSet(req.body)
    //     // {$addToSet: { playlist.songs: req.body}}
    //     playlist.save().then(() =>{
    //     res.send(playlist)
    //     })
        // })
    // })



module.exports = {
    router
}