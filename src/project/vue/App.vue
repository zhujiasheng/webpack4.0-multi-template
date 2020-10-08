<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(webp.baseUrl)
  },
}
</script>
