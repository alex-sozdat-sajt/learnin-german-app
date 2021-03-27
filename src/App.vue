<template>
 
  <div id="app">
   <v-app>
   <app-header/>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <v-content>
        <router-view></router-view>
      </v-content>
       
    </v-container>
  </v-main>

   
    <!-- -->
    <app-footer/>
  
</v-app>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
 

export default {
  name: "App",
  data(){
    return{
      
    }
   
  },
  computed: {
      
  },
  methods:{
    
  },

  components: {
    AppHeader,
    AppFooter
    
  },

 
};
</script>
