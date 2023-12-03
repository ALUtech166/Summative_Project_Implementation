<template>
  <div class="">

    <div class="tw-mt-4 lg:tw-mx-0 tw-aspect-w-16  tw-overflow-hidden tw-h-full">

      <iframe class=""
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.26059361784!2d30.057428788649723!3d-1.94642533671203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a86d814c61%3A0x7d3b83e12b1c11a9!2sNorrsken%20House%20Kigali!5e0!3m2!1sfr!2srw!4v1684802051331!5m2!1sfr!2srw"
        width="100%" height="600" style="border:0;"></iframe>
    </div>




    <div class="lg:tw-mx-8 tw-bottom-0 tw-left-0 tw-px-8 tw-py-12">
      <div class="lg:tw-flex lg:tw-flex-row sm:tw-flex sm:tw-flex-col lg:tw-justify-betwen lg:tw-gap-12">

        <div class="tw-text-lg lg:tw-transform lg:tw--translate-y-40 sm:tw-text-lg lg:tw-w-1/2 tw-mb-12">
          <div class="">
            <form class="tw-bg-white lg:tw-mt-0 tw-shadow-2xl tw-shadow-gray-800 tw-rounded-xl tw-px-8 tw-py-12"
              v-on:submit.prevent="sendMessage">

              <div class="tw-w-full tw-md:w-1/2">
                <label class="tw-block tw-font-extrabold tw-mb-1" for="name">
                  Full Name
                </label>

                <input type="name" name="name" id="email" placeholder="John Doe" v-model="contact.name"
                  class="tw-block tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full  tw-text-black tw-shadow-xl tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                  required>
              </div>

              <div class="tw-w-full tw-md:w-1/2">
                <label class="tw-block tw-font-extrabold tw-mb-1" for="email">
                  Email Address
                </label>

                <input type="email" name="email" id="email" placeholder="email@example.com" v-model="contact.email"
                  class="tw-block  tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full  tw-text-black tw-shadow-xl tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                  required>
              </div>


              <div class="tw-w-full tw-md:w-1/2">
                <label class="tw-block tw-font-extrabold tw-mb-1" for="number">
                  Phone Number
                </label>

                <input type="text" name="number" id="number" placeholder="+228 91 58 50 75" v-model="contact.phone"
                  class="tw-block  tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full  tw-text-black tw-shadow-xl tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                  required>
              </div>

              <div class="tw-w-full tw-mb-8">
                <label class="tw-block tw-font-extrabold tw-mb-1" for="message">
                  Message
                </label>

                <textarea id="message" rows="4" name="message" v-model="contact.message"
                  class="tw-block  tw-bg-gray-300 tw-placeholder-gray-500 tw-w-full tw-text-black tw-p-4  tw-shadow-lg tw-rounded-lg  tw-outline-none tw-appearance-none  tw-mb-1 tw-py-3"
                  placeholder="Enter your message here." required></textarea>
              </div>

              <button
                class="tw-group bg-color tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-4 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                  Send

                </span>
              </button>
            </form>


          </div>
        </div>

        <div class="lg:tw-w-1/2 tw-items-center">
          <h1 class="tw-text-black tw-text-5xl tw-font-extrabold">
            How can <span class="text-color">we help?</span>
          </h1>
          <p class="tw-text-black tw-text-xl tw-mt-2">
            Reach out to me anytime and I will get back to you within 24 hours.
          </p>

          <div class="tw-mt-4">
            <section class="tw-bg-gray-100 tw-shadow-2xl tw-shadow-gray-500 tw-rounded-lg tw-py-8">
              <div class="tw-container">
                <h2 class="tw-text-3xl tw-font-extrabold tw-mb-6">Frequently Asked Questions</h2>
                <div class="tw-space-y-6">
                  <div v-for="(item, index) in faqItems" :key="index" class="tw-border-b tw-border-gray-300 tw-pb-4">
                    <div class="tw-flex tw-justify-between tw-items-center">
                      <h3 class="tw-text-md text-color tw-font-bold">{{ item.question }}</h3>
                      <button @click="toggleAnswer(index)"
                        class="tw-text-gray-600 tw-hover:text-gray-800 focus:tw-outline-none">
                        {{ item.expanded ? 'Collapse' : 'Expand' }}
                      </button>
                    </div>
                    <p v-show="item.expanded" class="tw-text-gray-600 tw-mt-2">{{ item.answer }}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>




        </div>



      </div> <!-- end hero -->



      <div class="tw-grid lg:tw-grid-cols-3 tw-gap-6 lg:tw-gap-8 md:tw-gap-8 lg:tw-transform lg:tw--translate-y-20">
        <div class="tw-shadow-2xl tw-shadow-gray-800 tw-rounded-lg tw-block tw-cursor-pointer tw-w-full">

          <div class="tw-px-12 tw-p-4 tw-items-center tw-text-center tw-text-left tw-h-[fit-content] lg:tw-h-full lg:tw-my-8">
            <svg class="tw-mx-32" width="50" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#c70a0a" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="#c70a0a" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="#c70a0a" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> <g> <path fill="#c70a0a" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"></path> <path fill="#c70a0a" d="M32,2c-12.15,0-22,9.85-22,22c0,5.799,3.469,11.469,5.913,15h0.01L32,61l16.077-22h0.01 C50.281,35.781,54,29.799,54,24C54,11.85,44.15,2,32,2z M32,38c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14 S39.732,38,32,38z"></path> </g> <path opacity="0.2" fill="#c70a0a" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"></path> </g> </g></svg>            <h1 class="tw-font-extrabold tw-text-2xl text-color tw-mt-2">
              Headquarters
            </h1>
            <div class="tw-mt-2">
              <p class="tw-font-bold tw-text-xl tw-text-black">
                Kigali, Rwanda
              </p>

            </div>
          </div>

        </div>

        <div
          class="tw-shadow-2xl tw-rounded-lg tw-shadow-gray-800 tw-bg-white hover:tw-text-white tw-block tw-cursor-pointer tw-w-full">


          <div class="tw-px-12 tw-p-4 tw-text-left tw-text-center tw-h-[fit-content] lg:tw-h-full lg:tw-my-8">
            <svg class="tw-mx-32" width="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"></path> <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"></path> <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"></path> <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"></path> <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"></path> <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"></path> <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"></path> <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"></path> </g></svg>
            <h1 class="tw-font-extrabold tw-text-2xl text-color tw-mt-2">
              Email
            </h1>
            <div class="tw-mt-2">
              <p class="tw-font-bold tw-text-xl tw-text-black">
                contact@e-tuto.com
              </p>
            </div>


          </div>
        </div>

        <div class="tw-shadow-2xl tw-shadow-gray-800 tw-rounded-lg tw-block tw-cursor-pointer tw-w-full">

          <div class="tw-px-12 tw-p-4 tw-text-center tw-text-left tw-h-[fit-content] lg:tw-h-full lg:tw-my-8">
            <svg class="tw-mx-32"
                    width="50" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
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
                  </svg>
            <h1 class="tw-font-extrabold tw-text-2xl text-color tw-mt-2">
              Phone
            </h1>
            <div class="tw-mt-2">
              <p class="tw-font-bold tw-text-xl tw-text-black">
                +250-785-658-174
              </p>

            </div>
          </div>

        </div>
      </div>





    </div>


  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
const swal = require('sweetalert2')

export default {
  data() {
    return {
      title: 'Nous contacter Page',
      contact: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },

      faqItems: [
        {
          question: "What is Tailwind CSS?",
          answer: "Tailwind CSS is a utility-first CSS framework...",
          expanded: false,
        },
        {
          question: "What is Tailwind CSS?",
          answer: "Tailwind CSS is a utility-first CSS framework...",
          expanded: false,
        },
        {
          question: "What is Tailwind CSS?",
          answer: "Tailwind CSS is a utility-first CSS framework...",
          expanded: false,
        },
        {
          question: "What is Tailwind CSS?",
          answer: "Tailwind CSS is a utility-first CSS framework...",
          expanded: false,
        },
        // Add more FAQ items
      ],



    }
  },

  head() {
    return {
      title: 'Nous contacter Page',

    }
  },

  computed: {
    breadcrumbItems() {
      const items = [{
        text: 'Home',
        href: '/',
      },
      {
        text: 'Contact Us',

      },

      ];

      return items.map((item) => ({
        ...item,
        disabled: !item.href,
      }));
    },
  },

  mounted() {
    if (!this.initialized) {
      AOS.init({
        once: true,
        duration: 2000
      });
      this.initialized = true;
    }
  },

  methods: {

    toggleAnswer(index) {
      this.faqItems[index].expanded = !this.faqItems[index].expanded;
    },
    async sendMessage(contact) {
      try {
        const response = await fetch('/api/v1/send-email', {
          method: 'POST',
          body: JSON.stringify({
            contact: {
              name: this.contact.name,
              phone: this.contact.phone,
              email: this.contact.email,
              message: this.contact.message,
            }
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
          new swal({
            title: 'Message envoyé!',
            text: 'Votre message a été envoyé avec succès.',
            icon: 'success',
            button: 'Fermer',
          });
        }
        return data;
      } catch (error) {
        console.error('Error sending message:', error);
        new swal({
          title: 'Erreur!',
          text: 'Une erreur s\'est produite lors de l\'envoi de votre message.',
          icon: 'error',
          button: 'Fermer',
        });
      }
    }



  },
}

</script>

<style scoped>
.bg-image {
  background-image: url(https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740);
  background-size: cover;
  height: 100%;
  width: 100%;
}

.bg-color {
  background-color: #0B2447;
}

:hover.hover-bg {
  background-color: #0B2447;
}


.text-color {
  color: #0B2447;
}


button {
  color: black
}
</style>
