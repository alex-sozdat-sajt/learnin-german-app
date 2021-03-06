import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import firebaseConfig from './config/firebase'
import VuetifyConfirm from 'vuetify-confirm'
import VueYouTubeEmbed from 'vue-youtube-embed'
import firebase from 'firebase'



Vue.config.productionTip = false

Vue.use(VuetifyConfirm, {
    vuetify,
    buttonTrueText: 'Да',
    buttonFalseText: 'Нет',

    color: 'warning',
    icon: 'warning',
    title: 'Warning',
    width: 350,
    property: '$confirm'

})
Vue.use(VueYouTubeEmbed)

firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
        let vm = this
        firebase.auth().onAuthStateChanged((user) => {
            vm.$store.dispatch('STATE_CHANGED', user)

        });
    },

}).$mount('#app')