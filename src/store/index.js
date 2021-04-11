import { createStore } from 'vuex'

// const modules = import.meta.globEager('./modules/*.js')
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import settings from './modules/settings'
import getters from './getters'

export default createStore({
  modules: {
    app,
    user,
    permission,
    settings
  },
  getters
})
