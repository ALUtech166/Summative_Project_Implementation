<template>
    <div class=" tw-mx-auto tw-items-center tw-h-screen">
        <div class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-8 tw-p-6">
            <!-- Delivery Details Section -->
            <div class="tw-flex-1">
                <div class="tw-bg-white tw-rounded-md tw-shadow-md tw-p-6">
                    <h3 class="tw-text-xl tw-font-semibold tw-mb-4">Delivery Details</h3>
                    <form class="tw-space-y-4">
                        <div>
                            <label for="fullName" class="tw-block tw-font-semibold tw-mb-1">Full Name</label>
                            <input id="fullName" type="text" v-model="fullName" placeholder="John Doe"
                                class="tw-w-full tw-py-2 tw-px-3 tw-border tw-rounded" />
                        </div>

                        <div>
                            <label for="address" class="tw-block tw-font-semibold tw-mb-1">Address</label>
                            <input id="address" type="text" v-model="address" placeholder="123 Main Street, City"
                                class="tw-w-full tw-py-2 tw-px-3 tw-border tw-rounded" />
                        </div>

                        <div>
                            <label for="phone" class="tw-block tw-font-semibold tw-mb-1">Phone Number</label>
                            <input id="phone" type="tel" v-model="phone" placeholder="123-456-7890"
                                class="tw-w-full tw-py-2 tw-px-3 tw-border tw-rounded" />
                        </div>
                    </form>
                </div>
            </div>

            <!-- Payment Details Section -->
            <div class="tw-flex-1">
                <div class="tw-bg-white tw-rounded-md tw-shadow-md tw-p-6">
                    <h3 class="tw-text-xl tw-font-semibold tw-mb-4">Payment Details</h3>
                    <form @submit.prevent="submitPayment" class="tw-space-y-4">
                        <!-- Payment Fields (similar to previous examples) -->

                        <div>
                            <label for="cardNumber" class="tw-block tw-font-semibold tw-mb-1">Card Number</label>
                            <input id="cardNumber" type="text" v-model="cardNumber" placeholder="**** **** **** ****"
                                class="tw-w-full tw-py-2 tw-px-3 tw-border tw-rounded" />
                        </div>

                        <!-- Expiry Date and CVV -->
                        <div class="tw-flex tw-space-x-4">
                            <div class="tw-flex-1">
                                <label for="expiryDate" class="tw-block tw-font-semibold tw-mb-1">Expiry Date</label>
                                <input id="expiryDate" type="text" v-model="expiryDate" placeholder="MM/YY"
                                    class="tw-w-full tw-py-2 tw-px-3 tw-border tw-rounded" />
                            </div>
                            <div class="tw-flex-1">
                                <label for="cvv" class="tw-block tw-font-semibold tw-mb-1">CVV</label>
                                <input id="cvv" type="text" v-model="cvv" placeholder="***"
                                    class="tw-w-full tw-py-2 tw-px-3 tw-border tw-rounded" />
                            </div>
                        </div>

                        <!-- Cardholder Name -->
                        <div>
                            <label for="cardholderName" class="tw-block tw-font-semibold tw-mb-1">Cardholder Name</label>
                            <input id="cardholderName" type="text" v-model="cardholderName" placeholder="John Doe"
                                class="tw-w-full tw-py-2 tw-px-3 tw-border tw-rounded" />
                        </div>

                        <!-- Payment Options -->
                        <div class="tw-flex tw-space-x-4">
                            <div>
                                <label class="tw-block tw-font-semibold tw-mb-1">Payment Options</label>
                                <div class="tw-flex">
                                    <a href="#" class="tw-text-blue-500 tw-hover:tw-underline">MTN Mobile Money</a>
                                </div>
                            </div>

                            <div>
                                <label class="tw-block tw-font-semibold tw-mb-1">&nbsp;</label>
                                <div class="tw-flex">
                                    <a href="#" class="tw-text-blue-500 tw-hover:tw-underline">Mastercard</a>
                                </div>
                            </div>

                            <div>
                                <label class="tw-block tw-font-semibold tw-mb-1">&nbsp;</label>
                                <div class="tw-flex">
                                    <a href="#" class="tw-text-blue-500 tw-hover:tw-underline">Visa</a>
                                </div>
                            </div>
                        </div>

                        <!-- Payment Button -->
                        <button
                            class="tw-group tw-bg-blue-800 tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-4 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-full tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl-2xl">
                            <div
                                class="tw-absolute tw-inset-0 tw-w-full tw-bg-blue-800 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                            </div>
                            <span
                                class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                                Pay Now

                            </span>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            // Delivery Details
            fullName: '',
            address: '',
            phone: '',

            // Payment Details (similar to previous example)
        };
    },
    methods: {
        submitPayment() {
            // Implement actual payment processing logic here
            console.log('Payment submitted!');
            // You would typically integrate with a secure payment gateway in a real-world scenario
        },
    },
};
</script>
  
<style scoped>
/* Add scoped styling here */
</style>
  