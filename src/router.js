import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Lostauth from './components/Auth/Lostauth.vue';
import Products from './components/Auth/Products.vue';
import Productdetail from './components/Productdetail.vue';
import Payment from './components/Payment.vue';







const routes = [
    {path: '/', component: Home},
    {path: '/auth', component: Lostauth},
    {path: '/products', component: Products},
    {path: '/products/:productId', props: true,  name: 'product-detail', component: Productdetail},
    {path: '/payment', component: Payment},


    

]

const router = createRouter({
    history: createWebHistory(),
    routes,
        
    });

export default router;