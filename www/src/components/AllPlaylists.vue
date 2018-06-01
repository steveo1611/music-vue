<template>
  <div class='all-playlists'>
    <div @submit.prevent='createPlaylist'>
      <input type="text" v-model="createpl">
    <button @click="createPlaylist">Create Playlist</button>
      </div>
      <ul class="playlists">
        <h3>Current Available PlayLists: </h3>
          <!-- <li class="playlist" v-for="list in allPlaylists" :key="list_id" @click="setCurrentPlaylist(list)">{{list.title}}</li> -->
          <li class="playlist" v-for="title in allPlaylists" :key="_id" >{{playlist.title}}</li>
      </ul> 

  </div>
</template>

<script>
  export default {
    name: 'allPlaylists',
    data(){
      return{
        createpl: ''
      }
    },
    mounted(){
        this.$store.dispatch('getAllPlaylists');
    },
    computed: {
       allPlaylists() {
           return this.$store.state.allPlaylists;
       }
    },
    methods: {
      getAllPlayLists(){
        this.$store.dispatch('getAllPlaylists')
      },

      setCurrentPlaylist(list){
        this.$store.dispatch('selectCurrentPlaylist', list)
      },
      createPlaylist(createpl){
        this.$store.dispatch('createPlaylist', this.createpl)
      }
        
  }
}
</script>

<style>


</style>
