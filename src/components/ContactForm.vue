<template>
        <v-form
                ref="form"
                v-model="valid"
                :lazy-validation="lazy">
            <v-text-field
                    v-model="name"
                    :counter="30"
                    :rules="nameRules"
                    label="Name"
                    required
            />
            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
            />
            <v-text-field
                    v-model="phone"

                    label="Phone"
            />
            <v-textarea
                    outlined
                    name="input-7-1"
                    label="Message"
            />
            <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
            >
                Send Message
            </v-btn>
        </v-form>

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
                lazy: false
            }
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            }
        }
    }
</script>

<style>

</style>
