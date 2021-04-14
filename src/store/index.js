import { createStore } from 'vuex'

// 会报错先手动引入
// const modules = import.meta.globEager('./modules/*.js')
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import settings from './modules/settings'
import tagsView from './modules/tagsView'
import getters from './getters'

export default createStore({
  modules: {
    app,
    user,
    permission,
    settings,
    tagsView
  },
  getters
})
