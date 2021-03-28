<template>
  <div>
    <v-container grid-list-md v-if="part">
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-content :part="part"></book-part-content>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1>
                  <!-- <book-part-words :part="part.words"></book-part-content> -->
            </v-flex>
        </v-layout>
    </v-container>
       
    
  </div>
</template>
<script>
export default {
  props:{
      "bookId":{
       type:String,
       require:true
   },
    "partId":{
       type:String,
       require:true
   },
  },
  computed:{
      part(){
          let val = this.$store.getters.getParts.find(b  => b.bookId == this.bookId &&
          b.bookPartId == this.partId)
      }
  }
   

};
</script>
<style scoped></style>
