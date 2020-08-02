<template>
  <div class="login">
    <a-card title="欢迎登录">
      <login-form @on-success-valid="handleLogin" />
    </a-card>
  </div>
</template>

<script>
import LoginForm from "./components/login-form";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  data() {
    return {
      loading: false,
      errorInfo: "",
    };
  },
  computed: {},
  watch: {
    $route: {
      handler({ query }) {
        if (query.redirect) {
          this.redirect = query.redirect;
          delete query.redirect;
        }
        this.query = query || {};
      },
      immediate: true,
    },
  },
  methods: {
    handleLogin(value) {
      console.log(value);
      this.loading = true;
      try {
        this.$router.push({ path: this.redirect || "/", query: this.query });
        this.loading = false;
        this.errorInfo = "";
      } catch (error) {
        this.errorInfo = error || "";
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
//定位上下左右居中
.fxied-center() {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login {
  width: 400px;
  .fxied-center();
  background-color: #cccccc;
}
</style>
