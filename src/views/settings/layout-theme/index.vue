<template>
  <div class="layout-theme">
    <theme />
    <layout-preview />
  </div>
</template>

<script>
import LayoutPreview from './components/LayoutPreview.vue'
import Theme from './components/Theme.vue'

export default {
  name: 'layout-theme',
  components: {
    Theme,
    LayoutPreview
  }
}

</script>

<style  lang="scss" scoped>
.layout-theme {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 50px);
  grid-template-rows: repeat(auto-fit, 50px);
}
</style>