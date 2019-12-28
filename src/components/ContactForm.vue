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
                <textarea name="message" rows="3" v-model="message" placeholder="Enter your message"></textarea>
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="feedback">{{ feedback }}</p>
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
                feedback: null,
            }
        },
        methods: {
            addContact() {
                if (this.name && this.email && this.message) {
                    this.feedback = null
                    console.log(this.name, this.email, this.message)
                }
                else {
                    this.feedback = 'You must complete all fields!'
                }
            }
        }
    }
</script>

<style>
    .feedback {
        color: red;
    }
</style>