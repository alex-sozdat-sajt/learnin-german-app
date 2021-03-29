<template>
  <div>
    
    <v-card color="accent" class="white--text">
        
        <v-card-title primary-title class="headline">{{part.title}}</v-card-title>
        <v-card-actions>
            "Эта страница"
            {{bookId}}
            {{part.id}}
            <v-spacer></v-spacer>
            <v-btn  class="primary" :to="{name:'bookPart', params:{bookId:bookId, partId:part.id}}">Открыть</v-btn>
        </v-card-actions>
     </v-card>  
  </div>
</template>
<script>
export default {
   props:{
       "part":{
           type:Object,
           require:true
       },
       "bookId":{
           required:true
       }
   }

};
</script>
<style scoped></style>
