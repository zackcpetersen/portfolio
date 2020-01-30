<template>
    <v-container class="contact">
        <h1>Have a<span class="first-header"> question</span>?</h1>
        <p>Fill out the fields below and I'll be in touch!</p>
        <v-divider />
        <ContactForm/>
    </v-container>
</template>

<script>
    import ContactForm from "../components/ContactForm";

    export default {
        name: "Contact",
        data() {
            return {
                header: 'Have A Question?'
            }
        },
        components: {
            ContactForm
        }
    }
</script>

<style>
    .contact p {
        text-align: left;
    }
</style>
