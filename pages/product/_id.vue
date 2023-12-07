<template>
  <div class="tw-bg-white tw-p-6 tw-rounded-md tw-shadow-md">

    <div v-if="product" class="tw-flex tw-flex-col lg:tw-flex-row tw-justfy-between tw-gap-12">
      <div class="tw-w-1/2">
        <img :src="product.image" alt="Product Image"
          class="tw-w-full tw-object-cover tw-rounded-md tw-transition-transform tw-transform tw-hover:tw-scale-105">
      </div>

      <div class="tw-w-1/2">
        <div>
          <h1 class="tw-text-6xl tw-font-extrabold tw-mb-2">{{ product.name }}</h1>
          <p class="tw-mt-2 tw-text-md tw-text-gray-700 tw-text-justify">{{ product.description }}</p>
        </div>
        <p class="tw-text-blue-800 tw-text-4xl tw-font-extrabold tw-mt-4">${{ product.price.toFixed(2) }}</p>

        <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2">
          <button @click="addToCart"
            class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
            <div
              class="tw-absolute tw-inset-0 tw-w-full tw-bg-blue-800 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
            </div>
            <span class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
              Add to cart

            </span>
          </button>

          <button @click="$router.push(`/payment`)"
            class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">

            <div
              class="tw-absolute tw-inset-0 tw-w-full tw-bg-red-800  tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
            </div>
            <span class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
              Pay now

            </span>
          </button>
        </div>
      </div>

    </div>

    <h1 class="tw-text-black lg:tw-px-24 tw-text-4xl tw-font-extrabold tw-pb-4 tw-mt-12">
      Features Products
    </h1>


    <div class="tw-border-2 tw-border-black tw-p-12">
      <v-row>
        <v-col v-for="product in products" :key="product.id" cols="12" md="8" lg="3">
          <ProductCard :product="product" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,

      products: [
        { id: 1, name: 'Product 1', price: 19.99, description: 'Our platform provides a seamless experience for individuals seeking medications by partnering with major insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved medications at competitive prices, offering convenience and accessibility. Our licensed pharmacists are readily available to address any concerns, providing information on pricing, allergies, side-effects, and more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications, fostering a trusted space where users can confidently shop for their health needs. ', image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },
        { id: 2, name: 'Product 2', price: 29.99, description: 'Our platform provides a seamless experience for individuals seeking medications by partnering with major insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved medications at competitive prices, offering convenience and accessibility. Our licensed pharmacists are readily available to address any concerns, providing information on pricing, allergies, side-effects, and more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications, fostering a trusted space where users can confidently shop for their health needs. ', image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },
        // Add more products as needed
        { id: 3, name: 'Product 3', price: 39.99, description: 'Our platform provides a seamless experience for individuals seeking medications by partnering with major insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved medications at competitive prices, offering convenience and accessibility. Our licensed pharmacists are readily available to address any concerns, providing information on pricing, allergies, side-effects, and more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications, fostering a trusted space where users can confidently shop for their health needs. ', image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },
        { id: 4, name: 'Product 4', price: 49.99, description: 'Our platform provides a seamless experience for individuals seeking medications by partnering with major insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved medications at competitive prices, offering convenience and accessibility. Our licensed pharmacists are readily available to address any concerns, providing information on pricing, allergies, side-effects, and more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications, fostering a trusted space where users can confidently shop for their health needs. ', image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },

      ],


    };
  },

  mounted() {
    const product_id = this.$route.params.id

    this.product = this.products.find(product => product.id == product_id)

    console.log(product_id)
    console.log(this.products)
    console.log(this.product)
  },


  methods: {
    addToCart() {
      // Implement logic to add the product to the shopping cart
      // You may want to use Vuex for state management
      this.$store.commit('addToCart', this.product);
      console.log(`Added ${this.product.name} to the cart`)
    },
  },
};
</script>


