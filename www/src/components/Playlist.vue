<template>
  <div class="playlist">
          <h3>Play List:{{playlist.title}}</h3> 

            <article v-for="song in playlist.songs" class="card">
          <!-- <a :href="search.previewUrl" target="_blank"> -->
              <div class="image">
              <img :src="playList.artworkUrl100" :alt="playList.collectionName"></div>
              <div class = "description">
                <h3 class="song-title">{{playList.trackName}}</h3>
                <h3 class="album-title">{{playList.collectionName}}</h3>
                <p class="artist-name">{{playList.artistName}}</p>
                <button @click="moveUpPlaylist(playList.trackId)">Move UP Playlist</button>
                <button @click="moveDownPlaylist(playList.trackId)">Move DOWN Playlist</button>
                <button @click="removeFromPlaylist(playList.trackId)">Remove from Playlist</button>
              </div>
  
            </article>
          </div>
        </div>
</template>

<script>
  export default {
    name: 'playlist',
    // props: ["playlist"]
    data() {
      return {
        song:{    
            artist: "",
            song: ""
            }
        };
    },
    computed: {
   playList() {
      return this.$store.state.currentPlayList;
    },
    getPlayList() {
      this.$store.dispatch("getPlayList");
    }
    },
    methods: {
    removeFromPlaylist(payload) {
      this.$store.dispatch("removeFromPlaylist", payload);
    },

    addToPlaylist(search) {
      this.$store.dispatch("addToPlaylist", search);
    }
    },
  }

</script>

<style>


</style>
