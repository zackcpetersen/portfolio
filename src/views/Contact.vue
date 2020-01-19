<template>
    <div class="contact container">
        <h1>{{ header }}</h1>
        <hr>
        <ContactForm class="m-5"></ContactForm>
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

</style>
