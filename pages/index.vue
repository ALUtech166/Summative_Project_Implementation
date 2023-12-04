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


        <div
          class="tw-border-2 tw-border-black tw-px-4 tw-pt-4 lg:tw-pb-8 tw-pt-8 tw-grid lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-4 tw-w-full tw-h-full">

          <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
            <div class="tw-relative tw-w-full tw-h-72">
              <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                src="https://img.freepik.com/premium-photo/white-pills-big-white-background_978921-5807.jpg?w=740"
                alt="Banner Image">
              <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-64">
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
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button
                  class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                    Add to cart

                  </span>
                </button>

                <button
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


          <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
            <div class="tw-relative tw-w-full tw-h-72">
              <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?w=740&t=st=1698871617~exp=1698872217~hmac=36141ce2fef4294583a165d77733c4a2f3cb622651e1614721af955d7a746c6b"
                alt="Banner Image">
              <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-64">
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
                ⭐⭐⭐⭐
              </span>
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button
                  class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                    Add to cart

                  </span>
                </button>

                <button
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

          <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
            <div class="tw-relative tw-w-full tw-h-72">
              <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                src="https://img.freepik.com/free-photo/depressed-man-sitting-top-pill-box_1401-29.jpg?w=360&t=st=1698871835~exp=1698872435~hmac=4e8f3c4029655a371af27c4d19cc4852d409db6d26e465916670f56cbed18934"
                alt="Banner Image">
              <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-64">
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
                  <span class="tw-text-md tw-text-white">4%</span>
                </div>
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-mt-2">
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                ⭐⭐⭐⭐⭐
              </span>
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button
                  class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                    Add to cart

                  </span>
                </button>

                <button
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


          <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
            <div class="tw-relative tw-w-full tw-h-72">
              <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                src="https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40"
                alt="Banner Image">
              <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-64">
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
                  <span class="tw-text-md tw-text-white">10%</span>
                </div>
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-mt-2">
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                ⭐⭐⭐⭐⭐
              </span>
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button
                  class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                    Add to cart

                  </span>
                </button>

                <button
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




        </div>


      </div>
    </section>


    <section class="tw-mx-4 tw-p-6">
      <div class="">
        <h1 class="tw-text-black lg:tw-px-24 tw-text-4xl tw-font-extrabold tw-pb-4">
          Shop by Categories
        </h1>


        <div
          class="tw-border-2 tw-border-black tw-px-4 tw-pt-4 lg:tw-pb-8 tw-pt-8 tw-grid lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-4 tw-w-full tw-h-full">

          <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
            <div class="tw-relative tw-w-full tw-h-72">
              <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                src="https://img.freepik.com/premium-photo/white-pills-big-white-background_978921-5807.jpg?w=740"
                alt="Banner Image">
              <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-64">
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
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button
                  class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                    Add to cart

                  </span>
                </button>

                <button
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


          <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
            <div class="tw-relative tw-w-full tw-h-72">
              <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?w=740&t=st=1698871617~exp=1698872217~hmac=36141ce2fef4294583a165d77733c4a2f3cb622651e1614721af955d7a746c6b"
                alt="Banner Image">
              <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-64">
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
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button
                  class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                    Add to cart

                  </span>
                </button>

                <button
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

          <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
            <div class="tw-relative tw-w-full tw-h-72">
              <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                src="https://img.freepik.com/free-photo/depressed-man-sitting-top-pill-box_1401-29.jpg?w=360&t=st=1698871835~exp=1698872435~hmac=4e8f3c4029655a371af27c4d19cc4852d409db6d26e465916670f56cbed18934"
                alt="Banner Image">
              <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-64">
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
                  <span class="tw-text-md tw-text-white">4%</span>
                </div>
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-mt-2">
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                ⭐⭐⭐⭐⭐
              </span>
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button
                  class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                    Add to cart

                  </span>
                </button>

                <button
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


          <div class="tw-h-full tw-cursor-pointer tw-w-full tw-shadow-xl tw-mb-4 tw-rounded">
            <div class="tw-relative tw-w-full tw-h-72">
              <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                src="https://img.freepik.com/free-photo/white-pill-bottle-orange-pills-against-white-background_181624-839.jpg?w=740&t=st=1698871967~exp=1698872567~hmac=f30fe6a5d9d9727572221b21a319e2f1be6630db57215d90ab553696a9d2fd40"
                alt="Banner Image">
              <div
                class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-start tw-bg-gray-200 tw-bg-opacity-30">
                <div class="tw-p-2 tw-text-right tw-mx-64">
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
                  <span class="tw-text-md tw-text-white">10%</span>
                </div>
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-mt-2">
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                ⭐⭐⭐⭐⭐
              </span>
              <span class="tw-px-3 tw-text-xl tw-font-extrabold tw-text-left">
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-px-2">
                <button
                  class="tw-group bg-hover tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-duration-300 tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                    Add to cart

                  </span>
                </button>

                <button
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




        </div>


      </div>
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
