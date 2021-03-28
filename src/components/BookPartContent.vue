<template>
  <div>
        <v-card>
            <div class="display-1">{{part.bookTitle}}</div>
            <div class="headLine">{{part.partTitle}}</div>
            <v-divider class="black"></v-divider>
        </v-card>
      
       
    
  </div>
</template>
<script>
import BookParamContent from '../components/BookPartContent'
export default {
    props:{
        "part":{
            type:Object,
            required:true
        }
    },
    components:{
        BookParamContent

    }
   

};
</script>
<style scoped></style>
