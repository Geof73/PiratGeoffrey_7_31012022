<script>
export default {
  name: "NavLink",
  props: ["url", "text"],
};
</script>

<template>
  <nav>
    <a :href="url">{{ text }}</a>
  </nav>
</template>

<style lang="scss">
nav > a {
  padding: 1.5em 1em;
  color: rgb(255, 255, 255);
  font-family: sans-serif;
  text-decoration: none;
}

nav > a:hover{
  padding: 1.5em 1em;
  color: rgb(209,81,90);
  background-color: rgb(255, 255, 255);
}
</style>
