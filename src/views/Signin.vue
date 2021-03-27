<template>
  <div class="">

    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12">
        <v-alert border="top" color="red lighten-2" dark v-if="true">
          {{ errorText }}
        </v-alert>

        <v-toolbar>
          <v-toolbar-title>
            Вход
          </v-toolbar-title>
        </v-toolbar>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field 
          :rules="emailRules"
          v-model="email" 
          label="E-mail" 
          required></v-text-field>

          <v-text-field
            :rules="passwordRules"
            v-model="password"
            label="Password"
            required
          ></v-text-field>

          <v-btn color="warning" @click.prevent="signin"  :disabled="processing || !valid">
            Вход
          </v-btn>
          <v-btn
            color="warning"
            @click.prevent="signout"
            :disabled="processing"
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
 
import {mapGetters} from 'vuex'
export default {
  name: 'Signin',
   data() {
    return {
      email: null,
      password: null,
      valid: false,
      errorText: "",
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
    signin() {
      // this.errorGet()
       
      this.$store.dispatch("SIGNIN", {
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
