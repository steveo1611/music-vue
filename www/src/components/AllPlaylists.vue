<template>
  <div class='all-playlists'>
    <form @submit.prevent='createPlaylist'>
      <input type="text" v-model="createpl">
    <button @click="createPlaylist">Create Playlist</button>
      </form>
      <ul class="playlists">
          <li class="playlist" v-for="list in allPlayerLists" :key="list_id" @click="setCurrentPlaylist(list)">{{list.title}}</li>
      </ul> 

  </div>
</template>

<script>
  export default {
    name: 'all-playlists',
    mounted(){
        this.$store.dispatch('getAllPlaylists')
    },
    computed: {
       allPlaylists() {
           return this.$store.state.allPlaylists
       }
    },
    methods: {
      setCurrentPlaylist(list){
        this.$store.dispatch('selectCurrentPlaylist', list)
      },
      createPlaylist(createpl){
        debugger
        this.$store.dispatch('createPlaylist', createpl)
      }
        
  }
}
</script>

<style>


</style>
