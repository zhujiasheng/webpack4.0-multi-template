<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="baseCard">
            <router-link to="/baseList">baseCard</router-link>
          </a-menu-item>
          <a-menu-item key="cardList">
            <router-link to="/cardList">cardList</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
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
};
</script>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
