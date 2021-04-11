import SvgIcon from '@/components/SvgIcon'// svg component


// const requireAll = import.meta.globEager('./svg')

export default {
  install: (app, options) => {
    app.component('svg-icon', SvgIcon)
  }
}