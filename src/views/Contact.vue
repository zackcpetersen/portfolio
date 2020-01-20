<template>
    <div class="contact container">
        <h1>{{ header }}</h1>
        <p>Fill out the fields below and I'll be in touch!</p>
        <hr>
        <ContactForm />
    </div>
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
        components: {ContactForm}
    }
</script>

<style>
    .contact p {
        text-align: left;
    }
</style>
