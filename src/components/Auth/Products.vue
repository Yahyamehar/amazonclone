<template>
  <v-app class="car">
    <v-carousel hide-delimiters show-arrows="hover" cycle>
      <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <v-img :src="item.image" :alt="item.alt" aspect-ratio="2.5" style="max-width: 100%"></v-img>
      </v-carousel-item>
    </v-carousel>
    <br>
    <v-divider></v-divider>
    <Newproduct></Newproduct>
    <v-divider></v-divider>
    <br>
   
    <v-row class="ml-1" style="justify-content: space-between;">
      <Car2 style="width: 375px;"></Car2>
      <Car2 style="width: 375px;"></Car2>
      <Car2 style="width: 375px;"></Car2>
      <Car2 style="width: 375px;"></Car2>
    
  </v-row>
 
  </v-app>  

  
</template>

<script>
import Car2 from '@/components/Auth/Car2';
import Newproduct from '@/components/Newproduct.vue';
import image1 from '@/assets/wall1.jpg'
import image2 from '@/assets/wall2.jpg'
import image3 from '@/assets/wall3.webp'

export default {
  name: "Products-",
  components: {
    Car2,
    Newproduct
  },

  data() {
    return {
      carouselItems: [
        { image: image1, alt: "Image 1" },
        { image: image2, alt: "Image 2" },
        { image: image3, alt: "Image 3" },
      ],
    };
  },
};
</script>


<style scoop>

.car{
  margin-top: 69px;
}

</style>
