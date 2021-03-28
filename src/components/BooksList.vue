<template>
  <div>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-container fluid>
            <v-layout row class="hidden-md-and-down">
              <v-flex xs4 md3>
                <v-text-field label="Поиск" v-model="searchTerm">

                </v-text-field>
                </v-flex>
                <v-flex xs8 md8>
                <v-select label="Уровень" :items="levels" v-model="level" multiple>
               
                </v-select>
                </v-flex>
              
            </v-layout>
          </v-container>
        </v-flex>  
                 
        <v-flex  v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 lg8> 
          <Book
           :book='book'
           />
           
 

        </v-flex>
         
      </v-layout>
      
    </v-container>
  </div>      
       
    
  
</template>
<script>
 
 import Book from './BooksListItem'
export default {
  data() {
    return {
      searchTerm: null,
      level: [],
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    };
  },
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
    filteredBooks() {
      let books = this.books;
      if (this.searchTerm) {
        books = books.filter(
          (b) =>
            b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0 ||
            b.description
              .toLowerCase()
              .indexOf(this.searchTerm.toLowerCase()) >= 0
        );
      }
      if (this.level.length)
        books = books.filter(
          (b) =>
            this.level.filter((val) => b.level.indexOf(val) !== -1).length > 0
        );
      return books;
    },
  },
  methods: {
  
  },
  components: {
   Book
  },
};
</script>
<style scoped></style>
