import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'



let api = axios.create({
    // baseURL:'https://itunes.apple.com/search?media=music&term=' + artist,
    baseURL: 'https://itunes.apple.com/search?media=music&term=',
    timeout: 3000
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
        songList: [],

    },
    mutations: {
        listResults(state, songs) {
            state.songs = songs
        }

    },

    actions: {
        getSearchResults({dispatch, commit}, payload) {
            console.log(payload)
            api.get(payload)
                .then(res => {
                // commit('listResults', res.data.results)
                commit('listResults', res.data.results)
                })
                .catch(err =>{
                    // alert(err.response.data.message)
                    alert("error")
                })
        }
    },
})