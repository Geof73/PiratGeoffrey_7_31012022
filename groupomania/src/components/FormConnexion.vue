<script>
import NavLink from "./NavLink.vue";

export default {
  name: "FormConnexion",
  components: {
    NavLink,
  },
};
</script>

<template>
  <div class="form">
    <form method="get" class="connexionForm">
      <div class="formQuestion">
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" required />
        <p id="emailErrorMsg"></p>
      </div>
      <div class="formQuestion">
        <label for="password">Mot de passe: </label>
        <input
          type="text"
          name="password"
          id="password"
          pattern="{2,}"
          required
        />
        <p id="passwordErrorMsg"></p>
      </div>
      <NavLink url="/" text="Mot de passe oublié ?" />
      <div class="formSubmit">
        <input type="submit" value="S'inscrire" id="buttonSignup" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.formQuestion {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formSubmit {
  display: flex;
  justify-content: center;
}
label[for="email"],
label[for="password"] {
  font-weight: bold;
  font-family: sans-serif;
  color: rgb(9, 31, 67);
}
</style>