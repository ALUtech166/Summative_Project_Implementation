<template>
  <div>

    <section class="tw-h-screen lg:tw-relative">

      <div
        class="bg-image lg:tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-opacity-90 tw-px-8 tw-py-6 tw-text-center tw-absolute">

        <!-- component -->
        <div class="tw-flex tw-flex-col tw-p-6 tw-py-8 lg:tw-m-h-screen">

          <h1 class="text-color tw-font-bold lg:tw-text-6xl tw-mt-2 tw-mb-4">
            Welcome to E-pharma Platform
          </h1>

          <p class="tw-text-gray-900 tw-font-medium lg:tw-text-xl tw-mt-2 tw-mb-4 lg:tw-mx-24 lg:tw-px-24">
            E-Pharmacy is a product that handles the necessary controls at the pharmacy level in the pharmacy dispensing
            process.
          </p>

          <div
            class="tw-bg-white tw-shadow-2xl tw-items-center tw-justify-between tw-w-full tw-flex tw-rounded-full tw-shadow-gray-900 tw-p-3 tw-mb-4 tw-sticky"
            style="top: 5px">

            <v-text-field :counter="10"
              label="What are you looking for?"></v-text-field>
            <v-autocomplete v-model="selectedItem2" :items="items2" label="Country Production" />
            <!-- 
            <v-autocomplete v-model="selectedItem3" :items="items3" label="Item 3" /> -->
            <div class="bg-color tw-p-4 hover:tw-bg-blue-400 tw-cursor-pointer tw-mx-2 tw-rounded-full">

              <svg class="tw-w-6 tw-h-6 tw-text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd" />
              </svg>

            </div>

          </div>



        </div>

      </div>
    </section>


    <section class="tw-mx-8 tw-p-6">
      <div class=" tw-p-4  tw-text-center">
        <h1 class="text-color tw-text-center tw-text-4xl tw-font-extrabold">
          How it works?
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
                  <h1 class="text-color tw-text-xl tw-font-extrabold tw-text-justify">
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
                  <h1 class="text-color tw-text-xl tw-font-extrabold tw-text-justify">
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
              <h1 class="text-color tw-text-xl tw-font-extrabold tw-text-justify">
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


    <section class="tw-mx-4 tw-p-6">
      <div class=" tw-p-4">
        <h1 class="text-color tw-text-center tw-text-4xl tw-font-extrabold">
          Explore Our Products
        </h1>


        <div class="lg:tw-pb-8 tw-pt-8 tw-grid lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-4 tw-w-full tw-h-full">

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
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <button
                class="tw-mx-4 tw-rounded tw-group tw-bg-transparent tw-relative tw-w-16 tw-h-10 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-48 tw-overflow-hidden tw-text-lg tw-shadow-2xl-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-full tw-bg-transparent tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-pt-2 tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                  <svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>
                </span>
              </button>
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
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <button
                class="tw-mx-4 tw-rounded tw-group tw-bg-transparent tw-relative tw-w-16 tw-h-10 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-48 tw-overflow-hidden tw-text-lg tw-shadow-2xl-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-full tw-bg-transparent tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-pt-2 tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                  <svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>
                </span>
              </button>
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
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <button
                class="tw-mx-4 tw-rounded tw-group tw-bg-transparent tw-relative tw-w-16 tw-h-10 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-48 tw-overflow-hidden tw-text-lg tw-shadow-2xl-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-full tw-bg-transparent tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-pt-2 tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                  <svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>
                </span>
              </button>
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
                Paracetamole
                500mg
              </span>
              <span class="tw-px-3 text-color tw-text-md tw-font-extrabold tw-text-left">
                RWF 5000
              </span>
              <button
                class="tw-mx-4 tw-rounded tw-group tw-bg-transparent tw-relative tw-w-16 tw-h-10 tw-mt-2 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-48 tw-overflow-hidden tw-text-lg tw-shadow-2xl-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-full tw-bg-transparent tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-pt-2 tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                  <svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </svg>
                </span>
              </button>
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
  border: 1px solid #004225;
  background-color: white;
}



.bg-color {
  background-color: #004225;
  color: white;
}

.bg-color-1 {
  background-color: #004225;
}

.bg-image {
  background-image: url('../assets/pharma.jpg');
  background-size: cover;
  height: 100vh;
  position: relative;
}


.text-color {
  color: #004225;
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
}</style>
