<template>
  <div>


    <section>
      <div class="">

        <v-carousel class="lg:tw-block" v-model="model" cycle :show-arrows="false" hide-delimiter-background>
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
      class="lg:tw-container tw-py-4 lg:tw-px-4 tw-mb-8 lg:tw-mx-12 tw-mx-8 lg:tw-px-desktop lg:tw-mx-desktop tw-bg-[#fff] tw-rounded-2xl tw-justify-center">
      <div class="tw-mt-8 tw-container tw-flex tw-flex-col tw-flex-col-reverse lg:tw-flex-row lg:tw-gap-12">

        <div class="tw-basis-1/2 tw-mt-12">
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


        <div class="tw-flex tw-flex-col tw-items-center tw-basis-1/2">
          <img class="" src="../assets/images/pharma-girl.svg" height="400px">

          <img class="tw-transform tw--translate-y-40" src="../assets/images/vector.svg" height="100px">


        </div>

      </div>
    </section>

    <section class="tw-mx-4 tw-p-6">
      <div class="">
        <h1 class="tw-text-black lg:tw-px-24 tw-text-4xl tw-font-extrabold tw-pb-4">
          Best Selling Products
        </h1>


        <div class="tw-border-2 tw-border-black lg:tw-p-12 tw-p-6">
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


        <div class="tw-border-2 tw-border-black lg:tw-p-12 tw-p-6">
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
      </div>
      <v-row>
        <v-col class="" cols="12" md="4" lg="4">

          <div class="">
            <div class="tw-flex tw-flex-col">

              <div
                class="tw-flex tw-items-center lg:tw-flex-row tw-flex-col tw-gap-4 tw-shadow-gray-400 tw-shadow-xl tw-p-6 tw-rounded-lg tw-bg-white">
                <img class="" src="../assets/images/Image.svg">

                <div class="">
                  <h1 class="tw-text-black tw-text-xl tw-font-extrabold tw-text-justify">
                    Quality Products
                  </h1>
                  <span class="tw-text-sm tw-text-gray-600 tw-font-medium tw-text-justify tw-pt-3">
                    Discover excellence in Health products
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
                class="tw-flex tw-items-center lg:tw-flex-row tw-flex-col tw-gap-4 tw-shadow-gray-400 tw-shadow-xl tw-p-6 tw-rounded-lg tw-bg-white">
                <img class="" src="../assets/images/img1.svg">

                <div class="">
                  <h1 class="tw-text-black tw-text-xl tw-font-extrabold tw-text-justify">
                    Quality Providers
                  </h1>
                  <span class="tw-text-sm tw-text-gray-600 tw-font-medium tw-text-justify tw-pt-3">
                    Experience excellence with our health products providers
                  </span>
                </div>

              </div>

            </div>
          </div>


        </v-col>
        <v-col class="" cols="12" md="4" lg="4">

          <div
            class="tw-flex tw-items-center lg:tw-flex-row tw-flex-col tw-gap-4 tw-shadow-gray-400 tw-shadow-xl tw-p-6 tw-rounded-lg tw-bg-white">
            <img class="" src="../assets/images/Image2.svg">

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
//import AOS from 'aos';
//import 'aos/dist/aos.css';

export default {
  data() {
    return {
      initialized: false,
      posts: [],


      showHoverText: false,
      showHoverText2: false,
      showHoverText3: false,
      showHoverText3: false,
      showHoverText4: false,
      showHoverText5: false,
      items: [{
        src: 'https://img.freepik.com/free-photo/medicine-bottle-spilling-colorful-pills-depicting-addiction-risks-generative-ai_188544-12529.jpg?t=st=1701811380~exp=1701814980~hmac=8b04bbbec62c4da51dc5b5f6564222a53e0bc1fe8443df4fc2b8270ae54e9f0f&w=740',
      },
      {
        src: 'https://img.freepik.com/premium-photo/blurred-drugstore-background-defocus_841543-8534.jpg?w=826',
      },
      {
        src: 'https://img.freepik.com/free-photo/medicine-container-shopping-container-with-drugstore-shelves-out-focus_91128-3488.jpg?t=st=1701820907~exp=1701824507~hmac=c39b7974a70fa2a98114d99c17e2270f88fe11f3887606a397fc298e2bd23ac6&w=826',
      },
      {
        src: 'https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?w=740&t=st=1701821039~exp=1701821639~hmac=b22cbc126ed8980aca2cb08583cd71c8dd8e67d7ee4917fb91ebb7c00ae5cc85',
      },

      ],

      products: [
        { id: 1, name: 'Paracetamol', price: 19.99, description: 'Our platform provides a seamless experience for individuals seeking medications by partnering with major insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved medications at competitive prices, offering convenience and accessibility. Our licensed pharmacists are readily available to address any concerns, providing information on pricing, allergies, side-effects, and more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications, fostering a trusted space where users can confidently shop for their health needs. ', image: 'https://img.freepik.com/free-photo/pack-pills_144627-27376.jpg?w=360&t=st=1701955085~exp=1701955685~hmac=16f195b4e6b28dbcc8c12a4637c59496e81067855c883392e5bb5d3db5bb949a' },
        { id: 2, name: 'Pain Killer', price: 29.99, description: 'Our platform provides a seamless experience for individuals seeking medications by partnering with major insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved medications at competitive prices, offering convenience and accessibility. Our licensed pharmacists are readily available to address any concerns, providing information on pricing, allergies, side-effects, and more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications, fostering a trusted space where users can confidently shop for their health needs. ', image: 'https://img.freepik.com/free-photo/depressed-man-sitting-top-pill-box_1401-29.jpg?w=360&t=st=1701955220~exp=1701955820~hmac=06490318c497811c30c989e89b8bb998e3955e841fc786b9a9d790a468ac32ce' },
        // Add more products as needed
        { id: 3, name: 'Roncold', price: 39.99, description: 'Our platform provides a seamless experience for individuals seeking medications by partnering with major insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved medications at competitive prices, offering convenience and accessibility. Our licensed pharmacists are readily available to address any concerns, providing information on pricing, allergies, side-effects, and more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications, fostering a trusted space where users can confidently shop for their health needs. ', image: 'https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40' },
        { id: 4, name: 'Stressed Medicine', price: 49.99, description: 'Our platform provides a seamless experience for individuals seeking medications by partnering with major insurance providers to ensure coverage and cost-effectiveness. Users can shop for a wide range of approved medications at competitive prices, offering convenience and accessibility. Our licensed pharmacists are readily available to address any concerns, providing information on pricing, allergies, side-effects, and more. As a comprehensive healthcare platform, we aim to simplify the process of acquiring quality medications, fostering a trusted space where users can confidently shop for their health needs. ', image: 'https://img.freepik.com/free-photo/doctor-talking-with-stressed-patient_1401-26.jpg?w=740&t=st=1701955312~exp=1701955912~hmac=c8d37c4cdf6b495661e1d95f5056d667ea6a2fedb0948e9ab1cfab639151d0ac' },

      ],


      selectedProduct: null,

    };
  },
  mounted() {


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
