<template>
  <div class="itunes-search">
        <form @submit.prevent='getSearchRes'>
    <input type="text" v-model="query" placeholder="Enter music search" >
    <!-- <button @click="getSearchRes">Search</button> -->
    </form>
          <h3>Results:</h3> 
            <div class ="songs">
            <article v-for="search in getSearch" class="card">
          <!-- <a :href="search.previewUrl" target="_blank"> -->
              <div class="image">
              <img :src="search.artworkUrl100" :alt="search.collectionName"></div>
              <div class = "description">
                <h3 class="song-title">{{search.trackName}}</h3>
                <h3 class="album-title">{{search.collectionName}}</h3>
                <p class="artist-name">{{search.artistName}}</p>
                <button @click="addToPlaylist(search)">Add to Playlist</button>
              </div>
          <!-- </a> -->
            </article>
          </div>
  </div>
</template>

<script>
  export default {
    name: 'itunes-search',
    // props: ["search"]
    data() {
      return {
        query: ''
      }
    
},
    computed: {
        getSearch() {
      return this.$store.state.songs;
      }
    },
    methods: {
         getSearchRes() {
      this.$store.dispatch("getSearchResults", this.query);
      this.query = "";
    },
        addToPlaylist(search) {
      this.$store.dispatch("addToPlaylist", search);
    }  
    }
  }

</script>

<style>


</style>
