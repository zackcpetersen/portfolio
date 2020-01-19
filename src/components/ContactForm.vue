<template>
    <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
    >
        <v-text-field
                v-model="name"
                :counter="30"
                rules="nameRules"
                label="Name"
                required
        ></v-text-field>
        <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
        ></v-text-field>
        <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Phone"
        ></v-text-field>
        <v-text-field
                v-model="message"
                :rules="messageRules"
                label="Message"
                required
        ></v-text-field>
        <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
        >
            Send Message
        </v-btn>
    </v-form>

<!--        <div class="contact-form">-->
<!--        <form @submit.prevent="addContact">-->
<!--            <div class="field name">-->
<!--                <input type="text" name="name" v-model="name" placeholder="Name">-->
<!--            </div>-->
<!--            <div class="field email">-->
<!--                <input type="text" name="email" v-model="email" placeholder="Email">-->
<!--            </div>-->
<!--            <div class="field phone">-->
<!--                <input type="text" name="phone" v-model="phone" placeholder="Phone - Optional">-->
<!--            </div>-->
<!--            <div class="field message">-->
<!--                <textarea name="message" rows="3" v-model="message" placeholder="Your message"/>-->
<!--            </div>-->
<!--            <div class="field center-align">-->
<!--                <ul v-if="feedback.length > 0" class="feedback">-->
<!--                    <li v-for="(error, index) in feedback" :key="index">{{ error }}</li>-->
<!--                </ul>-->
<!--                <button class="btn btn-sm btn-success">Send</button>-->
<!--            </div>-->
<!--        </form>-->
<!--    </div>-->

</template>

<script>
    export default {
        name: "ContactForm",
        data() {
            return {
                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 30) || 'Name must be less than 30 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                phone: '',
                message: '',
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
            },
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
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

    .feedback {
        list-style-type: none;
        text-align: center;
        padding: 0;
        margin: 1em 0;
    }
</style>
