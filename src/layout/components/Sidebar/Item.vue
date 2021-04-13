<template>
  <svg-icon v-if="!icon.includes('el-icon')" :icon-class="icon"></svg-icon>
  <i v-else :class="icon + 'sub-el-icon'"></i>
  <span>{{title}}</span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>