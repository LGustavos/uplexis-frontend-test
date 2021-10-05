import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faBriefcase, 
    faLandmark, 
    faTree, 
    faGavel, 
    faBan, 
    faGem, 
    faUser, 
    faPiggyBank, 
    faGlobeAmericas, 
    faGlobe, 
    faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faBriefcase,
    faLandmark,
    faTree,
    faGavel,
    faBan,
    faGem,
    faUser,
    faPiggyBank,
    faGlobeAmericas,
    faGlobe,
    faAngleLeft
)


createApp(App)
    .use(router)
    .component('icon', FontAwesomeIcon)
    .mount('#app')
