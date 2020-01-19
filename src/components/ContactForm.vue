<template>
    <div class="contact-form">
        <form @submit.prevent="addContact">
            <div class="field name">
                <input type="text" name="name" v-model="name" placeholder="Name">
            </div>
            <div class="field email">
                <input type="text" name="email" v-model="email" placeholder="Email">
            </div>
            <div class="field phone">
                <input type="text" name="phone" v-model="phone" placeholder="Phone - Optional">
            </div>
            <div class="field message">
                <textarea name="message" rows="3" v-model="message" placeholder="Your message"/>
            </div>
            <div class="field center-align">
                <ul v-if="feedback.length > 0" class="feedback">
                    <li v-for="(error, index) in feedback" :key="index">{{ error }}</li>
                </ul>
                <button class="btn btn-sm btn-success">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "ContactForm",
        data() {
            return {
                name: null,
                email: null,
                phone: null,
                message: null,
                feedback: [],
            }
        },
        methods: {
            addContact() {
                this.feedback = []
                if (this.name && this.email && this.message) {
                    this.feedback = []
                    console.log(this.name, this.email, this.message)
                }
                if (!this.name) {
                    this.feedback.push('Name Required')
                }
                if (!this.email) {
                    this.feedback.push('Email Required')
                } else if (!this.validEmail(this.email)) {
                    this.feedback.push('Please enter a valid email')
                }
                if (!this.message) {
                    this.feedback.push('Message Required')
                }
            },
            validEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
</script>

<style>
    .feedback {
        color: red;
        list-style-type: none;
        text-align: center;
        padding: 0;
        margin: 1em 0;
    }
</style>
