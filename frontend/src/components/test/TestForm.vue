<template>
  <div id="app">
    <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></blog-post>
  </div>
</template>

<script>
export default {};
Vue.component("blog-post", {
  props: ["post"],
  template: `
        <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
        </div>
    `
});
new Vue({
  el: "#app",
  data: {
    posts: [
      { id: 1, title: "My journey with Vue", content: "1st" },
      { id: 2, title: "Blogging with Vue", content: "2nd" },
      { id: 3, title: "Why Vue is so fun", content: "3th" }
    ]
  }
});
</script>

<style scoped>
</style>
