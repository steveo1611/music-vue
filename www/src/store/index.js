import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'



let music = axios.create({
    // baseURL:'https://itunes.apple.com/search?media=music&term=' + artist,
    baseURL: 'https://itunes.apple.com/search?media=music&term=',
    timeout: 5000
})

let api = axios.create({
    baseURL: '//localhost:3000/api/',
    timeout: 3000
    // withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        songs: [],
        currentPlayList: {song:[]},
        allPlaylists: []
    },
    mutations: {
        listResults(state, songs) {
            state.songs = songs
        },
        setCurrentPlaylist(state, playlist) {
            state.currentPlayList = playlist
        },
        showPlaylist(state, currentPlayList) {
            state.currentPlayList = playList
        },
        addToPlaylist(state, payload) {
            state.currentPlayList.push(payload)
        },
        removeFromPlaylist(state, payload) {
            state.currentPlayList.splice(payload, 1)
        },
        setAllPlaylists(state, playLists){
            state.allPlaylists = playlists
        },
        addPlaylist(state, playlist){
            state.allPlaylists.push(playlist)
        }
    },

    actions: {
        // createPlaylist({dispatch, commit}, playlist){
        //    music.post('playlists', playlist)
        //    .then(res => {
        //         commit('addPlaylist', playlist)
        //    })
        // },
      
        getSearchResults({ dispatch, commit }, payload) {
            music.get(payload)
                .then(res => {
                    // commit('listResults', res.data.results)
                    commit('listResults', res.data.results)
                })
                .catch(err => {
                    // alert(err.response.data.message)
                    alert("error")
                })
        },

        createPlaylist({commit, dispatch}, payload){
            api.post('playlists')
            .then(res => {
                commit('addPlaylist', payload)
            })
            .catch(err => {
                alert('error')
            })
        },

        getPlayList({ dispatch, commit }) {
            api.get('playlist')
                .then(res => {
                    commit('showPlaylist', res.data)
                })
        },


     getAllPlaylists({ commit, dispatch}){
         api.get('playlists')
            .then(res =>{
                commit('setAllPlaylists', res.data)
            })
     },

        addToPlaylist({ commit, dispatch, state }, payload) {
            if (state.currentPlayList.find(s => s.trackId == payload.trackId)) {
                return dispatch('showNotification', {
                    type: 'error',
                    message: 'That song is already in your list'
                })
            }
            // console.log('playlists/'+ payload.trackId +'/songs', payload)
            // api.put('playlists/'+ payload.trackId +'/songs', payload)
            api.put('song/'+ payload.trackId, payload)
            // api.put('playlist/' ,payload)
            commit('addToPlaylist', payload)
        },

        selectCurrentPlaylist({commit, dispatch}, list){
            commit('setCurrentPlaylist', list)
        },
        
        
        removeFromPlaylist({ commit, dispatch, state }, payload) {
            //  debugger BUG BUG: not working correctly need to fix later
            let index = state.playList.findIndex(i => i.trackId == state.playList.trackId)
            //  return index

            // var test = state.playList.indexOf(payload)
                commit('removeFromPlaylist', index)
        },

        showNotification({
            commit
        }, notification) {
            console.log(notification)
        },
    },
})