import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'



let api = axios.create({
    // baseURL:'https://itunes.apple.com/search?media=music&term=' + artist,
    baseURL: 'https://itunes.apple.com/search?media=music&term=',
    timeout: 5000
})

let db = axios.create({
    baseURL: '//localhost:3000/api/',
    timeout: 3000
    // withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        songs: [],
        playList: [],

    },
    mutations: {
        listResults(state, songs) {
            state.songs = songs
        },
        showPlaylist(state, playList) {
            state.playList = playList
        },
        addToPlaylist(state, payload) {
            state.playList.push(payload)
        },
        removeFromPlaylist(state, payload) {
            state.playList.splice(payload, 1)
        }
    },

    actions: {
        getSearchResults({ dispatch, commit }, payload) {
            api.get(payload)
                .then(res => {
                    // commit('listResults', res.data.results)
                    commit('listResults', res.data.results)
                })
                .catch(err => {
                    // alert(err.response.data.message)
                    alert("error")
                })
        },
        getPlayList({ dispatch, commit }) {
            db.get('playlist')
                .then(res => {
                    commit('showPlaylist', res.data)
                })
        },


        addToPlaylist({ commit, dispatch, state }, payload) {
            if (state.playList.find(s => s.trackId == payload.trackId)) {
                return dispatch('showNotification', {
                    type: 'error',
                    message: 'That song is already in your list'
                })
            }
            commit('addToPlaylist', payload)
        },
        removeFromPlaylist({ commit, dispatch, state }, payload) {
            //  debugger BUG BUG: not working correctly need to fix later
            let index = state.playList.findIndex(i => i.trackId == state.playList.trackId)
            //  return index

            // var test = state.playList.indexOf(payload)
            console.log(index)
            commit('removeFromPlaylist', index)
        },

        showNotification({
            commit
        }, notification) {
            console.log(notification)
        },
    },
})