import SvgIcon from '@/components/SvgIcon/index.vue'// svg component

export default {
  install: (app, options) => {
    app.component('svg-icon', SvgIcon)
  }
}