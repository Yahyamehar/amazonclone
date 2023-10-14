<template>
    <v-img src="@/assets/logoo.png" alt="logo" width="130" />
    <v-container v-if="showLoginForm">
      <v-form @submit.prevent="signIn">
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="email" label="Email" :rules="emailRules" required></v-text-field>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="password" label="Password" :rules="passwordRules" required type="password"></v-text-field>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12">
            <v-btn type="submit" color="primary" :loading="loading">Sign In</v-btn>
          <router-link to="/products">  <v-btn class="ml-5" type="submit" color="primary"> Guest Mode </v-btn></router-link>
          </v-col>
        </v-row>
      </v-form>
  
      <v-row v-if="!showForgotPasswordLink">
        <v-col cols="12">
          <a href="#" @click.prevent="forgotPassword">Forgot Password</a>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12">
          <a href="#">Go for Authentication</a>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "Login-",
    data() {
      return {
        showLoginForm: true,
        showForgotPasswordLink: false,
        loading: false, // Added loading state
        email: "",
        password: "",
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        passwordRules: [
          (v) => !!v || "Password is required",
          (v) => v.length >= 5 || "Password must be at least 5 characters",
        ],
      };
    },
    methods: {
      signIn() {
  
      if (!this.email.trim() || !this.password.trim()) {
        // Show an error message or perform any necessary action
        alert("Please fill Your email and password");
        return;
      }
       
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.showLoginForm = false;
          this.$router.push("/products");
        }, 3000);
       
      },
      forgotPassword() {
        this.showForgotPasswordLink = true;
        this.$router.push("./auth");
      },
    },
  };
  </script>
  