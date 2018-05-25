import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'

vue.use(vuex)

let api = axios.create({
    // baseURL:'https://itunes.apple.com/search?media=music&term=' + artist,
    baseURL:'https://itunes.apple.com/search?media=music&term=',
    timeout: 3000
})

export default new vuex.Store({
    state: {
        songs:[],
        songList: [],

    },
    mutations: {


    },

    actions: {
        
    }
})