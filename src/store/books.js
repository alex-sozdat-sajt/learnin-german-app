 
export default {
  state: {
        books: [
          {
                id: 'ssssfsssss',
                title: "History Potter",
                description: "Первая глава",
                imageId: 'fsdfsdfsdf',
                parts: 7,
                level: ['B2', 'C1'],
                rating: 4,
                ratingCount: 100,
                youtube_playlist_id: 'sdfdfssdf'
          },
            {
                id: 'sdssssssss',
                title: "History  2 ",
                description: "Вторая глава",
                imageId: 'fsdfsdfsdf',
                parts: 7,
                level: ['B1', 'B2'],
                rating: 5,
                ratingCount: 55,
                youtube_playlist_id: 'sdfdfssdf'
          },
              {
                id: 'ssssssfsss',
                title: "History  3 ",
                description: "Третья глава",
                imageId: 'fsdfsdfsdf',
                parts: 7,
                level: ['A2'],
                rating: 2,
                ratingCount: 80,
                youtube_playlist_id: 'sdfdfssdf'
          },
        
    ]
  },
  mutations: {
      SET_BOOKS(state, payload) {
          state.books = payload
      }
    

  },
  actions: {
  },
    getters: {
      getBooks: (state) => state.books,
    
  }
} 