import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iframeSrc: {
      DigiCode: process.env.VUE_APP_SERVER_URL+'/work/DigiCode/index.html',
      Neon: process.env.VUE_APP_SERVER_URL+'/work/Neon/index.html',
      RedCrust: process.env.VUE_APP_SERVER_URL+'/work/Red Crust/index.html',
      SimplePlayer: process.env.VUE_APP_SERVER_URL+'/work/Simple Player/index.html',
      SkySeaBoat: process.env.VUE_APP_SERVER_URL+'/work/Sky Sea Boat/index.html',
      PixelDraw: process.env.VUE_APP_SERVER_URL+'/work/pixel draw/index.html',
      TimeColor: process.env.VUE_APP_SERVER_URL+'/work/Time Color/index.html',
      Season: process.env.VUE_APP_SERVER_URL+'/work/season/index.html',
      CDParty: process.env.VUE_APP_SERVER_URL+'/work/CD Party/index.html',
      SmallShotGame: process.env.VUE_APP_SERVER_URL+'/work/Small Shot Game/index.html'
    },
    resultSrc:process.env.VUE_APP_SERVER_URL+'/work/DigiCode/index.html' 
  },
  mutations: {
    pageState(state,key) {
      state.resultSrc = state.iframeSrc[key]
    }

  },
  actions: {
    pageCommit({commit},key) {
      commit('pageState',key)
    }
  },
  modules: {
  }
})
