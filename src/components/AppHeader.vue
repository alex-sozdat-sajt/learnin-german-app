<template>
  <div>
    <v-navigation-drawer app>
      <v-btn icon to="/">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-list-item v-for="(item, index) in menuItems" :key="index">
        <v-btn icon :to="item.route">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-btn>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar color="deep-purple accent-4" dense dark app>
      <v-app-bar-nav-icon @click="clickBtn"></v-app-bar-nav-icon>
      <v-btn icon to="/">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-list-item v-for="(item, index) in menuItems" :key="index">
        <v-btn icon :to="item.route">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-btn>
      </v-list-item >
       <v-btn @click="signout" v-if="ISUSERAUTHENTICATE" icon :to="'/'">
          <v-list-item-icon>
            <v-icon v-text="'mdi-dialpad'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="'Выход!'"></v-list-item-title>
          </v-list-item-content>
        </v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    clickBtn() {
      drawer: !this.drawer;
      alert("11111 ");
    },
    signout(){
       this.$confirm('Хотите выйти?').then(res => { 
         if(res){
             this.$store.dispatch('SIGNOUT')
         }
          
})
       
     
    }
  },
  computed: {
    ...mapGetters(["ISUSERAUTHENTICATE"]),
    menuItems() {
      console.log('this.ISUSERAUTHENTICATE' + this.ISUSERAUTHENTICATE ) 
      if(this.ISUSERAUTHENTICATE)
       {
        return[
          {
            title: "Читать",
            route: "/books",
            icon: "mdi-domain"
          },
          {
            title: "Учить слова",
            route: "/words",
            icon: "mdi-message-text"
          },
          {
            title: "Мой кабинет",
            route: "/profile",
            icon: "mdi-dialpad"
          },
          {
            title: "Выйти",
            route: "/logout",
            icon: "mdi-dialpad"
          }
        ];
      } else {
        return[
          {
            title: "Читать",
            route: "/books",
            icon: "mdi-domain"
          },
          {
            title: "Войти",
            route: "/signin",
            icon: "mdi-dialpad"
          },
          {
            title: "Зарегистрироваться",
            route: "/signup",
            icon: "mdi-dialpad"
          }
        ];
      }
    }
  }
};
</script>
<style scoped></style>
