<template>
  <div>
     <v-card  color="info" class="white--text hidden-sm-and-down">
     
              <v-container fluid>
                <v-layout row>
                  <v-flex xs4 md3>
                    <v-responsive src="">
                      <v-img
                          lazy-src="https://i.ytimg.com/vi/ABzWJohap84/mqdefault.jpg"
                          max-height="150"
                          max-width="150"
                          src="https://i.ytimg.com/vi/ABzWJohap84/mqdefault.jpg"
                            height="150px"
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
                        <div class="">{{getBookLevel(book.level)}}, {{book.parts.length}} частей</div>
                        
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
                      <v-btn class="primary"  >Загрузить</v-btn>

                    </v-card-actions>

                  </v-flex>

                </v-layout>  

              </v-container>
            </v-card>
 

        
        

           <v-card color="info" class="white--text hidden-md-and-up">
     
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
                        <!-- <div class="hedline">{{book.title}}</div> -->
                        <div class="">{{book.description}}</div>
                        <v-divider class="white"></v-divider>
                        <div class="">{{getBookLevel(book.level)}}, {{book.parts.length}} частей</div>
                        
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
                      <v-btn class="primary"  >Загрузить</v-btn>

                    </v-card-actions>

                  </v-flex>

                </v-layout>  

              </v-container>
            </v-card>
  </div>
</template>
<script>
 import * as bookHelper from '../helpers/book'
export default {
    props:{
        'book':{
            type:Object,
            require:true
        }
    },
    methods:{
           getBookLevel: bookHelper.getBookLevel
    }
   

};
</script>
<style scoped></style>
