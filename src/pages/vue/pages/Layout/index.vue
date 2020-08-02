<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider class="layout__slider">
        <a-menu v-model="current" mode="vertical">
          <a-menu-item key="baseCard">
            <router-link to="/baseList">baseCard</router-link>
          </a-menu-item>
          <a-menu-item key="cardList">
            <router-link to="/cardList">cardList</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout class="layout-inner">
        <a-layout-header class="layout-inner__header">
          <!-- <a-tooltip title="刷新当前页">
            <span class="layout-inner__refpull">
              <a-icon type="redo" />
            </span>
          </a-tooltip>
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">表单页面</a></a-breadcrumb-item>
          </a-breadcrumb> -->
          <div class="layout-inner__navbar">
            <!-- 全屏 -->
            <a-tooltip title="全屏">
              <span class="layout-inner__trigger">
                <a-icon type="fullscreen" />
              </span>
            </a-tooltip>
            <!-- 调试 -->
            <a-tooltip title="调试">
              <span class="layout-inner__trigger">
                <a-icon type="bug" />
              </span>
            </a-tooltip>
            <!-- 邮箱 -->
            <span class="layout-inner__trigger">
              <a-badge dot>
                <a-icon type="mail" />
              </a-badge>
            </span>
            <!-- dropdown -->
            <a-dropdown placement="bottomCenter">
              <span class="layout-inner__trigger">
                <a-avatar class="layout-inner__user--avator" :size="24"
                  >L</a-avatar
                >
                <span class="header-navbar__user--name">jiasheng</span>
              </span>
              <a-menu slot="overlay" @click="handleClick">
                <!-- 个人中心 -->
                <a-menu-item key="1">
                  <router-link to="">
                    <a-icon type="smile" />
                    个人中心
                  </router-link>
                </a-menu-item>
                <!-- 设置 -->
                <a-menu-item key="2">
                  <router-link to="">
                    <a-icon type="setting" />
                    设置
                  </router-link>
                </a-menu-item>
                <a-menu-divider />
                <!-- 退出 -->
                <a-menu-item key="3">
                  <a-icon type="logout" onClick="handleLogout" />
                  退出
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <!-- <span class="header-navbar-trigger">
              <a-icon type="more" />
            </span> -->
          </div>
        </a-layout-header>
        <a-layout-content class="layout-inner__content">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      current: ["baseCard"],
    };
  },
  methods: {
    handleClick({ key }) {
      console.log(`click on item ${key}`);
      if (key == 3) {
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>

<style lang="scss">
.layout {
  &__slider {
    width: 200px;
    background-color: #fff !important;
  }
  &-inner {
    min-height: 100vh !important;
    &__header {
      position: relative;
      display: flex;
      align-items: center;
      background: #fff !important;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      transition: all 0.2s ease-in-out;
    }
    &__refpull {
      margin-right: 10px;
    }
    &__navbar {
      position: absolute;
      right: 50px;
    }
    &__trigger {
      display: inline-block;
      padding: 0 12px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #f8f8f9;
      }
    }
  }
  &-content {
    height: auto !important;
  }
}
</style>
