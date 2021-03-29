<template>
 <div>
      <h2 class="display1">Слова</h2>
        <v-row>
          
          <v-col
            v-for="(item, index) in words"

            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
               <v-card-title class="subheading font-weight-bold">
                  {{func}}
                {{ item.origWord }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Calories:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.origWord }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Fat:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.transWord }}
                  </v-list-item-content>
                  <v-list-item-action>
                      <v-spacer></v-spacer>
                      <v-btn
                          class="mx-2"
                          fab
                          dark
                          small
                          color="indigo"
                        >
                          <v-icon dark>
                            mdi-plus
                          </v-icon>
                        </v-btn>

                  </v-list-item-action>

                   
                </v-list-item>

                 
              </v-list>
            </v-card>
          </v-col>
        </v-row>

</div>   
 
</template>
<script>
export default {
    props:{
        "words":{
            type:Array,
            required:true
        },
        methods:{
          func(){
            debugger
          }
        }
    }
   

};
</script>
<style scoped></style>
 