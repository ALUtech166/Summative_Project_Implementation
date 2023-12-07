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
                        class="tw-text-black tw-hover:text-gray-800 focus:tw-outline-none">
                        {{ item.expanded ? 'Collapse' : 'Expand' }}
                      </button>
                    </div>
                    <p v-show="item.expanded" class="tw-text-black tw-mt-2">{{ item.answer }}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>




        </div>



      </div> <!-- end hero -->



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
          question: "1. What is an online pharmacy?",
          answer: "An online pharmacy is a digital platform that allows customers to order prescription and over-the-counter medications, as well as other health-related products, from the convenience of their homes.",
          expanded: false,
        },
        {
          question: "2. How do I place an order?",
          answer: "To place an order, simply browse our website, select the desired products, add them to your cart, and follow the checkout process. You may need to create an account and provide relevant prescription information for certain medications.",
          expanded: false,
        },
        {
          question: "3. Are the medications on your site genuine and safe?",
          answer: "Yes, we source our medications from reputable pharmaceutical manufacturers and distributors. All products undergo stringent quality checks to ensure they meet industry standards. Additionally, our pharmacists are available to answer any specific questions you may have about your medications.",
          expanded: false,
        },
        {
          question: "4. Is it safe to provide personal and credit card information online?",
          answer: "We prioritize the security and confidentiality of your information. Our website uses secure encryption technology to protect your personal and financial details. We do not store credit card information after transactions are completed.",
          expanded: false,
        },
        {
          question: "5. How do you handle shipping and delivery?",
          answer: "We offer reliable and discreet shipping options. Delivery times may vary depending on your location and the shipping method selected. You can track your order through our website, and our customer support team is available to assist with any delivery-related inquiries.",
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
  background-color: #043CAA;
}

:hover.hover-bg {
  background-color: #043CAA;
}


.text-color {
  color: #043CAA;
}


button {
  color: black
}
</style>
