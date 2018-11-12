import Vue from "vue";
import App from "./App.vue";
import { AjaxPlugin } from 'vux';

Vue.config.productionTip = false;

Vue.use(AjaxPlugin);

new Vue({
    render: h => h(App)
}).$mount("#app");
