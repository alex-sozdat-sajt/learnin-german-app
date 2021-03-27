<template>
  <div class="home">
    <h1>SIGNUP</h1>

    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12">
        <v-alert border="top" color="red lighten-2" dark v-if="true">
          {{ errorText }}
        </v-alert>

        <v-toolbar>
          <v-toolbar-title>
            Зарегистрироваться
          </v-toolbar-title>
        </v-toolbar>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field 
          v-model="email" 
          :rules="emailRules"
          label="E-mail"  
          >
          </v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          >
          </v-text-field>

          <v-btn color="warning" @click.prevent="signup" :disabled="processing || !valid">
            Зарегистрироваться
          </v-btn>
          <v-btn
            color="warning"
            @click.prevent="signout"
             
          >
            Логаут
          </v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "SIGNUP",
  data() {
    return {
      email: null,
      password: null,
      
      errorText: "",
      valid: false,
      emailRules:[
        (v) => !!v || 'Пожалуйста введите e-mail',
        (v) =>/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'Неправильный e-mail',
      ],
      passwordRules:[
         (v) => !!v || 'Пожалуйста введите пароль',
          (v) => (v && v.length >= 6) || 'Пароль слишком короткий - минимум 6 символов',
      ]

    };
  },
  computed: {
    ...mapGetters(["ISUSERAUTHENTICATE"]),
    errorGet() {
      this.errorText = "this.$store.getters.getError";
    },
    processing() {
      this.$store.getters.getProcessing;
    },
    isUserAuthenticated() {
      console.log(" this.ISUSERAUTHENTICATE", this.ISUSERAUTHENTICATE);
      return this.ISUSERAUTHENTICATE;
    }
  },
  watch: {
    isUserAuthenticated(val) {
      console.log("val", val);

      if (val === true) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    signup() {
      // this.errorGet()
      debugger;
      this.$store.dispatch("SIGNUP", {
        email: this.email,
        password: this.password
      });
    },
    signout() {
      this.$store.dispatch("SIGNOUT", {
        email: [],
        password: []
      });
    }
  },
  components: {}
};
</script>
