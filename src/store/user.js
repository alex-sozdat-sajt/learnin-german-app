import firebase from 'firebase'
export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null,
      email: null
    }
  },
  mutations: {
    SET_USER(state, payload) {
    state.user.isAuthenticated = true
    state.user.uid = payload.uid
    state.user.email = payload.email
    },
    DEL_USER(state) {
      state.user = {
        isAuthenticated: false,
        uid: null
      }
     
    },
    SIGNIN_USER(state, payload) {
      console.log('payload', payload)
    state.user.isAuthenticated = true
    state.user.uid = payload.uid
    state.user.email = payload.email
    },

  },
  actions: {
    SIGNOUT() {
      console.log('SIGNOUT')
      firebase.auth().signOut()
    },

    SIGNIN({ commit }, payload) {
      console.log(payload.email + 'SIGNINSIGNINSIGNIN' + payload.password)
      commit('CLEAR_ERROR')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
           console.log('user' + user)
          commit('SIGNIN_USER', user)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    },
    STATE_CHANGED({ commit }, payload) {
      if (payload) {
        commit('SET_USER', payload.user)
      } else {
        commit('DEL_USER', payload.user)
      }
    },
      

    SIGNUP({ commit }, payload) {
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
           
          // commit('SET_USER', user.user)
          console.log(user)
             commit('SET_PROCESSING', false)
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error)
     commit('SET_PROCESSING', false)
     commit('SET_ERROR', error.message)
    // ..
  });  
    }
  },
  getters: {
    ISUSERAUTHENTICATE: (state) => state.user.isAuthenticated
      
  }
}