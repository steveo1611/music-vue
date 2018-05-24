# www

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


vue-music
Even more fun with Music!
Alright so it's checkpoint time again so please dont stop the music...

The Setup
You should have from the previous checkpoint a fully functional app that searches the Itunes API for all of your favorite music. However the current state of that application is lacking a certian flare.

It's time to level this app up with Vuejs. Your end goal should be an app which allows you to create a list of your favorite songs that you can easily change the order of and play at your discretion, without having to requery the itunesService.

This project already has the itunes service pulled over but you will be responsible for building out the components necessary to use it. Make sure that you resolve the itunes request.

Once you get the Itunes service drawing to your itunes component it will be time to focus on adding a way for you to keep track of your favorite songs. You will be doing this in the mytunes-service.js

The mytunes-service needs to be completed

export default {
  getTracks() { },
  addTrack() { },
  removeTrack() { },
  promoteTrack() { },
  demoteTrack() { }
}
Managing your list of songs will likely be the trickest part of the assignment.

Step 1 - Communicating with Services?
Before starting step 1 You should already have a component that is responsible for drawing the itunes songList to the page. From your itunes component you will need to add a button to each song as it is rendered to the page so you have the option of adding it to your tracks....

You will need to ensure that your component imports the MyTunesService. Focus on hooking up the add button to a function. Make sure you can get the button to pass you the information needed to identify the correct song.

Then make sure you take the entire song object and pass it to your myTunes.addTrack method

   addTrack(track){
    //....
      myTunes.addTrack(track) // <--- Make sure you have imported the MyTunesService
    //....
  }
Step 2 - The MyTunes Component
The Mytunes Component is the wow factor for your application. It is here where you can be creative in the way you want to manage your list. You will need to add a few more functions to your controller that will be tied to buttons for each of the songs in your list.

Key features here will include:

removeTrack
promoteTrack
demoteTrack

Also don't forget it would be useless to keep around a list if you couldn't still play the songs.

Requirements:
Visualization
Users have a Search component and a myTunes component seperate from each other on the page
Playlist retains order set by user
Functionality
Retains functionality of first playlist
Persist your data with mongoDB
Add / Remove Tracks from Playlist
Promote/Demote Tracks on Playlist
BONUS IDEAS - Some enhancing features
User Auth
Have your myTunes List slide in and out when wanting to access it
Implement dragging to reorder your songs and drag to add to favorites
Stretch Goal: Allow the user to create multiple playlists and manage the songs on each playlist HINT:

let store = { 
  playlists: { 
    "90's Rock": [], 
    "Best of the 90's": [] 
  }
}

// You probably will need a few extra public methods
// CreatePlaylist()
// RemovePlaylist()

//And an extra Schema....



the itunes api retuns this: 

"resultCount":50,

 "results": [
{"wrapperType":"track",
 "kind":"song",  
 "artistId":54657,
"collectionId":798901876,
 "trackId":798905891,
 "artistName":"Elton John", 
 "collectionName":"Goodbye Yellow Brick Road (40th Anniversary Celebration)", 
 "trackName":"Bennie and the Jets", 
 "collectionCensoredName":"Goodbye Yellow Brick Road (40th Anniversary Celebration)", 
 "trackCensoredName":"Bennie and the Jets", 
 "artistViewUrl":"https://itunes.apple.com/us/artist/elton-john/54657?uo=4", 
 "collectionViewUrl":"https://itunes.apple.com/us/album/bennie-and-the-jets/798901876?i=798905891&uo=4", 
 "trackViewUrl":"https://itunes.apple.com/us/album/bennie-and-the-jets/798901876?i=798905891&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/c6/c2/31/c6c23140-9542-cbcb-92bd-01721bc39615/mzaf_4635517473655368232.plus.aac.p.m4a", 
"artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/27/d3/93/27d39306-ada8-be0e-de7e-2e356329311e/source/30x30bb.jpg", 
"artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/27/d3/93/27d39306-ada8-be0e-de7e-2e356329311e/source/60x60bb.jpg", 
"artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/27/d3/93/27d39306-ada8-be0e-de7e-2e356329311e/source/100x100bb.jpg", 
"collectionPrice":9.99, 
"trackPrice":1.29, 
"releaseDate":"1973-10-05T07:00:00Z", 
"collectionExplicitness":"notExplicit", 
"trackExplicitness":"notExplicit", 
"discCount":1, 
"discNumber":1, 
"trackCount":17, 
"trackNumber":3, 
"trackTimeMillis":322553, 
"country":"USA", 
"currency":"USD", 
"primaryGenreName":"Rock", 
"isStreamable":true}, 