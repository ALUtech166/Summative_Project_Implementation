<!-- components/ProductCard.vue -->
<template>
    <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
        <div class="tw-relative tw-w-full tw-h-72">
            <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover" :src="product.image"
                alt="Banner Image">
            <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-56">
                    <svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </div>

                <div
                    class="bg-color tw-text-center tw-w-16 tw-mx-2 tw-shadow-xl tw-rounded-md tw-transform tw--translate-y-10 tw-mt-2">
                    <span class="tw-text-md">New</span>
                </div>

                <div
                    class="tw-bg-yellow-500 tw-text-center tw-w-16 tw-mx-2 tw-shadow-xl tw-rounded-md tw-transform tw--translate-y-10 tw-mt-2">
                    <span class="tw-text-md tw-text-white">2%</span>
                </div>

            </div>
        </div>

        <div class="tw-flex tw-flex-col tw-mt-2">
            <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                ⭐⭐⭐⭐⭐
            </span>
            <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                {{ product.name }}
            </span>
            <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                {{ product.price }}
            </span>
            <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button @click="addToCart"
                    class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                    <div
                        class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                    </div>
                    <span
                        class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                        Add to cart

                    </span>
                </button>

                <button @click="$router.push(`/product/${product.id}`)"
                    class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">

                    <div
                        class="tw-absolute tw-inset-0 tw-w-full tw-bg-transparent tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                    </div>
                    <span
                        class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-black">
                        More info

                    </span>
                </button>
            </div>


        </div>
    </div>
</template>
  
<!-- components/ProductCard.vue -->
<script>
export default {
    props: {
        product: Object,
    },
    methods: {
        addToCart() {
            // Implement logic to add the product to the shopping cart
            // You may want to use Vuex for state management
            this.$store.commit('addToCart', this.product);
            console.log(`Added ${this.product.name} to the cart`)
        },
        previewProduct() {
            this.$emit('preview', this.product);
        },


        navigateToProduct() {
            // Assuming 'product-id' is your route name and product.id is the parameter
            this.$router.push({ name: 'product-id', params: { id: this.product.id } });
        },

    },
};
</script>

  
<style scoped>
button {
    border: 1px solid #043CAA;
    background-color: white;
}



.bg-color {
    background-color: #043CAA;
    color: white;
}

.bg-color-1 {
    background-color: #043CAA;
}

.bg-image {
    background-image: url('../assets/pharma.jpg');
    background-size: cover;
    height: 100vh;
    position: relative;
}


.text-color {
    color: #043CAA;
}

/* Popup */
.tw-modal {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}

.tw-modal-overlay {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}

.tw-modal-container {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-50px);
    transition: all 0.3s ease-in-out;
}

.tw-modal .tw-modal-overlay {
    opacity: 1;
    visibility: visible;
}

.tw-modal.open {
    opacity: 1;
    visibility: visible;
}


/* Popup */
.tw-modal {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}

.tw-modal-overlay {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
}

.tw-modal-container {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-50px);
    transition: all 0.3s ease-in-out;
}

.tw-modal .tw-modal-overlay {
    opacity: 1;
    visibility: visible;
}

.tw-modal.open {
    opacity: 1;
    visibility: visible;
}

.tw-modal.open .tw-modal-container {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

/* Close button */
.tw-modal-close {
    cursor: pointer;
}

/* Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animated {
    animation-duration: 0.3s;
    animation-fill-mode: both;
}

.fadeIn {
    animation-name: fadeIn;
}
</style>
