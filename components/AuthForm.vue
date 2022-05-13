<template>
  <v-card
      class="mx-auto form"
      max-width="500"
  >
    <v-card-title class="text-h4 pt-4 pl-10">Вход</v-card-title>
    <v-card-content>
      <v-form
          ref="form"
          v-model="valid"
          class="pl-5 pr-5"
          lazy-validation
      >
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Имя"
            required
        ></v-text-field>

        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>

        <v-btn block
            :disabled="!valid"
            color="#1DE9B6"
            @click="validate"
        >
          Войти
        </v-btn>


      </v-form>
    </v-card-content>
  </v-card>
</template>

<script setup>
const form = ref();
let valid = true;
let name = '';
const nameRules = [
  v => !!v || 'Это поле нужно заполнить',
];
const email = '';
const emailRules = [
  v => !!v || 'Это поле нужно заполнить',
  v => /.+@.+\..+/.test(v) || 'Введите валидный E-mail',
];

const validate = () => {
  form.value.validate();
};
</script>

<style scoped>
.form {
  background-color: white;
  min-height: 300px;
  z-index: 10000;
}
</style>
