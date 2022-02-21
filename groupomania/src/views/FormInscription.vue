<script>
export default {
  name: "FormInscription",
};
</script>

<template>
  <div class="form">
    <form method="get" class="signupForm">
      <div class="formQuestion">
        <label for="pseudo">Pseudonyme: </label>
        <input type="text" name="pseudo" id="pseudo" pattern="{2,}" required />
        <p id="pseudoErrorMsg"></p>
      </div>
      <div class="formQuestion">
        <label for="password">Mot de passe: </label>
        <input type="text" name="password" id="password" pattern="{2,}" required />
        <p id="passwordErrorMsg"></p>
      </div>
         <div class="formQuestion">
        <label for="lastName">Nom: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          pattern="[a-zA-Z- ]{2,}"
          required
        />
        <p id="lastNameErrorMsg"></p>
      </div>
      <div class="formQuestion">
        <label for="firstName">Prénom: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          pattern="[a-zA-Z- ]{2,}"
          required
        />
        <p id="firstNameErrorMsg"></p>
      </div>
      <div class="formQuestion">
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" required />
        <p id="emailErrorMsg"></p>
      </div>
      <div class="formSubmit">
        <input type="submit" value="S'inscrire" id="buttonSignup" />
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.formQuestion {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formSubmit {
  display: flex;
  justify-content: center;
}
label[for=pseudo], label[for=password], label[for=firstName], label[for=lastName], label[for=email] {
  font-weight: bold;
  font-family: sans-serif;
  color:rgb(9,31,67)
}
</style>