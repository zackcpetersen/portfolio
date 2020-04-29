<template>
    <v-form
            ref="form"
            v-model="valid"
            lazy-validation>
        <v-progress-linear
                :active="progress.active"
                :background-opacity="progress.opacity"
                :bottom="progress.bottom"
                :buffer-value="progress.buffer"
                :height="progress.height"
                :indeterminate="progress.indeterminate"
                :query="progress.query"
                :rounded="progress.rounded"
                :stream="progress.stream"
                :striped="progress.striped"
                :top="progress.top"
                :value="progress.value"
                class="mt-10 mb-2"
        />
        <p class="font-weight-light font-italic text-center">{{ progress.value }}%</p>
        <v-text-field
                v-show="[1, 2, 3, 4].includes(step)"
                v-model="fields.name"
                :counter="30"
                :rules="fieldRules.nameRules"
                label="Name"
                required
        />
        <v-expand-transition>
            <v-text-field
                    v-show="[2, 3, 4].includes(step)"
                    v-model="fields.email"
                    :rules="fieldRules.emailRules"
                    label="E-mail"
                    required
            />
        </v-expand-transition>
        <v-expand-transition>
            <v-text-field
                    v-show="[3, 4].includes(step)"
                    v-model="fields.phone"
                    :rules="fieldRules.phoneRules"
                    label="Phone"
            />
        </v-expand-transition>
        <v-expand-transition>
            <div v-show="[4].includes(step)">
                <v-textarea
                        outlined
                        v-model="fields.message"
                        name="input-7-1"
                        :rules="fieldRules.messageRules"
                        label="Message"
                        required
                />
                <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                >
                    Send Message
                </v-btn>
            </div>
        </v-expand-transition>
        <v-snackbar
                v-model="snackbar"
                multi-line='multi-line'
                :timeout="4000"
                color="primary"
                class="text-center"
        >
            <v-row justify="center">
                I'll be in touch soon!
            </v-row>

        </v-snackbar>
    </v-form>

</template>

<script>
    import db from '@/firebase/init'

    export default {
        name: "ContactForm",
        data() {
            return {
                valid: true,
                fields: {
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                },
                fieldRules: {
                    nameRules: [
                        v => !!v || 'Name is required',
                        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
                        v => {
                            if (!!v && v.length <= 30) {
                                this.step = 2
                                this.progress.value = 25
                                return true
                            }
                            return false
                        }
                    ],
                    emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                        v => {
                            if (!!v && /.+@.+\..+/.test(v)) {
                                this.step = 3
                                this.progress.value = 50
                                return true
                            }
                            return false
                        }
                    ],
                    phoneRules: [
                        v => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v) || 'Invalid Phone Number',
                        v => {
                            if (!!v && /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v)) {
                                this.step = 4
                                this.progress.value = 75
                                return true
                            }
                            return false
                        }
                    ],
                    messageRules: [
                        v => !!v || 'Message is required',
                        v => {
                            if (!!v) {
                                this.progress.value = 100
                                return true
                            }
                            return false
                        }
                    ],
                },
                progress: {
                    absolute: false,
                    active: true,
                    opacity: 0.3,
                    bottom: false,
                    buffer: 100,
                    fixed: false,
                    height: 4,
                    indeterminate: false,
                    query: false,
                    rounded: false,
                    stream: false,
                    striped: false,
                    top: false,
                    value: 0,
                },
                lazy: false,
                step: 1,
                snackbar: false,
                mode: '',
            }
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    db.collection('contact').add({
                        to: ['zackcpetersen@gmail.com'],
                        message: {
                            subject: 'New Contact Form Submission From: ' + this.fields.name + '!',
                            text: 'Name: ' + this.fields.name +
                                '\n\nPhone: ' + this.fields.phone +
                                '\n\nEmail: ' + this.fields.email +
                                '\n\nMessage Below: \n\n' + this.fields.message
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                    this.snackbar = true
                    this.$refs.form.reset()
                    this.step = 1
                    this.progress.value = 0
                }
            }
        }
    }
</script>

<style>

</style>
