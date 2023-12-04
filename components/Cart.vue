<!-- components/Cart.vue -->
<template>
    <div>
        <v-card>
            <v-card-title>Shopping Cart</v-card-title>
            <v-list>
                <v-list-item v-for="(item, index) in cart" :key="index">
                    <v-list-item-content>{{ item.name }}</v-list-item-content>
                    <v-list-item-content class="ml-auto">{{ item.price }}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>
  
<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart;
        },
    },
};
</script>
  
<style scoped>
/* Add styling here */
</style>
  