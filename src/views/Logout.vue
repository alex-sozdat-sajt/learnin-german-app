<template>
  <div class="">
<h1>Вы вышли</h1>
          
  </div>
</template>

<script>
// @ is an alias to /src
 
import { mapGetters } from "vuex";
export default {
  name: 'Logout',
   data() {
    return {
     
    };
  },
  mounted(){
      console.log('MOUNTED')
        
      this.signout()
      console.log("this.ISUSERAUTHENTICATE", this.ISUSERAUTHENTICATE);

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
