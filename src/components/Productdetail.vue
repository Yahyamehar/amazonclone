<template>
    <v-container class="container mt-10" style="width: 100%; height: 100%;" fluid>
        <v-card v-if="item !== null" class="box">

            <v-row>
                <v-col cols="16" md="8">
                    <!-- Product Image -->
                    <v-img class="product__img" :src="item.image" width="700" height="360" alt="Product Image"></v-img>


                </v-col>

                <v-col cols="19" md="9">
                    <!-- Product Description -->
                    <v-card-text class="product__disc">
                        <div class="product__disc--content">
                            <div class="disc__content--about">
                                <h1> {{ item.title }} </h1>
                                <br />
                                <span> {{ item.Overview }} </span>
                                <ul>
                                    <li>
                                        {{ item.subtitle }}
                                    </li>

                                </ul>


                            </div>
                        </div>


                    </v-card-text>
                    <v-card-actions class="product_buttons">
                        <v-row class="mb-15">
                            <v-col cols="6"><v-btn  @click="decrement" :disabled="counter === 0" icon>

                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                
                                <!-- Counter Display -->
                                {{ counter }}
                            
                                <v-btn  @click="increment" :disabled="counter === 10" icon>
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-col>

                            <v-col cols="6">                            <h1 style="margin-left: 15px;"> {{ item.price }}</h1></v-col>
                        </v-row>
                        <!-- - Button -->


                        <!-- + Button -->

                    </v-card-actions>
                    <!-- Add to Cart Button -->
                    <v-card-actions class="product_buttons">
                        <v-btn @click="toggleAdded" :disabled="isAdded" class="addtocart" color="primary">
                            <template v-if="!isAdded">
                                <div class="pretext">
                                    <v-icon>mdi-cart</v-icon> ADD TO CART {{ counter }}

                                </div>

                            </template>
                            <template v-else>
                                <div :style="{ transform: doneTransform }" class="pretext done">
                                    <div class="posttext">
                                        <v-icon>mdi-check</v-icon> ADDED
                                    </div>
                                </div>
                            </template>
                        </v-btn>
                    </v-card-actions>
                    <v-img src="@/assets/amalogo.png" width="100" height="20"> </v-img>

                </v-col>

            </v-row>

        </v-card>
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
    name: 'Productdetail-',
    props: ['productDetail'],
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "V380 Camera",
                    Overview: "V380 Camera Overview:",
                    subtitle: "360 Degree Camera for your home and offices",
                    price: "US$ 129.00",
                    image: image1,
                },
                {
                    id: 2,
                    title: "Wifi camera Bulb",
                    Overview: "Wifi camera Overview:",
                    subtitle: "Sensor Camera with Lights and remote",
                    price: "US$ 99.00",
                    image: image2,
                },
                {
                    id: 3,
                    title: "Andriod USB for TV",
                    Overview: "Andriod USB Overview:",
                    subtitle: "Amazon andriod remote for your TV",
                    price: "US$ 79.00",
                    image: image3,
                },
                {
                    id: 4,
                    title: "Smart FTT Tuyo",
                    Overview: "Smart FTT Overview:",
                    subtitle: "Mini PC Tuyo connection for all devices",
                    price: "US$ 89.00",
                    image: image4,
                },
                {
                    id: 5,
                    title: "WIFI Twingo Camera",
                    Overview: "WIFI Twingo Overview:",
                    subtitle: "1 year warranty camera with smart Tuyo more ..",
                    price: "US$ 239.00",
                    image: image5,
                },
                {
                    id: 6,
                    title: " 7 bottles set",
                    Overview: "7 bottles set Overview:",
                    subtitle: " 7 Bottles set with different colors more...",
                    price: "US$ 69.00",
                    image: image6,
                },
                {
                    id: 7,
                    title: "Wireless water cold bottle",
                    Overview: "Wireless water cold bottle Overview:",
                    subtitle: "wireless water cold bottle with More ....",
                    price: "US$ 99.00",
                    image: image7,
                },
                {
                    id: 8,
                    title: " GTX Smart watch",
                    Overview: "GTX Smart watch Overview:",
                    subtitle: " GTX Smart watch with more colors more...",
                    price: "US$ 89.00",
                    image: image8,
                },
            ],
            item: null,
            counter: 1, // Initial counter value
            isAdded: false,
            doneTransform: 'translate(0px)',
        };
    },
    methods: {
        increment() {
            if (this.counter < 10) {
                this.counter++;
                this.updatePrice();
            }
        },
        decrement() {
            if (this.counter > 0) {
                this.counter--;
                this.updatePrice();
            }
        },
        updatePrice() {
            this.item.price = (parseFloat(this.item.price.replace('US$', '')) * this.counter).toFixed(1);
        },
        toggleAdded() {
            // Toggle isAdded and update the transform style
            this.isAdded = !this.isAdded;
            this.doneTransform = this.isAdded
                ? 'translate(0px)'
                : 'translate(-110%) skew(-40deg)';

        },
    },
    mounted() {
        console.log('this.item', this.$route.params.productId);
        const id = this.$route.params.productId;
        this.item = this.items.filter(it => it.id == id)[0];
        console.log('this.item', this.item);
    }

};
</script>
  


  
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');



.addtocart {
    display: block;
    padding: 0.5em 1em 0.5em 1em;
    border-radius: 100px;
    border: none;
    font-size: 2em;
    position: relative;
    background: #0652DD;
    cursor: pointer;
    height: 2em;
    width: 13em;
    overflow: hidden;
    transition: transform 0.1s;
    z-index: 1;
}

.addtocart:hover {
    transform: scale(1.1);
}

.pretext {
    color: #fff;
    background: #0652DD;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
}

i {
    margin-right: 10px;
}

.done {
    background: #be2edd;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transition: transform 0.3s ease;

    transform: translate(-110%) skew(-40deg);
}

.posttext {
    background: #be2edd;
}



.mb1 {
    margin-bottom: 122px;
    font-size: 30px;


}

.mb2 {
    margin-bottom: 122px;
    font-size: 30px;

}

.mb3 {
    margin-bottom: 122px;
    font-size: 30px;
}


.container {
    width: 120%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    position: relative;

    .box {
        width: 20%;
        height: 650px;
        background: transparent;
        position: absolute;
        animation: openBox 1s cubic-bezier(.74, .06, .4, .92) forwards;
    }

    .product__img {
        width: 600px;
        position: absolute;
        left: -150px;
        top: 90px;
        opacity: 0;
        animation: fadeImg 1s ease-in-out forwards;
        animation-delay: 1s;
    }

    .product__img:hover {
        transform: translateY(-8px);
    }

    .product__disc {
        width: 0px;
        height: 300px;
        background: #FFCA1B;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0px;
        top: 50px;
        animation: showDisc 1s cubic-bezier(.74, .06, .4, .92) forwards;
    }

    .product__disc--content {
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        animation: fadeContent 1s ease-in-out forwards;
        animation-delay: 1s;
        opacity: 0;
    }

    .disc__content--about {
        width: 100%;
    }

    h1 {
        font-size: 32px;
        font-family: 'Poppins';

    }

    span {
        font-family: 'Lato';
        font-size: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        display: flex;
        opacity: 0.5;
    }

    p {
        margin-top: 35px;
        font-size: 14px;
        font-family: 'Poppins';

    }
}

p {
    font-size: 19px;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: flex;
    z-index: 2;
    margin-left: 15px;
    font-family: 'Poppins';

}



.product_buttons {
    width: 500px;
    bottom: 50px;
    right: -50px;
    position: absolute;
}

.btn {
    width: 240px;
    height: 70%;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Poppins';
    -webkit-transition: ease-in-out 220ms;
    -moz-transition: ease-in-out 220ms;
    -ms-transition: ease-in-out 220ms;
    -o-transition: ease-in-out 220ms;
    transition: ease-in-out 220ms;
    cursor: pointer;
}

.wishlist {
    border: 2px solid #F71568;
    background: transparent;
    color: #F71568;
    position: absolute;
    bottom: -25px;
    left: 0;
    opacity: 0;
    animation: fadeWish 1s cubic-bezier(.74, .06, .4, .92) forwards;
    animation-delay: 1s;
}

&:hover {
    background: #F71568;
    color: #FFF;
    box-shadow: 0 0 26px #F71568;
}


.buy {
    border: none;
    background: #F71568;
    color: #FFF;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0;
    animation: fadeBuy 1s cubic-bezier(.74, .06, .4, .92) forwards;
    animation-delay: 1s;
}

&:hover {
    box-shadow: 0 0 26px #F71568;
}





/*
    keyframes
   */

@keyframes openBox {
    0% {
        width: 0px;
        left: 15%;
    }

    100% {
        width: 900px;
        left: 15%;
    }
}

@keyframes fadeImg {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes upVideo {
    0% {
        opacity: 0;
        bottom: -20px;
    }

    100% {
        opacity: 1;
        bottom: 0px;
    }
}

@keyframes showDisc {
    0% {
        width: 0px;
        left: 450px;
    }

    100% {
        width: 500px;
        left: 450px;
    }
}

@keyframes fadeContent {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeWish {
    0% {
        opacity: 0;
        bottom: -25px;
    }

    100% {
        opacity: 1;
        bottom: 0;
    }
}

@keyframes fadeBuy {
    0% {
        opacity: 0;
        bottom: -25px;
    }

    100% {
        opacity: 1;
        bottom: 0;
    }
}


@keyframes top {
    0% {
        opacity: 0;
        bottom: -80px
    }

    100% {
        opacity: 1;
        bottom: 0px
    }
}

@keyframes icon {
    0% {
        opacity: 0;
        transform: scale(0.0);
    }

    50% {
        opacity: 1;
        transform: scale(1.3) rotate(-02deg);

    }

    100% {
        opacity: 1;
        bottom: 0px;
    }
}

@media (min-width: 768px) {
    .button {
        font-size: 24px;
        min-width: 196px;
    }
}
</style>
  