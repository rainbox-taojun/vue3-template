<template>
  <el-main class="app-main">
    <router-view/>
  </el-main>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  20=margin-top*/
  min-height: calc(100vh - 50px - 20px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 90px;
}

.hasTagsView {
  .app-main {
    padding: 20px 20px 0 20px;
    min-height: calc(100vh);
  }

  .fixed-header+.app-main {
    padding-top: 120px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>