<!-- components/ProductPreview.vue -->
<template>
    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-img :src="product.image" alt="Product Image" height="300"></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.price }}</v-card-subtitle>
            <!-- Add more product details as needed -->
            <v-card-actions>
                <v-btn @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script>
export default {
    props: {
        product: Object,
    },
    data() {
        return {
            dialog: false,
        };
    },
};
</script>
  
<style scoped>
/* Add styling here */
</style>
  