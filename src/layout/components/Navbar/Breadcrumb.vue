<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item,index) in levelList"
        :key="item.path"
      >
        <span
          v-if="item.redirect==='noRedirect'||index===levelList.length-1"
          class="no-redirect"
        >
          {{ item.meta.title }}
        </span>
        <a
          v-else 
          @click.prevent="handleLink(item)"
        >
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { computed, watch, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { compile } from 'path-to-regexp'

export default {
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const levelList = ref(null)

    const pathCompile = (path) => {
      const { params } = route
      var toPath = compile(path)
      return toPath(params)
    }

    const isDashboard = () => {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
    }

    const handleLink = (item) => {
      const { redirect, path } = item
      if (redirect) {
        router.push(redirect)
        return
      }
      router.push(pathCompile(path))
    }

    const getBreadcrumb = () => {
      // only show routes with meta.title
      let matched = route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!isDashboard(first)) {
        matched = [{ path: '/', meta: { title: '首页' }}].concat(matched)
      }

      levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    }

    onBeforeMount(() => {
      getBreadcrumb()
    })

    const routePath = computed(() => {
      return route.path
    })

    watch(routePath, () => {
      if (routePath.toString().startsWith('/redirect/')) {
        return
      }
      getBreadcrumb()
    })

    return {
      levelList,
      handleLink
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    @include themeify () {
      color: themed('breadcrumbLink') !important;

      &:hover {
        color: themed('breadcrumbHover') !important;
      }
    }
  }

  .no-redirect {
    color: #97a8be;
    @include themeify () {
      color: themed('breadcrumbText');
    }
    cursor: text;
  }
}
</style>