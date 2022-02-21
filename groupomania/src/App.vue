<script>
import NavLink from "./components/NavLink.vue";
import MessageAccueil from "./views/MessageAccueil.vue";

export default {
  name: "App",
  components: {
    NavLink,
    MessageAccueil
  },
};
</script>

<template>
  <div id="app">
    <nav>
      <img class="logoNav" src="./assets/icon-above-font.png" />
      <NavLink url="/" text="Accueil" />
      <NavLink url="/#/inscription" text="Inscription" />
      <NavLink url="/connexion" text="Connexion" />
      <router-link to="/inscription">Inscription2</router-link>
    </nav>
    <div><MessageAccueil /></div>
  </div>
</template>

<style scoped>
#app {
  margin: 0 auto;
}
.logoNav {
  display: flex;
  align-items: flex-start;
  margin-right: auto;
  width: 10em;
}

nav {
  display: flex;
  align-items: center;
  height: 4em;
  background-color: rgb(209, 81, 90);
}
nav > a {
  display: flex;
  margin-right: 1em;
}
</style>
