import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user.js'
import generalModule from './general.js'
import booksModule from './books.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
    generalModule,
    booksModule

  }
})
