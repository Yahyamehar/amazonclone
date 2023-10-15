<template>
    <v-app style="height: 1vh;">
        <v-app-bar app color="black" dense>
            <!-- Logo with margin -->

            <v-img @click="$router.push('/products')" height="40" style="cursor: pointer;;" class="mr-4 ml-3"
                src="@/assets/logoo.png" alt="logo" />

            <v-icon>mdi-map-marker</v-icon>
            <p class="ml-4">Deliver to <br /><b>Portugal</b></p>
            <v-spacer></v-spacer>

            <v-row text-align="center" style="color: #ffffff; border-radius: 10px;" class="search-bar">
                <v-col cols="12">
                    <!-- Adjusted width of the text field -->
                    <v-text-field v-model="inputValue" label="Search" placeholder="Search Amazon" append-icon="mdi-magnify"
                        @keydown.enter="handleEnter" outlined dense class="search-input"></v-text-field>
                </v-col>
            </v-row>
            <v-spacer></v-spacer>

            <!-- Language dropdown -->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn>
                        <v-icon v-bind="attrs" v-on="on" color="white">mdi-translate</v-icon>
                    </v-btn>

                </template>

                <v-list>

                    <v-list-item v-for="(item, index) in languageItems" :key="index">
                        <v-list-item-title>{{ item.label }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <div>
                <v-btn icon @click="openCartDialog">
                    <v-icon color="white">mdi-cart-outline</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon color="white">mdi-account-outline</v-icon>
                </v-btn>

                <v-dialog v-model="cartDialog" max-width="700px">
                    <v-card class="carts">
                        <v-card-title class="headline font-weight-bold mb-4">Shopping Cart</v-card-title>

                        <!-- Item 1 -->
                        <v-row>
                            <v-col class="ml-3">
                                Item 1
                                <v-img src="@/assets/s1.jpg" height="80" width="70" alt="s1" />
                            </v-col>
                            <v-col>
                                <v-btn icon @click="decrementItem(1)">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <span>{{ itemQuantities[1] }}</span>
                            </v-col>

                            <v-col>
                                <v-btn icon @click="incrementItem(1)">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <p>US$ {{ (itemQuantities[1] * itemPrices[1]).toFixed(2) }}</p>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <!-- Item 2 -->
                        <v-row>
                            <v-col class="ml-3">
                                Item 2
                                <v-img src="@/assets/s2.webp" height="80" width="70" alt="s2" />
                            </v-col>
                            <v-col>
                                <v-btn icon @click="decrementItem(2)">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <span>{{ itemQuantities[1] }}</span>
                            </v-col>

                            <v-col>
                                <v-btn icon @click="incrementItem(2)">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <p>US$ {{ (itemQuantities[1] * itemPrices[1]).toFixed(2) }}</p>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <!-- Item 3 -->
                        <v-row>
                            <v-col class="ml-3">
                                Item 3
                                <v-img src="@/assets/s3.webp" height="80" width="70" alt="s3" />
                            </v-col>
                            <v-col>
                                <v-btn icon @click="decrementItem(3)">
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <span>{{ itemQuantities[1] }}</span>
                            </v-col>
                            <v-col>
                                <v-btn icon @click="incrementItem(3)">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <p>US$ {{ (itemQuantities[1] * itemPrices[1]).toFixed(2) }}</p>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>
                        <v-card-actions color="primary">
                            <h3>Total Price: US${{ totalCartPrice }}</h3>
                        </v-card-actions>
                        <v-card-actions class="d-flex justify-end border-top">
                            <v-btn @click="checkout" class="mr-4" elevation="2" outlined color="primary">
                                <v-icon left>
                                    mdi-cart
                                </v-icon>
                                Check out
                            </v-btn>
                        </v-card-actions>

                        <v-btn style="font-size: 20px; font-style: italic; font-weight: bold;"
                            @click="closeCartDialog">Close</v-btn>


                    </v-card>
                </v-dialog>
            </div>
            <v-btn text class="login-btn" style="color: #ffffff;">Log In</v-btn>
            <v-btn text class="signin-btn" style="color: #ffffff;">Sign In</v-btn>

        </v-app-bar>
        <!-- Your main content goes here -->
    </v-app>
</template>
  
<script>

export default {
    name: "Navbar-",
    data() {
        return {
            cartDialog: false,
            inputValue: "",
            itemQuantities: {
                1: 1, // Initial quantity for Item 1
                2: 1, // Initial quantity for Item 2
                3: 1, // Initial quantity for Item 3
            },
            itemPrices: {
                1: 50.99, // Price for Item 1
                2: 50.99, // Price for Item 2
                3: 50.99, // Price for Item 3
            },
            languageItems: [
                { label: "English", value: "en" },
                { label: "Spanish", value: "es" },
                // Add more language options as needed
            ],
        };
    },
    computed: {
        totalCartPrice() {
            return Object.keys(this.itemQuantities).reduce((total, itemId) => {
                return total + this.itemQuantities[itemId] * this.itemPrices[itemId];
            }, 0).toFixed(2);
        },
    },
    methods: {
        handleEnter() {
            // Perform search logic here
            console.log("Searching for:", this.inputValue);
        },
        openCartDialog() {
            this.cartDialog = true;
        },
        closeCartDialog() {
            this.cartDialog = false;
        },
        decrementItem(itemId) {
            if (this.itemQuantities[itemId] > 1) {
                this.itemQuantities[itemId]--;
            }
        },
        incrementItem(itemId) {
            // Add your logic to handle maximum quantity, if needed
            this.itemQuantities[itemId]++;
        },
        checkout() {
            // Add your checkout logic here

            // Close the cart dialog
            this.closeCartDialog();

            // Optionally, you can navigate to the payment page after checkout
            this.$router.push('/payment');
        },
    },
};

</script>
  
<style scoped>
@media only screen and (max-width: 600px) {
  /* Mobile styles go here */
  .search-bar {
    padding: 5px; /* Adjust padding for mobile */
  }

  .search-input {
    width: 100%; /* Full width on mobile */
    margin-left: 0; /* Remove left margin on mobile */
  }

  .carts {
    width: 100%; /* Full width on mobile */
    position: relative;
    top: 0;
    right: 0;
  }

  /* Add more styles for mobile as needed */
}
.border-top {
    border-top: 1px solid #000dff;
}

.search-bar {
    /* Dark background color */
    padding: 10px;
    /* Adjust padding as needed */
    border-radius: 10px white;
    /* Rounded corners */
}


.search-input {
    color: #ffffff;
    /* Text color */
    width: 700px;
    margin-left: 15px;
    /* Full width */
}

.carts {
    width: 500px;
    position: absolute;
    top: -290px;
    right: -408px;

}

.search-input input {
    border-color: #ffffff;
    /* Border color */
}

.login-btn {
    color: #ffffff;
    border: 1px solid #ffffff;
    margin-right: 10px;
    /* Adjust margin as needed */
}

.signin-btn {
    color: #ffffff;
    background-color: #007BFF;
    /* Choose your desired background color */
    border: 1px solid #007BFF;
    border-radius: 4px;
    /* Rounded corners */
}

/* Add more custom styles if needed */
</style>
  