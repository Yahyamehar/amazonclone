<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <RouterView />
    </v-main>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'





export default {
  name: 'App',

  components: {
    Navbar,
  


  },

  data: () => ({
    //
  }),
}
</script>
<style></style>
