<template>
    <v-stepper style="color: blue; font-weight: bolder;" class="mt-15" alt-labels
        :items="['Shipping Address', 'Card Detail', 'Billing Address']">
        <template v-slot:[`item.1`]="{ item }">
            <v-card :title="item" flat>
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="12">
                            <v-form ref="billingForm" @submit.prevent="submitForm">
                                <v-card>
                                    <v-card-title class="text-center headline">Billing Address</v-card-title>
                                    <v-card-text>
                                        <v-text-field variant="underlined" color="primary" v-model="fullName"
                                            label="Full Name" class="custom-text-field"></v-text-field>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="underlined" v-model="username"
                                                    label="Username"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field variant="underlined" v-model="email"
                                                    label="Email (Optional)"></v-text-field>
                                                <v-text-field variant="underlined" v-model="email"
                                                    label="Phone Number (Optional)"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-text-field variant="underlined" v-model="address" label="Address"></v-text-field>
                                        <v-text-field variant="underlined" v-model="address2"
                                            label="Address 2 (Optional)"></v-text-field>
                                        <v-textarea variant="underlined" v-model="specialNotes"
                                            label="Special Notes (Optional)"
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
                                        <v-btn type="submit" block class="mt-2">Submit</v-btn>
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
                            <v-col md="10">
                                <v-card class="well">
                                    <v-row>
                                        <h1 class="ml-7"> Enter Your Card Detail </h1>
                                    </v-row>
                                    <br />
                                    <v-row>
                                        <v-col md="7" class="ml-5">
                                            <v-text-field label="Credit or Debit Card Number"
                                                v-model="formData.number"></v-text-field>
                                        </v-col>
                                        <v-col md="4">
                                            <v-text-field label="Expiration" placeholder="MM/YY"
                                                v-model="formData.expiry"></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col md="5" class="ml-5">
                                            <v-text-field label="Card Holder Name" v-model="formData.name"></v-text-field>
                                        </v-col>
                                        <v-col md="4">
                                            <v-text-field label="CVV" v-model="formData.cvv"></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col md="12" class="text-right mb-4">
                                            <v-btn @click="submitForm" class="mr-3" color="success">Submit</v-btn>
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
                <v-app>
                    <v-container class="mt-14">
                        <v-form ref="billingForm" @submit.prevent="submitForm">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="billingInfo.firstName" label="First Name"
                                        :rules="[rules.required]" required></v-text-field>
                                        <v-text-field v-model="billingInfo.email" label="Email Address"
                                        :rules="[rules.email]" required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="billingInfo.lastName" label="Last Name" :rules="[rules.required]"
                                        required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-text-field :rules="[rules.required]" v-model="billingInfo.address" label="Address"
                                        required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field :rules="[rules.required]" v-model="billingInfo.city" label="City"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field :rules="[rules.required]" v-model="billingInfo.state" label="State"
                                        required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="billingInfo.zipCode" label="Zip Code" required
                                        :rules="[rules.zipCode]"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field :rules="[rules.required]" v-model="billingInfo.country" label="Country"
                                        required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-btn type="submit" class="ma-2" elevation="2">
                                <v-icon left>mdi-send</v-icon>
                                Submit
                            </v-btn>
                        </v-form>
                    </v-container>
                </v-app>


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
            rules: {
                zipCode: (value) =>
                    /^[0-9]{4}(?:-[0-9]{3})?$/.test(value) ||
                    'Zip Code must be valid (e.g., 12345 or 12345-6789)',
                required: (value) => !!value || 'This field is required',
                email: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                'This field is required',
            },
            billingInfo: {
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                country: '',
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
            this.$nextTick(async () => {
                // Check if billingForm ref is defined
                if (this.$refs.billingForm) {
                    // Validate billing form
                    const billingFormIsValid = await this.$refs.billingForm.validate();

                    // Validate card form
                    const cardFormIsValid = this.validateCardForm();

                    // Check if all forms are valid before proceeding
                    if (billingFormIsValid && cardFormIsValid) {
                        // Perform actions with billingInfo and formData data (e.g., send to server)
                        alert('Forms submitted successfully', this.billingInfo, this.formData);
                    } else {
                        alert('Forms contain validation errors');
                    }
                } else {
                    alert('Billing form ref is undefined');
                }
            });
        },
        validateCardForm() {
            // Implement validation logic for the card form
            const isValid =
                /^\d{16}$/.test(this.formData.number) &&
                /^\d{2}\/\d{2}$/.test(this.formData.expiry) &&
                /^[A-Za-z\s]+$/.test(this.formData.name) &&
                /^\d{3}$/.test(this.formData.cvv);

            return isValid;
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

.v-btn--active,

.v-btn--router-active,
.v-btn--outlined:hover,
.v-btn--rounded:hover,
.v-btn--depressed:hover,
.v-btn--text:hover {
  background-color: #1976d2; /* Change to your preferred color */
}
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

.text-right {
    text-align: center;
}

/* Add more styles as needed */
</style>
