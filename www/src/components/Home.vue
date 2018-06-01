<template>
  <div class="Home">
    <h1>Welcome to Stevie's Music <img id='vuePic' src="../assets/logo.png">ue Shop</h1>
    <div class="topMusic">

    <div class="container-fluid">
      <div class="row">
        <div class="col-6">

<!-- itunes section -->
<itunes-search></itunes-search>

        </div>
        <div class="col-6">
  <all-Playlists></all-Playlists>      
<!-- //playlist section -->
    </div>
  </div>
  </div>
   </div>
  </div>

</template>

<script>
import itunesSearch from './ItunesSearch'
import playlist from './Playlist'
import allPlaylists from './AllPlaylists'

export default {
  name: "Home",
  components:{
    itunesSearch,
    playlist,
    allPlaylists
  },
  data() {
    return {
      search: "",
      // songId: this.$route.params.songId,

    };
  },
  // data() {
  //   return {

  //   };
  //  },
  computed: {

  },
  methods: {
   
  }
};
</script>

<style>
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

