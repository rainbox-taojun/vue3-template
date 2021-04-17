<template>
  <div class="navbar">
    <logo />

    <menus />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <span>你好，{{name}}</span>
          <el-avatar v-if="avatar" shape="square" size="medium" :src="avatar" class="user-avatar" />
          <el-avatar v-else shape="square" size="medium"  class="user-avatar" icon="el-icon-user-solid" />
        </div>
        
        <template #dropdown>
          <el-dropdown-menu >
            <!-- <router-link to="/profile/index">
              <el-dropdown-item>个人信息</el-dropdown-item>
            </router-link> -->
            <el-dropdown-item divided @click="logout">
              <span style="display:block;">登 出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Logo from './Logo.vue'
import Menus from '../Menus/index.vue'
import Search from './Search.vue'

export default {
  name: 'Navbar',
  components: {
    Logo,
    Menus,
    Search
  },
  setup() {
    const store = useStore()

    const avatar = computed(() => {
      return store.getters.avatar
    })

    const name = computed(() => {
      return store.getters.name
    })
    
    const device = computed(() => {
      return store.getters.device
    })

    const logout = () => {

    }

    return {
      avatar,
      name,
      device,
      logout
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    margin-right: 10px;
    float: right;
    display: flex;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        display: flex;
        align-items: center;

        .user-avatar {
          margin-left: 10px;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>