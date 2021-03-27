<template>
  <div>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-container fluid>
            <v-layout row class="hidden-md-and-down">
              <v-flex xs7 md8>
                <v-text-field label="Поиск" v-model="searchTerm">

                </v-text-field>
                </v-flex>
                <v-flex xs5 md4>

                <v-select label="Уровень" :items="levels" v-model="level" multiple>
                  
                </v-select>
                </v-flex>
              
            </v-layout>
          </v-container>
        </v-flex>  
         
        <v-flex v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2 > 

           <v-card color="info" class="white--text">
     
              <v-container fluid>
                <v-layout row>
                  <v-flex xs4 md3>
                    <v-responsive src="">
                      <v-img
                          lazy-src="https://i.ytimg.com/vi/ABzWJohap84/mqdefault.jpg"
                          max-height="150"
                          max-width="150"
                          src="https://i.ytimg.com/vi/ABzWJohap84/mqdefault.jpg"
                        ></v-img>
                        <div class="text-xs-center">
                          <v-btn   color="white">
                            <v-icon left>mdi-message-text</v-icon> YouTube
                          </v-btn>

                        </div>

                    </v-responsive>
                    
                  </v-flex>
                  <v-flex xs8 md9>
                    <v-card-title>
                      <div>
                        <div class="hedline">{{book.title}}</div>
                        <div class="">{{book.description}}</div>
                        <v-divider class="white"></v-divider>
                        <div class="">{{getBookLevel(book.level)}}, {{book.parts}} частей</div>
                        
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-rating v-model="book.rating"
                      color="yellow"
                      readonly
                      dense 
                      half-increments
                      >
                      </v-rating>
                      <div class="ml-1">
                        <span>{{book.rating}} / </span>
                        <span>{{book.ratingCount}} </span>
                      </div>
                     <v-spacer></v-spacer>
                      <v-btn class="primary"  >Открыть</v-btn>

                    </v-card-actions>

                  </v-flex>

                </v-layout>  

              </v-container>
            </v-card>
 

        </v-flex>
         
      </v-layout>
      <div class="hidden-md-and-up">

      
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-container fluid>
            <v-layout row class="hidden-md-and-down">
              <v-flex xs7 md8>
                <v-text-field label="Поиск" v-model="searchTerm">

                </v-text-field>
                </v-flex>
                <v-flex xs5 md4>

                <v-select label="Уровень" :items="levels" v-model="level" multiple>
                  
                </v-select>
                </v-flex>
              
            </v-layout>
          </v-container>
        </v-flex>  
        <v-flex v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2 > 
            <v-card color="info" class="white--text">
              <v-container fluid>
                <v-layout row>
                  <v-flex xs4 md3>
                    <v-responsive src="@/assets/mqdefault.jpg">
                      <v-img
                          lazy-src="https://i.ytimg.com/vi/ABzWJohap84/mqdefault.jpg"
                          max-height="150"
                          max-width="150"
                          src="https://i.ytimg.com/vi/ABzWJohap84/mqdefault.jpg"
                        ></v-img>
                        <div class="text-xs-center">
                          <v-btn   color="white">
                            <v-icon left>mdi-message-text</v-icon> YouTube
                          </v-btn>

                        </div>

                    </v-responsive>
                    
                  </v-flex>
                  <v-flex xs8 md9>
                    <v-card-title>
                      <div>
                        <div class="hedline">{{book.title}}</div>
                        <div class="">{{book.description}}</div>
                        <v-divider class="white"></v-divider>
                        <div class="">{{getBookLevel(book.level)}}, {{book.parts}} частей</div>
                        
                      </div>
                    </v-card-title>
                     

                  </v-flex>

                </v-layout>  

              
                <v-layout row wrap>
                  <v-flex xs12>
                        <div class="">{{book.description}}</div>
                        
                  </v-flex>

                </v-layout>  
                
              </v-container>
            </v-card>  
        </v-flex>
         
      </v-layout>
    </div>
  </v-container>
  </div>      
       
    
  
</template>
<script>
 
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
    getBookLevel(level) {
    return level.join("/");
}
  },
  components: {
   
  },
};
</script>
<style scoped></style>
