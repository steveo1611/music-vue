import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
    baseURL:'https://itunes.apple.com/search?media=music&term=' + artist;
    timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        songs:[],
        songList: [],

    }
    mutations: {


    },

    actions: {
        
    }
})