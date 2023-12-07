<template>
    <div class="tw-m-8 tw-flex tw-flex-col lg:tw-flex-row tw-gap-4">
        <div class="lg:tw-flex-1">
            <div class="tw-bg-white tw-rounded-md tw-shadow-md tw-p-6">
                <h2 class="tw-text-2xl tw-font-semibold tw-mb-4">Shopping Cart</h2>

                <div v-if="cart.length > 0">
                    <div v-for="(item, index) in cart" :key="index" class="tw-border-b tw-pb-4 tw-mb-4">
                        <div class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-12 tw-items-center">
                            <img :src="item.image" :alt="item.name" class="tw-w-24 tw-h-24 tw-object-cover tw-rounded" />
                            <div class="tw-ml-4">
                                <h3 class="tw-text-lg tw-font-semibold">{{ item.name }}</h3>
                                <p class="tw-text-gray-600">${{ item.price.toFixed(2) }}</p>
                            </div>
                            <div class="tw-flex tw-items-center tw-mt-2">
                                <button @click="decrementQuantity(index)"
                                    class="tw-bg-gray-300 tw-p-2 tw-rounded-full tw-mr-2">
                                    -
                                </button>
                                <input type="number" v-model="item.quantity" @input="updateTotal(index)"
                                    class="tw-w-10 tw-text-center tw-border tw-rounded" />
                                <button @click="incrementQuantity(index)"
                                    class="tw-bg-gray-300 tw-p-2 tw-rounded-full tw-ml-2">
                                    +
                                </button>
                            </div>

                            <button @click="removeFromCart(index)" class="tw-text-white tw-p-2 tw-rounded">
                                <svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M10 11V17" stroke="#e01b24" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M14 11V17" stroke="#e01b24" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M4 7H20" stroke="#e01b24" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                            stroke="#e01b24" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                            stroke="#e01b24" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>



                        <div class="tw-flex tw-justify-end tw-font-semibold tw-mr-auto">
                            Total: ${{ (item.price * item.quantity).toFixed(2) }}
                        </div>
                    </div>
                </div>

                <div v-else>
                    <p>No items in the cart.</p>
                </div>
            </div>
        </div>

        <aside class="lg:tw-w-1/3 lg:tw-ml-4">
            <div class="tw-bg-white tw-rounded-md tw-shadow-md tw-p-6">
                <h2 class="tw-text-2xl tw-font-semibold tw-mb-4">Checkout</h2>
                <form class="" v-on:submit.prevent="sendMessage">

                    <div class="tw-w-full tw-md:w-1/2">
                        <label class="tw-block tw-font-extrabold tw-mb-1" for="name">
                            Full Name
                        </label>

                        <input type="name" name="name" id="email" placeholder="John Doe"
                            class="tw-block tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full  tw-text-black tw-shadow-md tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                            required>
                    </div>

                    <div class="tw-w-full tw-md:w-1/2">
                        <label class="tw-block tw-font-extrabold tw-mb-1" for="email">
                            Email Address
                        </label>

                        <input type="email" name="email" id="email" placeholder="email@example.com"
                            class="tw-block  tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full  tw-text-black tw-shadow-md tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                            required>
                    </div>


                    <div class="tw-w-full tw-md:w-1/2">
                        <label class="tw-block tw-font-extrabold tw-mb-1" for="number">
                            Phone Number
                        </label>

                        <input type="text" name="number" id="number" placeholder="+228 91 58 50 75"
                            class="tw-block  tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full  tw-text-black tw-shadow-md tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                            required>
                    </div>

                    <div class="tw-w-full tw-mb-8">
                        <div class="tw-mb-4">
                            <label for="shippingAddress" class="tw-block tw-font-semibold">Shipping Address:</label>
                            <input type="text" name="name" id="text" placeholder="John Doe"
                                class="tw-block tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full  tw-text-black tw-shadow-md tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                                required>
                        </div>
                    </div>

                    <button
                        class="tw-group tw-bg-blue-800 tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-4 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl-2xl">
                        <div
                            class="tw-absolute tw-inset-0 tw-w-full tw-bg-blue-800 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                        </div>
                        <span
                            class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                            Checkout

                        </span>
                    </button>
                </form>
            </div>
        </aside>
    </div>
</template>
  
<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart;
        },
    },
    data() {
        return {
            shippingAddress: '',
        };
    },
    methods: {
        removeFromCart(index) {
            this.$store.dispatch("removeFromCart", index);
        },
        decrementQuantity(index) {
            this.$store.dispatch('decrementQuantity', index);
        },
        incrementQuantity(index) {
            this.$store.dispatch('incrementQuantity', index);
        },
        updateTotal(index) {
            // Handle any additional logic if needed when the quantity is updated
            // For now, we'll simply update the total
            this.$forceUpdate(); // Forces a re-render to update the total
        },
        calculateTotal(item) {
            return (item.price * item.quantity).toFixed(2);
        },
        checkout() {
            // Implement checkout logic, e.g., redirect to a payment page
            console.log('Checkout clicked!');
        },
    },
};
</script>
  
<style scoped>
/* Add scoped styling here */
</style>
  