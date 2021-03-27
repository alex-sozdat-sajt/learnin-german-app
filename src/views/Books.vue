<template>
  <div class="home">
      <h1>BOOKS</h1>
      <BooksList/>  
      </div>
</template>

<script>
// @ is an alias to /src
 

import BooksList from '../components/BooksList'
export default {
    components:{
        BooksList
    }
   
}
</script>
