import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iframeSrc: {
      DigiCode: 'http://localhost:8080/work/DigiCode/index.html',
      Neon: 'http://localhost:8080/work/Neon/index.html',
      RedCrust: 'http://localhost:8080/work/Red Crust/index.html',
      SimplePlayer: 'http://localhost:8080/work/Simple Player/index.html',
      CDCover: 'http://localhost:8080/work/CD Cover/index.html',
      PixelDraw: 'http://localhost:8080/work/pixel draw/index.html',
      TimeColor: 'http://localhost:8080/work/Time Color/index.html',
      Season: 'http://localhost:8080/work/season/index.html',
      CDParty: 'http://localhost:8080/work/CD Party/index.html',
      SmallShotGame: 'http://localhost:8080/work/Small Shot Game/index.html'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
