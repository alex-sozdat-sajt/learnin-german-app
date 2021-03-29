<template>
  <div>
    <v-container grid-list-md v-if="part">
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-content :part="part"></book-part-content>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1>
                   <book-part-words :words="part.words"></book-part-words>
            </v-flex>
        </v-layout>
    </v-container>
       
    
  </div>
</template>
<script>
    import BookPartContent from '../components/BookPartContent'
    import BookPartWords from '../components/BookPartWords'

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
  components:{
      BookPartContent,
      BookPartWords
  },
  computed:{
      part(){
          console.log('this.bookId', this.bookId)
          console.log('this.partId', this.partId)

          let val = this.$store.getters.getParts.find(b => b.bookId == this.bookId &&
          b.bookPartId == this.partId)
          
           console.log('val', val)
           return val
      }
  }
   

};
</script>
<style scoped></style>
