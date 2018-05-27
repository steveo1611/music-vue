<template>
  <div class="Home">
    <h1>Welcome to Stevie's Music <img id='vuePic' src="../assets/logo.png">ue Shop</h1>
    <div class="topMusic">
    <input type="text" v-model="query">
    <button @click="getSearchRes">Search</button>
    <div class ="songs">
      <h3>Songs</h3>
      <ul> 
        <li v-for="search in getSearch">{{search.trackName}}
      <!-- <div class="song" v-for="song in songs">
      <h4>{{song.trackName}}  </h4> -->
      
      <!-- </div> -->
     </li>
      </ul>   
    </div>
  </div>
  
  
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search: '',
      // songId: this.$route.params.songId,
      query: ""
    };
  },
  // data() {
  //   return {

  //   };
  //  },
  computed: {
    songCol() {
      return this.$store.state.songCol;
    },
    getSearch() {
      return this.$store.state.songs;
    }
  },
  methods: {
    getSearchRes() {
      this.$store.dispatch('getSearchResults', this.query);
      this.query = "";
    }
  }
};
</script>

<style scoped>
#vuePic {
  width: 1.5rem;
}
</style>

