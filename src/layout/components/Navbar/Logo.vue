<template>
  <div class="logo-container">
    <router-link key="expand" class="logo-link" to="/">
      <img v-if="logo" :src="logo" class="logo">
      <h1 class="title">{{ title }} </h1>
    </router-link>
  </div>
</template>

<script>
import settings from '@/settings'
import logoImg from '@/assets/logo.png'

export default {
  name: 'Logo',
  data() {
    return {
      title: settings.title,
      logo: logoImg
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.logo-container {
  position: relative;
  margin-left: 10px;
  height: 50px;
  line-height: 50px;
  @include themeify () {
    background: themed('topMenuBg');
  }
  
  text-align: center;
  overflow: hidden;

  & .logo-link {
    height: 100%;
    width: 100%;

    & .logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .title {
      display: inline-block;
      margin: 0;
      // color: #223A6B;
      @include themeify () {
        color: themed('logoText');
      }
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
}
</style>
