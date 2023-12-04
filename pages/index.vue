<template>
  <div>


    <section>
      <div class="">

        <v-carousel class="lg:tw-block tw-hidden" v-model="model" cycle :show-arrows="false" hide-delimiter-background>
          <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
        </v-carousel>

        <v-carousel class="lg:tw-hidden tw-black" v-model="model" cycle :show-arrows="false" hide-delimiter-background>
          <v-carousel-item class="tw-w-full tw-h-full" v-for="(photo, i) in photos" :key="i" cover>
            <img class="tw-w-full tw-h-full" :src="photo.src" alt="">
          </v-carousel-item>
        </v-carousel>


      </div>

    </section>


    <section
      class="tw-container tw-py-4 lg:tw-px-4 tw-mb-8 lg:tw-mx-12 tw-mx-8 lg:tw-px-desktop lg:tw-mx-desktop tw-bg-[#fff] tw-rounded-2xl tw-justify-center">
      <div class="tw-mt-8 tw-container tw-flex tw-flex-col tw-flex-col-reverse lg:tw-flex-row lg:tw-gap-12">

        <div class="tw-basis-1/2">
          <p class="tw-font-extrabold tw-text-black tw-text-4xl tw-font-extrabold lg:tw-text-left">
            A new kind of pharmacy for the digital age
          </p>

          <p class="tw-text-justify tw-mt-4 tw-text-md">
            Our platform provides a seamless experience for individuals seeking medications by partnering with major
            insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved
            medications at competitive prices, offering convenience and accessibility.
          </p>

          <p class="tw-text-justify tw-mt-2 tw-text-md">
            Our licensed pharmacists are
            readily available to address any concerns, providing information on pricing, allergies, side-effects, and
            more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications,
            fostering a trusted space where users can confidently shop for their health needs.
          </p>


        </div>


        <div class="tw-flex tw-items-center tw-justify-evenly tw-basis-1/2">

          <img class="tw-rounded-lg tw-shadow-2xl" src="../assets/pharmacy.png">

        </div>

      </div>
    </section>

    <section class="tw-mx-4 tw-p-6">
      <div class="">
        <h1 class="tw-text-black lg:tw-px-24 tw-text-4xl tw-font-extrabold tw-pb-4">
          Best Selling Products
        </h1>


        <div class="tw-border-2 tw-border-black tw-p-12">
          <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" md="8" lg="3">
              <ProductCard :product="product" />
            </v-col>
          </v-row>
        </div>


      </div>
    </section>


    <section class="tw-mx-4 tw-p-6">
      <div class="">
        <h1 class="tw-text-black lg:tw-px-24 tw-text-4xl tw-font-extrabold tw-pb-4">
          Shop by Categories
        </h1>


        <div class="tw-border-2 tw-border-black tw-p-12">
          <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" md="8" lg="3">
              <ProductCard :product="product" />
            </v-col>
          </v-row>
        </div>


      </div>
    </section>


    <section class="tw-p-6 tw-py-12 tw-pb-12 tw-bg-gray-200">
      <div class=" tw-p-4  tw-text-center">
        <h1 class="tw-text-black tw-text-center tw-text-4xl tw-font-extrabold">
          Why choose us?
        </h1>

        <!-- <p class="tw-text-sm tw-text-center tw-text-gray-600 tw-font-medium tw-pt-3">
          Experience the forefront of education through e-tuto—an innovative platform seamlessly blending dynamic
          interactivity with expert guidance
        </p> -->
      </div>
      <v-row>
        <v-col class="" cols="12" md="4" lg="4">

          <div class="">
            <div class="tw-flex tw-flex-col">

              <div
                class="tw-flex lg:tw-flex-row tw-flex-col tw-gap-4 tw-shadow-gray-400 tw-shadow-xl tw-p-6 tw-rounded-lg tw-bg-gray-100">
                <svg width="75" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.459 31.46" xml:space="preserve">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        d="M8.946,4.912l-0.364-0.25l17.209-1.868L25.77,2.601L8.335,4.493L8.034,4.285l17.409-1.903l-0.021-0.193L7.789,4.118 l-0.334-0.23l17.679-1.956l-0.021-0.193L7.208,3.719L6.835,3.462l17.907-1.991l-0.021-0.192L6.592,3.294L6.187,3.016l0.579-0.059 L25.19,0.953L24.514,0L4.368,2.135v0.292v0.778v25.659l3.649,2.575v0.021l19.072-1.935l0.004-26.453L8.946,4.912z M23.981,14.762 l-11.365,1.236v-6.4l11.365-1.237V14.762z">
                      </path>
                    </g>
                  </g>
                </svg>
                <div class="">
                  <h1 class="tw-text-black tw-text-xl tw-font-extrabold tw-text-justify">
                    Leadership Excellence
                  </h1>
                  <span class="tw-text-sm tw-text-gray-600 tw-font-medium tw-text-justify tw-pt-3">
                    Choose e-tuto for Business Leadership and unlock a transformative learning journey.
                  </span>
                </div>

              </div>

            </div>
          </div>


        </v-col>
        <v-col class="" cols="12" md="4" lg="4">

          <div class="">
            <div class="tw-flex tw-flex-col">

              <div
                class="tw-flex lg:tw-flex-row tw-flex-col tw-gap-4 tw-shadow-gray-400 tw-shadow-xl tw-p-6 tw-rounded-lg tw-bg-gray-100">
                <svg width="75" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.459 31.46" xml:space="preserve">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        d="M8.946,4.912l-0.364-0.25l17.209-1.868L25.77,2.601L8.335,4.493L8.034,4.285l17.409-1.903l-0.021-0.193L7.789,4.118 l-0.334-0.23l17.679-1.956l-0.021-0.193L7.208,3.719L6.835,3.462l17.907-1.991l-0.021-0.192L6.592,3.294L6.187,3.016l0.579-0.059 L25.19,0.953L24.514,0L4.368,2.135v0.292v0.778v25.659l3.649,2.575v0.021l19.072-1.935l0.004-26.453L8.946,4.912z M23.981,14.762 l-11.365,1.236v-6.4l11.365-1.237V14.762z">
                      </path>
                    </g>
                  </g>
                </svg>
                <div class="">
                  <h1 class="tw-text-black tw-text-xl tw-font-extrabold tw-text-justify">
                    Leadership Excellence
                  </h1>
                  <span class="tw-text-sm tw-text-gray-600 tw-font-medium tw-text-justify tw-pt-3">
                    Choose e-tuto for Business Leadership and unlock a transformative learning journey.
                  </span>
                </div>

              </div>

            </div>
          </div>


        </v-col>
        <v-col class="" cols="12" md="4" lg="4">

          <div
            class="tw-flex lg:tw-flex-row tw-flex-col tw-gap-4 tw-shadow-gray-400 tw-shadow-xl tw-p-6 tw-rounded-lg tw-bg-gray-100">
            <svg width="75" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.771 31.771" xml:space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M31.771,20.319c0-0.474-0.279-0.87-0.676-1.066V11.9c0.09-0.034,0.146-0.119,0.145-0.214c0-0.095-0.062-0.179-0.149-0.21 L15.92,6.125c-0.194-0.069-0.406-0.069-0.601,0L0.15,11.477c-0.089,0.031-0.149,0.115-0.15,0.21s0.056,0.18,0.144,0.214 l15.148,5.896c0.211,0.081,0.444,0.081,0.655,0l14.102-5.492v6.947c-0.396,0.195-0.675,0.594-0.675,1.065 c0,0.492,0.3,0.919,0.729,1.102c-0.429,0.847-0.729,2.585-0.729,3.081c0,0.661,0.537,1.197,1.198,1.197 c0.66,0,1.197-0.536,1.197-1.197c0-0.496-0.301-2.234-0.729-3.081C31.47,21.238,31.771,20.811,31.771,20.319z">
                    </path>
                    <path
                      d="M4.888,14.87c0.001,1.696,0.002,3.692,0.002,4.009c0,3.158,4.753,5.729,10.73,5.89c5.976-0.161,10.729-2.729,10.729-5.89 c0-0.315,0-2.312,0.002-4.009l-10.406,4.051c-0.211,0.082-0.444,0.082-0.655,0L4.888,14.87z">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
            <div class="">
              <h1 class="tw-text-black tw-text-xl tw-font-extrabold tw-text-justify">
                Leadership Excellence
              </h1>
              <span class="tw-text-sm tw-text-gray-600 tw-font-medium tw-text-justify tw-pt-3">
                Choose e-tuto for Business Leadership and unlock a transformative learning journey.
              </span>
            </div>

          </div>

        </v-col>



      </v-row>




    </section>

  </div>
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      initialized: false,
      posts: [],
      selectedItem1: null,
      selectedItem2: null,
      selectedItem3: null,
      items1: ['Option 1', 'Option 2', 'Option 3'],
      items2: ['Choice A', 'Choice B', 'Choice C'],
      items3: ['Apple', 'Banana', 'Orange'],

      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      showHoverText: false,
      showHoverText2: false,
      showHoverText3: false,
      showHoverText3: false,
      showHoverText4: false,
      showHoverText5: false,
      items: [{
        src: 'https://imagedash.ova-africa.com/_nuxt/img/Header2.ffb6709.png',
      },
      {
        src: 'https://imagedash.ova-africa.com/_nuxt/img/Header4.68f1a8a.png',
      },
      {
        src: 'https://imagedash.ova-africa.com/_nuxt/img/Header1.56db328.png',
      },
      {
        src: 'https://imagedash.ova-africa.com/_nuxt/img/Header3.e3c1fb0.png',
      },


      ],

      products: [
        { id: 1, name: 'Product 1', price: 19.99, image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },
        { id: 2, name: 'Product 2', price: 29.99, image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },
        // Add more products as needed
        { id: 3, name: 'Product 2', price: 29.99, image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },
        { id: 4, name: 'Product 2', price: 29.99, image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },


      ],
      selectedProduct: null,

    };
  },
  mounted() {
    this.initializeAOS();

  },


  destroyed() {
    AOS.refresh(); // Manually refresh AOS when the component is destroyed
  },

  methods: {
    search() {
      // Perform search logic here
      console.log('Search clicked')
    },
    initializeAOS() {
      if (!this.initialized) {
        AOS.init({
          once: true,
          duration: 2000
        });
        this.initialized = true;
      }
    },



  },
  head() {
    return {
      title: 'Welcome to E-pharma Platform'
    };
  }
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
