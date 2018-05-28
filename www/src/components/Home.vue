<template>
  <div class="Home">
    <h1>Welcome to Stevie's Music <img id='vuePic' src="../assets/logo.png">ue Shop</h1>
    <div class="topMusic">
    <form @submit.prevent='getSearchRes'>
    <input type="text" v-model="query">
    <!-- <button @click="getSearchRes">Search</button> -->
    </form>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
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
        <div class="col-6">
          <h3>Play List:</h3> 

            <article v-for="playList in playList" class="card">
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
    </div>
  </div>
  </div>
 

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search: "",
      // songId: this.$route.params.songId,
      query: ""
    };
  },
  // data() {
  //   return {

  //   };
  //  },
  computed: {
    playList() {
      return this.$store.state.playList;
    },
    getSearch() {
      return this.$store.state.songs;
    }
  },
  methods: {
    getSearchRes() {
      this.$store.dispatch("getSearchResults", this.query);
      this.query = "";
    },
    getPlayList() {
      this.$store.dispatch("getPlayList");
    },
    addToPlaylist(search) {
      this.$store.dispatch("addToPlaylist", search);
    },
    removeFromPlaylist(payload) {
      this.$store.dispatch("removeFromPlaylist", payload);
    }
  }
};
</script>

<style scoped>
#vuePic {
  width: 1.5rem;
}

.songs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--grid-min), 1fr));
  grid-gap: var(--grid-gap);
  counter-reset: rank;
  margin: 4%;
  --grid-gap: 30px;
  --grid-min: 175px;
}
article {
  counter-increment: rank;
  position: relative;
  background: $card;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  animation: mouseOut 0.3s ease-in;
  .image {
    position: relative;
    width: 100%;
    &:after {
      // This forces the image container to be a square
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    &:before {
      content: "•••";
      font-size: 24px;
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      color: rgba(white, 0.1);
      z-index: 0;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      opacity: 0;
      &.active {
        animation: imageFadeIn 0.5s ease-in forwards;
        animation-delay: 0.5s;
      }
    }
  }
  .description {
    padding-bottom: 10px;
    h3,
    p {
      padding: 0 10px;
    }
    p.artist {
      color: #666;
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 700;
      margin-bottom: 0;
      &:before {
        content: "";
        display: block;
        width: 25px;
        height: 2px;
        margin-bottom: 4px;
        background: $background;
      }
    }
  }
  &:before {
    content: "#" counter(rank);
    display: block;
    width: 25px;
    height: 20px;
    line-height: 20px;
    background: rgba($background, 0.75);
    color: white;
    position: absolute;
    z-index: 20;
    right: 0px;
    top: 0px;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
  }
}
/* NO WORKY- TBD */
/* article:hover {
    animation: mouseOver 0.3s ease-in forwards;
  }
} will need to remove the curly above if this is re-enabled

// ANIMATIONS
@keyframes mouseOver {
    0% {
        top: 0;
    }
    100% {
        top: -5px;
    }
} */
</style>

