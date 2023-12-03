<template>
  <div class="font-sans tw-flex tw-flex-col tw-opacity-90">


    <header class="lg:tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bg-transparent tw-z-50">
      <nav
        class="tw-bg-transparent tw-mx-auto tw-flex tw-flex-wrap tw-gap-4 tw-px-8 lg:tw-justify-around tw-justify-between tw-items-center tw-py-6">
        <div>
          <nuxt-link to="/">
            <h1 class="tw-text-4xl tw-font-extrabold text-color">
              e-pharma
            </h1>
          </nuxt-link>

        </div>
        <div class="tw-block lg:tw-hidden">
          <button @click="toggleMenu"
            class="tw-flex tw-items-center tw-px-3 tw-py-2 border tw-rounded tw-border-gray-500 hover:tw-border-gray-600">
            <svg class="tw-current-color tw-h-3 tw-w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
            </svg>
          </button>
        </div>
        <ul
          class="tw-tracking-wide tw-items-center tw-font-medium tw-w-full tw-block tw-flex-grow lg:tw-space-x-8 tw-space-y-6 lg:tw-space-y-0 lg:tw-flex lg:tw-flex-initial lg:tw-w-auto tw-items-center tw-mt-8 lg:tw-mt-0"
          :class="{ 'tw-block': isOpen, 'tw-hidden': !isOpen }">
          <li class="tw-mb-6 lg:tw-mb-0">
            <!-- <search-input /> -->
          </li>

          <li @click="closeMenu">
            <nuxt-link to="/" :class="$route.path === '/' ? 'active' : ''"
              class="text-black font-medium	hover:text-blue-800 text-md hover:no-underline">Home</nuxt-link>
          </li>


          <li @click="closeMenu">
            <nuxt-link to="/" :class="$route.path === '/' ? 'active' : ''"
              class="text-black font-medium	hover:text-blue-800 text-md hover:no-underline">Services</nuxt-link>
          </li>


          <li @click="closeMenu">
            <nuxt-link to="/" :class="$route.path === '/' ? 'active' : ''"
              class="text-black font-medium	hover:text-blue-800 text-md hover:no-underline">Blog</nuxt-link>
          </li>


          <li @click="closeMenu">
            <nuxt-link to="/contact" :class="$route.path === '/contact' ? 'active' : ''"
              class="text-black font-medium	hover:text-blue-800 text-md hover:no-underline">Contact Us</nuxt-link>
          </li>


         


        </ul>

        <div class="tw-flex tw-gap-4">

        <svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        
        </div>

      </nav>
    </header>



    <div class="tw-flex-grow">
      <Nuxt />
    </div>


    <footer class="tw-text-white tw-shadow-2xl tw-shadow-gray-900">

      <div class="tw-relative tw-w-full tw-h-full tw-p-12 tw-pb-4">

        <v-row class="">

          <v-col class="tw-text-left tw-mt-8" cols="12" md="3" lg="3">
            <nuxt-link to="/">
              <h1 class="tw-text-4xl tw-font-extrabold tw-mb-4 tw-text-color">
                e-pharma
              </h1>
            </nuxt-link>
            <p class="tw-text-white tw-text-sm">
              Every image featured on this website has been designed using Canvas.
            </p>
            <form class="tw-mt-2 tw-bg-transparent">

              <div class="tw-w-full tw-md:w-1/2">
                <label class="tw-block tw-font-extrabold tw-mb-1" for="email">
                  Subcribe Now
                </label>

                <input type="email" name="email" id="email" placeholder="email@example.com"
                  class="tw-block  tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full  tw-text-black tw-shadow-xl tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                  required>
              </div>

              <button
                class="tw-group tw-bg-white tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-2 tw-mb-4 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-full tw-bg-black tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                  Subscribe
                </span>
              </button>
            </form>

          </v-col>


          <v-col class="tw-mt-8" cols="12" md="3" lg="3">
            <h3 class="tw-text-white tw-font-extrabold tw-mb-4">Useful Links</h3>
            <ul class="tw-list-disc tw-list-inside tw-text-gray-400 tw-leading-6">
              <li>
                <a href="/privacy" class="tw-text-white tw-text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="/contact" class="tw-text-white tw-text-sm">Contact us</a>
              </li>

              <li>
                <a href="/contact" class="tw-text-white tw-text-sm">Contact us</a>
              </li>
              <li>
                <a href="/contact" class="tw-text-white tw-text-sm">Contact us</a>
              </li>


            </ul>
          </v-col>
          <v-col class="tw-mt-8" cols="12" md="3" lg="3">
            <h3 class="tw-text-white tw-font-extrabold tw-mb-4">Our Services</h3>
            <ul class="tw-list-disc tw-list-inside tw-text-gray-400 tw-leading-6">
              <li>
                <a href="/privacy" class="tw-text-white tw-text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="/contact" class="tw-text-white tw-text-sm">Contact us</a>
              </li>

              <li>
                <a href="/privacy" class="tw-text-white tw-text-sm">Privacy Policy</a>
              </li>

              <li>
                <a href="/privacy" class="tw-text-white tw-text-sm">Privacy Policy</a>
              </li>


            </ul>
          </v-col>
          <v-col class="tw-mt-8" cols="12" md="3" lg="3">
            <h3 class="tw-text-white tw-font-extrabold tw-mb-4">Connect with Us</h3>
            <p class="tw-text-white tw-text-md">
              <a href="mailto:info@dotterra.net"
                class="tw-flex lg:tw-flex-row tw-gap-4 tw-items-center tw-text-white tw-mb-1 tw-text-sm">
                <strong><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-label="Gmail" role="img"
                    viewBox="0 0 512 512" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
                      <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"></path>
                      <path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"></path>
                      <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"></path>
                      <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"></path>
                      <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"></path>
                    </g>
                  </svg></strong>
                info@e-pharma.com
              </a>
              <a href="tel:+250-785-658-174"
                class="tw-flex lg:tw-flex-row tw-gap-4 tw-items-center tw-text-white tw-mb-8 tw-text-sm"><strong><svg
                    width="15" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.654 473.654" xml:space="preserve"
                    fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <circle style="fill:#49A0AE;" cx="236.827" cy="236.827" r="236.827"></circle>
                      <path style="fill:#A2D4DE;"
                        d="M363.64,292.416c-18.324-17.625-36.876-28.712-59.081-12.285c-22.336,16.529-24.7,34.875-24.7,34.875 s2.098,35.167-82.671-41.068c-76.287-84.806-41.098-82.708-41.098-82.708s18.339-2.363,34.868-24.7 c16.428-22.202,4.835-40.275-12.284-59.085c-54.777-60.185-87.981,8.208-87.981,8.208c-38.783,65.274,25.863,142.852,75.734,189.065 c46.225,49.871,123.765,114.457,189.009,75.681C355.432,380.401,424.685,351.153,363.64,292.416z">
                      </path>
                      <path style="fill:#404040;"
                        d="M121.035,85.419c-0.045,0.015-0.067,0.052-0.108,0.071c0.49-0.206,0.995-0.389,1.488-0.572 C121.955,85.083,121.488,85.236,121.035,85.419z">
                      </path>
                      <g>
                        <path style="fill:#7DCDCC;"
                          d="M301.339,242.07L301.339,242.07c-3.493,0-6.331-2.835-6.331-6.335 c0.007-20.257-5.647-35.848-16.798-46.341c-17.785-16.731-44.176-15.325-44.437-15.314c-3.508,0.187-6.492-2.431-6.713-5.916 c-0.221-3.489,2.416-6.488,5.901-6.72c1.301-0.067,31.97-1.84,53.831,18.634c13.855,12.98,20.882,31.708,20.882,55.652 C307.67,239.235,304.835,242.07,301.339,242.07z">
                        </path>
                        <path style="fill:#7DCDCC;"
                          d="M276.848,242.276L276.848,242.276c-2.621,0-4.749-2.124-4.749-4.749 c0-13.332-3.702-23.585-11.013-30.466c-11.671-10.987-29.034-10.078-29.21-10.059c-2.629,0.194-4.865-1.829-5.033-4.443 c-0.161-2.61,1.81-4.865,4.428-5.037c0.868-0.052,21.518-1.242,36.248,12.554c9.341,8.751,14.076,21.353,14.076,37.452 C281.597,240.152,279.47,242.276,276.848,242.276z">
                        </path>
                        <path style="fill:#7DCDCC;"
                          d="M331.629,244.561L331.629,244.561c-4.368,0-7.909-3.541-7.909-7.913 c0-30.014-8.429-53.121-25.044-68.681c-26.536-24.853-65.297-22.628-65.689-22.598c-4.39,0.209-8.13-3.022-8.422-7.382 c-0.284-4.36,3.025-8.13,7.386-8.418c1.87-0.112,46.057-2.655,77.551,26.839c19.939,18.675,30.047,45.679,30.047,80.24 C339.546,241.019,336.001,244.561,331.629,244.561z">
                        </path>
                        <path style="fill:#7DCDCC;"
                          d="M366.175,253.94L366.175,253.94c-5.25,0-9.495-4.252-9.495-9.495 c0-43.338-12.213-76.747-36.308-99.319c-38.424-35.99-94.518-32.744-95.09-32.718c-5.265,0.393-9.757-3.62-10.093-8.855 c-0.344-5.235,3.616-9.753,8.852-10.097c2.621-0.187,64.945-3.751,109.315,37.807c28.077,26.3,42.317,64.384,42.31,113.182 C375.67,249.688,371.418,253.94,366.175,253.94z">
                        </path>
                      </g>
                    </g>
                  </svg></strong>+250 785 658 174</a>
            </p>
            <div class="tw-mb-4">
              <ul class="tw-flex tw-items-center tw-gap-4">
                <li>
                  <a href="https://www.linkedin.com/company/sheba-plastic/" target="_blank" class="tw-text-white">
                    <svg class="tw-bg-white tw-rounded-full tw-p-1" width="20" height="20" viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg" fill="none">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill="#0A66C2"
                          d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z">
                        </path>
                      </g>
                    </svg> </a>
                </li>

                <li>
                  <a href="https://twitter.com/ShebaPlastic" target="_blank" class="tw-text-white">
                    <svg class="tw-bg-white tw-rounded-full tw-p-1" width="20" height="20" viewBox="0 -4 48 48"
                      version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#000000">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>Twitter-color</title>
                        <desc>Created with Sketch.</desc>
                        <defs> </defs>
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Color-" transform="translate(-300.000000, -164.000000)" fill="#00AAEC">
                            <path
                              d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                              id="Twitter"> </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/sheba_plastic/" target="_blank" class="tw-text-white">
                    <svg class="tw-bg-white tw-rounded-full tw-p-1" width="20" height="20" viewBox="0 0 32 32" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect>
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect>
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect>
                        <path
                          d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                          fill="white"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                          fill="white"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                          fill="white"></path>
                        <defs>
                          <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                            <stop stop-color="#B13589"></stop>
                            <stop offset="0.79309" stop-color="#C62F94"></stop>
                            <stop offset="1" stop-color="#8A3AC8"></stop>
                          </radialGradient>
                          <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                            <stop stop-color="#E0E8B7"></stop>
                            <stop offset="0.444662" stop-color="#FB8A2E"></stop>
                            <stop offset="0.71474" stop-color="#E2425C"></stop>
                            <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop>
                          </radialGradient>
                          <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                            <stop offset="0.156701" stop-color="#406ADC"></stop>
                            <stop offset="0.467799" stop-color="#6A45BE"></stop>
                            <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop>
                          </radialGradient>
                        </defs>
                      </g>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" class="tw-text-white">
                    <svg class="tw-bg-white tw-rounded-full tw-p-1" width="20" height="20" viewBox="0 0 100 100"
                      version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <style type="text/css">
                          .st0 {
                            fill: #FFFFFF;
                          }

                          .st1 {
                            fill: #F5BB41;
                          }

                          .st2 {
                            fill: #2167D1;
                          }

                          .st3 {
                            fill: #3D84F3;
                          }

                          .st4 {
                            fill: #4CA853;
                          }

                          .st5 {
                            fill: #398039;
                          }

                          .st6 {
                            fill: #D74F3F;
                          }

                          .st7 {
                            fill: #D43C89;
                          }

                          .st8 {
                            fill: #B2005F;
                          }

                          .st9 {
                            fill: none;
                            stroke: #000000;
                            stroke-width: 3;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                          }

                          .st10 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: none;
                            stroke: #000000;
                            stroke-width: 3;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                          }

                          .st11 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: none;
                            stroke: #040404;
                            stroke-width: 3;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                          }

                          .st12 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                          }

                          .st13 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #040404;
                          }

                          .st14 {
                            fill: url(#SVGID_1_);
                          }

                          .st15 {
                            fill: url(#SVGID_2_);
                          }

                          .st16 {
                            fill: url(#SVGID_3_);
                          }

                          .st17 {
                            fill: url(#SVGID_4_);
                          }

                          .st18 {
                            fill: url(#SVGID_5_);
                          }

                          .st19 {
                            fill: url(#SVGID_6_);
                          }

                          .st20 {
                            fill: url(#SVGID_7_);
                          }

                          .st21 {
                            fill: url(#SVGID_8_);
                          }

                          .st22 {
                            fill: url(#SVGID_9_);
                          }

                          .st23 {
                            fill: url(#SVGID_10_);
                          }

                          .st24 {
                            fill: url(#SVGID_11_);
                          }

                          .st25 {
                            fill: url(#SVGID_12_);
                          }

                          .st26 {
                            fill: url(#SVGID_13_);
                          }

                          .st27 {
                            fill: url(#SVGID_14_);
                          }

                          .st28 {
                            fill: url(#SVGID_15_);
                          }

                          .st29 {
                            fill: url(#SVGID_16_);
                          }

                          .st30 {
                            fill: url(#SVGID_17_);
                          }

                          .st31 {
                            fill: url(#SVGID_18_);
                          }

                          .st32 {
                            fill: url(#SVGID_19_);
                          }

                          .st33 {
                            fill: url(#SVGID_20_);
                          }

                          .st34 {
                            fill: url(#SVGID_21_);
                          }

                          .st35 {
                            fill: url(#SVGID_22_);
                          }

                          .st36 {
                            fill: url(#SVGID_23_);
                          }

                          .st37 {
                            fill: url(#SVGID_24_);
                          }

                          .st38 {
                            fill: url(#SVGID_25_);
                          }

                          .st39 {
                            fill: url(#SVGID_26_);
                          }

                          .st40 {
                            fill: url(#SVGID_27_);
                          }

                          .st41 {
                            fill: url(#SVGID_28_);
                          }

                          .st42 {
                            fill: url(#SVGID_29_);
                          }

                          .st43 {
                            fill: url(#SVGID_30_);
                          }

                          .st44 {
                            fill: url(#SVGID_31_);
                          }

                          .st45 {
                            fill: url(#SVGID_32_);
                          }

                          .st46 {
                            fill: url(#SVGID_33_);
                          }

                          .st47 {
                            fill: url(#SVGID_34_);
                          }

                          .st48 {
                            fill: url(#SVGID_35_);
                          }

                          .st49 {
                            fill: url(#SVGID_36_);
                          }

                          .st50 {
                            fill: url(#SVGID_37_);
                          }

                          .st51 {
                            fill: url(#SVGID_38_);
                          }

                          .st52 {
                            fill: url(#SVGID_39_);
                          }

                          .st53 {
                            fill: url(#SVGID_40_);
                          }

                          .st54 {
                            fill: url(#SVGID_41_);
                          }

                          .st55 {
                            fill: url(#SVGID_42_);
                          }

                          .st56 {
                            fill: url(#SVGID_43_);
                          }

                          .st57 {
                            fill: url(#SVGID_44_);
                          }

                          .st58 {
                            fill: url(#SVGID_45_);
                          }

                          .st59 {
                            fill: #040404;
                          }

                          .st60 {
                            fill: url(#SVGID_46_);
                          }

                          .st61 {
                            fill: url(#SVGID_47_);
                          }

                          .st62 {
                            fill: url(#SVGID_48_);
                          }

                          .st63 {
                            fill: url(#SVGID_49_);
                          }

                          .st64 {
                            fill: url(#SVGID_50_);
                          }

                          .st65 {
                            fill: url(#SVGID_51_);
                          }

                          .st66 {
                            fill: url(#SVGID_52_);
                          }

                          .st67 {
                            fill: url(#SVGID_53_);
                          }

                          .st68 {
                            fill: url(#SVGID_54_);
                          }

                          .st69 {
                            fill: url(#SVGID_55_);
                          }

                          .st70 {
                            fill: url(#SVGID_56_);
                          }

                          .st71 {
                            fill: url(#SVGID_57_);
                          }

                          .st72 {
                            fill: url(#SVGID_58_);
                          }

                          .st73 {
                            fill: url(#SVGID_59_);
                          }

                          .st74 {
                            fill: url(#SVGID_60_);
                          }

                          .st75 {
                            fill: url(#SVGID_61_);
                          }

                          .st76 {
                            fill: url(#SVGID_62_);
                          }

                          .st77 {
                            fill: none;
                            stroke: #000000;
                            stroke-width: 3;
                            stroke-miterlimit: 10;
                          }

                          .st78 {
                            fill: none;
                            stroke: #FFFFFF;
                            stroke-miterlimit: 10;
                          }

                          .st79 {
                            fill: #4BC9FF;
                          }

                          .st80 {
                            fill: #5500DD;
                          }

                          .st81 {
                            fill: #FF3A00;
                          }

                          .st82 {
                            fill: #E6162D;
                          }

                          .st83 {
                            fill: #F1F1F1;
                          }

                          .st84 {
                            fill: #FF9933;
                          }

                          .st85 {
                            fill: #B92B27;
                          }

                          .st86 {
                            fill: #00ACED;
                          }

                          .st87 {
                            fill: #BD2125;
                          }

                          .st88 {
                            fill: #1877F2;
                          }

                          .st89 {
                            fill: #6665D2;
                          }

                          .st90 {
                            fill: #CE3056;
                          }

                          .st91 {
                            fill: #5BB381;
                          }

                          .st92 {
                            fill: #61C3EC;
                          }

                          .st93 {
                            fill: #E4B34B;
                          }

                          .st94 {
                            fill: #181EF2;
                          }

                          .st95 {
                            fill: #FF0000;
                          }

                          .st96 {
                            fill: #FE466C;
                          }

                          .st97 {
                            fill: #FA4778;
                          }

                          .st98 {
                            fill: #FF7700;
                          }

                          .st99 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #1F6BF6;
                          }

                          .st100 {
                            fill: #520094;
                          }

                          .st101 {
                            fill: #4477E8;
                          }

                          .st102 {
                            fill: #3D1D1C;
                          }

                          .st103 {
                            fill: #FFE812;
                          }

                          .st104 {
                            fill: #344356;
                          }

                          .st105 {
                            fill: #00CC76;
                          }

                          .st106 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #345E90;
                          }

                          .st107 {
                            fill: #1F65D8;
                          }

                          .st108 {
                            fill: #EB3587;
                          }

                          .st109 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #603A88;
                          }

                          .st110 {
                            fill: #E3CE99;
                          }

                          .st111 {
                            fill: #783AF9;
                          }

                          .st112 {
                            fill: #FF515E;
                          }

                          .st113 {
                            fill: #FF4906;
                          }

                          .st114 {
                            fill: #503227;
                          }

                          .st115 {
                            fill: #4C7BD9;
                          }

                          .st116 {
                            fill: #69C9D0;
                          }

                          .st117 {
                            fill: #1B92D1;
                          }

                          .st118 {
                            fill: #EB4F4A;
                          }

                          .st119 {
                            fill: #513728;
                          }

                          .st120 {
                            fill: #FF6600;
                          }

                          .st121 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #B61438;
                          }

                          .st122 {
                            fill: #FFFC00;
                          }

                          .st123 {
                            fill: #141414;
                          }

                          .st124 {
                            fill: #94D137;
                          }

                          .st125 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #F1F1F1;
                          }

                          .st126 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #66E066;
                          }

                          .st127 {
                            fill: #2D8CFF;
                          }

                          .st128 {
                            fill: #F1A300;
                          }

                          .st129 {
                            fill: #4BA2F2;
                          }

                          .st130 {
                            fill: #1A5099;
                          }

                          .st131 {
                            fill: #EE6060;
                          }

                          .st132 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                            fill: #F48120;
                          }

                          .st133 {
                            fill: #222222;
                          }

                          .st134 {
                            fill: url(#SVGID_63_);
                          }

                          .st135 {
                            fill: #0077B5;
                          }

                          .st136 {
                            fill: #FFCC00;
                          }

                          .st137 {
                            fill: #EB3352;
                          }

                          .st138 {
                            fill: #F9D265;
                          }

                          .st139 {
                            fill: #F5B955;
                          }

                          .st140 {
                            fill: #DD2A7B;
                          }

                          .st141 {
                            fill: #66E066;
                          }

                          .st142 {
                            fill: #EB4E00;
                          }

                          .st143 {
                            fill: #FFC794;
                          }

                          .st144 {
                            fill: #B5332A;
                          }

                          .st145 {
                            fill: #4E85EB;
                          }

                          .st146 {
                            fill: #58A45C;
                          }

                          .st147 {
                            fill: #F2BC42;
                          }

                          .st148 {
                            fill: #D85040;
                          }

                          .st149 {
                            fill: #464EB8;
                          }

                          .st150 {
                            fill: #7B83EB;
                          }
                        </style>
                        <g id="Layer_1"></g>
                        <g id="Layer_2">
                          <g>
                            <path class="st88"
                              d="M50,2.5c-58.892,1.725-64.898,84.363-7.46,95l0,0h0H50h7.46l0,0C114.911,86.853,108.879,4.219,50,2.5z">
                            </path>
                            <path class="st83"
                              d="M57.46,64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779,1.85-7.463,7.781-7.463h6.021 c0,0,0-11.761,0-11.761c-12.894-2.323-28.385-1.616-28.722,17.66V50.29H30.417v13.814H42.54c0,0,0,33.395,0,33.396H50h7.46l0,0h0 V64.104z">
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>


              </ul>
            </div>
          </v-col>
        </v-row>


        <v-divider class="tw-my-2 tw-mx-4 tw-text-white tw-bg-white"></v-divider>
        <div class="tw-text-white tw-text-xs tw-flex tw-justify-evenly">
          <p class="tw-text-center">&copy; 2023 e-pharma. All rights reserved</p>
          <p class="tw-text-right">FAQ Privacy Terms & Conditions</p>
        </div>



      </div>
    </footer>

    <div style="display:none">
      <svg id="dots-triangle" width="170" height="170" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M168.152 170a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.479 0a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zM94.24 133.043a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 36.956a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 55.434a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.479 73.913a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.478 92.391a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM1.848 133.044a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.695zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696z"
          fill="#2C8056" fill-rule="evenodd" opacity=".503" />
      </svg>
    </div>
  </div>
</template>


<script>


export default {
  data() {
    return {
      isOpen: false,
      showModal: false,
      theme: 'theme-light',
      modalVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    closeDialog() {
      this.$emit("close");
    },
    openModal() {
      this.modalVisible = true;
    }

  }

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins&display=swap');

footer {
  background-color: #004225;
}

button {
  border: 0.5px solid #004225;
}

button:hover {
  border: none;
}

.text-color {
  color: #004225;
}

.bg-color {
  background-color: #004225;
}

.font-sans {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
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

/* Modal backdrop styles */
.tw-modal-backdrop {
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal content styles */
.tw-modal {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Close button styles */
.tw-modal-close-btn {
  background-color: gray;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

/* Button styles */

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
