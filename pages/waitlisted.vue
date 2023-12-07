<!-- Your Waitlisted.vue component template -->

<template>
    <div class="tw-container tw-mx-auto tw-my-8 tw-max-w-screen-lg">
        <div class="tw-flex tw-flex-col tw-items-center">
            <h2 class="tw-text-3xl tw-font-semibold tw-mb-4">Waitlisted Products</h2>

            <div v-if="waitlistedProducts.length > 0" class="tw-w-full">
                <div class="tw-border-b tw-pb-4 tw-mb-4" v-for="(product, index) in waitlistedProducts" :key="index">
                    <div class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-12 tw-items-center">
                        <img :src="product.image" :alt="product.name" class="tw-w-24 tw-h-24 tw-object-cover tw-rounded" />
                        <div class="tw-ml-4">
                            <h3 class="tw-text-lg tw-font-semibold">{{ product.name }}</h3>
                            <p class="tw-text-gray-600">${{ product.price.toFixed(2) }}</p>
                        </div>

                        <button @click="removeFromWaitlist(index)" class="tw-text-white tw-p-2 tw-rounded">
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
                                        stroke="#e01b24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                        stroke="#e01b24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            <div v-else>
                <p>No products in the waitlist.</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    computed: {
        waitlistedProducts() {
            return this.$store.state.waitlistedProducts;
        },
    },
    methods: {
        removeFromWaitlist(index) {
            // Implement logic to remove the product from the waitlist
            this.$store.dispatch('removeFromWaitlist', index);
        },
    },
};
</script>
  
<style scoped>
/* Add scoped styling here */
</style>
  