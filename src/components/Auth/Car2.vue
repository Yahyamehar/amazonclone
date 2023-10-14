<!-- Carousel.vue -->

<template>
    <v-card >
        <v-carousel show-arrows="hover" hide-delimiters style="height: 350px;" cycle>
            <v-carousel-item style="height: 100%;" v-for="(item, index) in items" :key="index">
                <v-img :src="item.src" :alt="item.alt" style="height: 360px;"></v-img>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>
  
<script>
import image1 from '@/assets/pn2.jpg'
import image2 from '@/assets/pv3.jpg'
import image3 from '@/assets/s1.jpg'
import image4 from '@/assets/pn5.jpg'
import image5 from '@/assets/s4.jpg'
import image6 from '@/assets/pn7.jpg'
import image7 from '@/assets/s5.jpg'
import image8 from '@/assets/pn9.jpg'
import image9 from '@/assets/pn10.jpg'
export default {
    name: 'Car2-',
    data() {
        return {
            items: [
                { src: image1, alt: 'Image 1' },
                { src: image3, alt: 'Image 1' },
                { src: image7, alt: 'Image 1' },
                { src: image5, alt: 'Image 1' },
                { src: image4, alt: 'Image 1' },
                { src: image6, alt: 'Image 1' },
                { src: image2, alt: 'Image 1' },
                { src: image8, alt: 'Image 1' },
                { src: image9, alt: 'Image 1' },

                // Add more images as needed
            ],
        };
    },
};
</script>
  
<style scoped>
/* Add any custom styles if needed */
</style>
  