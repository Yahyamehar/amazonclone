<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="450" class="mx-auto pa-4">
            <v-form @submit.prevent="login">
                <v-row justify="center">
                    <v-col>
                        <h3 class="text-h3">Amazon Account Verification</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field v-model="username" label=" Email or Phone Number" outlined dense></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <a href="#" class="text-body-2 font-weight-regular">Didn't remember? Try another way</a>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn type="submit" color="primary" block class="mt-2">Send Verification Code</v-btn>
                    </v-col>
                </v-row>
            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
    </div>
</template>
  
<script>
export default {
    name: "Lostauth-",
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            // Your login logic here
        },
    },
};
</script>
  
<style scoped>
.text-h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* Add any additional styling as needed */
</style>
  