<template>
    <v-stepper style="color: blue; font-weight: bolder;" class="mt-15" alt-labels
        :items="['Shipping Address', 'Card Detail', 'Billing Address']">
        <template v-slot:[`item.1`]="{ item }">
            <v-card :title="item" flat>
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="12">
                            <v-form @submit.prevent="submitForm">
                                <v-card>
                                    <v-card-title class="text-center headline">Billing Address</v-card-title>
                                    <v-card-text>
                                        <v-text-field variant="underlined" color="primary" v-model="fullName"
                                            label="Full Name" class="custom-text-field"></v-text-field>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="underlined" v-model="username" label="Username"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="underlined" v-model="email" label="Email (Optional)"></v-text-field>
                                                <v-text-field variant="underlined" v-model="email"
                                                    label="Phone Number (Optional)"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-text-field variant="underlined" v-model="address" label="Address"></v-text-field>
                                        <v-text-field variant="underlined" v-model="address2" label="Address 2 (Optional)"></v-text-field>
                                        <v-textarea variant="underlined" v-model="specialNotes" label="Special Notes (Optional)"
                                            hint="Include any special request you have for us."></v-textarea>
                                        <v-checkbox v-model="sameShipping" class="custom-checkbox"
                                            label="Shipping address is same as billing"></v-checkbox>
                                        <v-checkbox v-model="saveInfo" label="Save my info for next time"></v-checkbox>
                                        <v-divider></v-divider>
                                        <v-subheader>Shipping Options</v-subheader>
                                        <v-radio-group v-model="selectedShipping" row class="custom-radio-group">
                                            <v-radio label="Next day shipping" value="nextDay"></v-radio>
                                            <v-radio label="Same day shipping" value="sameDay"></v-radio>
                                            <v-radio label="3-5 Business Days" value="slowShip"></v-radio>
                                        </v-radio-group>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn> Submit </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-container>

            </v-card>
        </template>

        <template v-slot:[`item.2`]="{ item }">
            <v-card :title="item" flat>
                <v-app>
                    <v-container fluid>
                        <v-row justify="center">
                            <v-col md="4">
                                <v-card class="well">
                                    <v-row>
                                        <!-- Your card content goes here -->
                                    </v-row>
                                    <br />

                                    <v-row>
                                        <v-col md="8">
                                            <v-text-field label="Credit Card Number"
                                                v-model="formData.number"></v-text-field>
                                        </v-col>
                                        <v-col md="4">
                                            <v-text-field label="Expiration" placeholder="MM/YY"
                                                v-model="formData.expiry"></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col md="8">
                                            <v-text-field label="Name" v-model="formData.name"></v-text-field>
                                        </v-col>
                                        <v-col md="4">
                                            <v-text-field label="CVV" v-model="formData.cvv"></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col md="12" class="text-right">
                                            <v-btn @click="submitForm" color="success">Submit</v-btn>
                                            <v-btn @click="clearForm" color="info">Clear</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-app>
            </v-card>
        </template>

        <template v-slot:[`item.3`]="{ item }">
            <v-card :title="item" flat>
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="12">
                            <v-form @submit.prevent="submitForm">
                                <v-card>
                                    <v-card-title class="text-center headline">Billing Address</v-card-title>
                                    <v-card-text>
                                        <v-text-field variant="underlined" color="primary" v-model="fullName"
                                            label="Full Name" class="custom-text-field"></v-text-field>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="underlined" v-model="username" label="Username"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="underlined" v-model="email" label="Email (Optional)"></v-text-field>
                                                <v-text-field variant="underlined" v-model="email"
                                                    label="Phone Number (Optional)"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-text-field variant="underlined" v-model="address" label="Address"></v-text-field>
                                        <v-text-field variant="underlined" v-model="address2" label="Address 2 (Optional)"></v-text-field>
                                        <v-textarea variant="underlined" v-model="specialNotes" label="Special Notes (Optional)"
                                            hint="Include any special request you have for us."></v-textarea>
                                        <v-checkbox v-model="sameShipping" class="custom-checkbox"
                                            label="Shipping address is same as billing"></v-checkbox>
                                        <v-checkbox v-model="saveInfo" label="Save my info for next time"></v-checkbox>
                                        <v-divider></v-divider>
                                        <v-subheader>Shipping Options</v-subheader>
                                        <v-radio-group v-model="selectedShipping" row class="custom-radio-group">
                                            <v-radio label="Next day shipping" value="nextDay"></v-radio>
                                            <v-radio label="Same day shipping" value="sameDay"></v-radio>
                                            <v-radio label="3-5 Business Days" value="slowShip"></v-radio>
                                        </v-radio-group>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn> Submit </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </template>
    </v-stepper>
</template>
  
<script>
export default {
    name: 'Payment-',
    data() {
        return {
            formData: {
                number: '',
                expiry: '',
                name: '',
                cvv: '',
            },
            fullName: '',
            username: '',
            email: '',
            address: '',
            address2: '',
            specialNotes: '',
            sameShipping: false,
            saveInfo: false,
            selectedShipping: '',
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log('Form submitted:', this.fullName, this.username, this.email, this.address, this.address2, this.specialNotes, this.sameShipping, this.saveInfo, this.selectedShipping);
        },
        clearForm() {
            // Clear form logic here
            this.formData = {
                number: '',
                expiry: '',
                name: '',
                cvv: '',
            };
        },

    },
};

</script>
  
<style scoped>
/* Add your custom styles here */

.text-center {
    text-align: center;

}

.headline {
    font-size: 1.5em;
    color: #2b00ff;

}

/* Style for text fields */
.custom-text-field {
    width: 100%;
    margin-bottom: 16px;
}

/* Style for checkboxes */
.custom-checkbox {
    margin-bottom: 16px;
}

/* Style for radio group */
.custom-radio-group {
    margin-top: 16px;
    margin-bottom: 16px;
}

/* Add more styles as needed */
</style>
