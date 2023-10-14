<template>
    <v-container style="margin-top: 10px" fluid>
        <v-row>
            <v-col v-for="item in items" :key="item.id">
                <v-card class="product-card" style="cursor: pointer;">
                    <v-img :src="item.image" height="200"></v-img>
                    <v-card-title class="title">{{ item.title }}</v-card-title>
                    <v-card-subtitle class="subtitle">{{ item.subtitle }}</v-card-subtitle>
                    <v-rating half-increments :length="5" class="ml-3" :size="28" :model-value="3" active-color="primary"/>
                    <v-card-title class="price">{{ item.price }}</v-card-title>
                    <v-card-actions>
                     <v-btn @click="gotoproductdetail(item)" style="color: aliceblue;" dark class="buy-button">BUY PRODUCT</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import image1 from "@/assets/s1.jpg";
import image2 from "@/assets/s2.webp";
import image3 from "@/assets/s3.webp";
import image4 from "@/assets/s4.jpg";
import image5 from "@/assets/s5.jpg";
import image6 from "@/assets/s6.webp";
import image7 from "@/assets/s7.jpg";
import image8 from "@/assets/s8.jpg";


export default {
    name: "Newproduct-",
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "V380 Camera",
                    subtitle: "360 Degree Camera for your home and offices",
                    price: "US$ 39.00",
                    image: image1,
                },
                {
                    id: 2,
                    title: "Wifi camera Bulb",
                    subtitle: "Sensor Camera with Lights and remote",
                    price: "US$ 39.00",
                    image: image2,
                },
                {
                    id: 3,
                    title: "Andriod USB for TV",
                    subtitle: "Amazon andriod remote for your TV",
                    price: "US$ 39.00",
                    image: image3,
                },
                {
                    id: 4,
                    title: "Smart FTT Tuyo",
                    subtitle: "Mini PC Tuyo connection for all devices",
                    price: "US$ 39.00",
                    image: image4,
                },
                {
                    id: 5,
                    title: "WIFI Twingo Camera",
                    subtitle: "1 year warranty camera with smart Tuyo more ..",
                    price: "US$ 39.00",
                    image: image5,
                },
                {
                    id: 6,
                    title: " 7 bottles set",
                    subtitle: " 7 Bottles set with different colors more...",
                    price: "US$ 39.00",
                    image: image6,
                },
                {
                    id: 7,
                    title: "Wireless water cold bottle",
                    subtitle: "wireless water cold bottle with More ....",
                    price: "US$ 39.00",
                    image: image7,
                },
                {
                    id: 8,
                    title: " GTX Smart watch",
                    subtitle: " GTX Smart watch with more colors more...",
                    price: "US$ 39.00",
                    image: image8,
                },

            ],
        };
    },
    methods: {
        gotoproductdetail(item){
            this.$router.push({ name: 'product-detail', params:  {productId: item.id } , props: { productDetail: item } });
        }
    }
};
</script>

<style scoped>
.product-card {
    border-radius: 10px;
    transition: box-shadow 0.3s;
}

.product-card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

.subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
}

.price {
    font-size: 16px;
    font-weight: bold;
    color: #2196F3;
    /* Blue color for price */
}

.buy-button {
    background-color: #4CAF50;
    /* Green color for buy button */
}
</style>
  