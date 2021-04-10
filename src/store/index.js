import { createStore } from 'vuex'

const modules = import.meta.glob('./modules/*.js')

export default createStore({
  modules
})
