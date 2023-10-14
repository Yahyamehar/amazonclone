<template>
    <div class="home">
        <h1>Home page</h1>
        <v-dialog v-model="dialog" persistent width="524">
            <Login></Login>

        </v-dialog>

    </div>
</template>
 
<script>
import Login from '@/components/Auth/Login.vue';



export default {
    name: "Home-",
    components: {
         Login,
     },

data() {
    return {
        dialog: true,
        isauthenticated: false,

}
}
}

</script>
 
 
 