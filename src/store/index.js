import { createStore } from 'vuex'

// const modules = import.meta.globEager('./modules/*.js')
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'

export default createStore({
  modules: {
    user,
    permission
  },
  getters
})
