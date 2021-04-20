<template>
  <el-card shadow="hover" class="layout-preview">
    <el-divider content-position="left">导航栏模式</el-divider>

    <div class="layout-preview-content">
      <section class="sidebar-preview preview">
        <el-container>
          <el-aside width="40px"></el-aside>
          <el-container>
            <el-header></el-header>
            <el-main></el-main>
          </el-container>
        </el-container>
      </section>
      
      <section class="top-menu-preview preview">
        <el-container>
          <el-header></el-header>
          <el-main></el-main>
        </el-container>
      </section>
    </div>
  </el-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.layout-preview {
  grid-column-start: span 8;
  grid-row-start: span 4;

  .layout-preview-content {
    display: flex;
    width: 480px;

    .preview {
      margin-right: 40px;
      width: 200px;
      height: 120px;
      cursor: pointer;
      border-radius: 5px;
      border: 2px solid transparent;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        border: 2px solid #409EFF;
      }

      :deep(.el-container) {
        width: 100%;
        height: 100%;
      }

      :deep(.el-header),
      :deep(.el-footer) {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        height: 30px !important;
        line-height: 30px;
      }
    }
  }
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>