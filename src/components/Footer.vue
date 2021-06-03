<template>

        <v-container class="my-2">
            <strong>Let's Talk!</strong>
            <p>Wanna get in touch? Feel Free to contact with the options below or by using the
                <router-link :to="{ name: 'Contact' }" class="link">
                    <strong>contact page!</strong>
                </router-link>
            </p>
            <v-btn class="mx-4" :to="{ name: 'About' }" icon ripple exact>
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn :href="`mailto:${this.email}`" class="mx-4" icon ripple exact>
                <v-icon>{{ emailIcon }}</v-icon>
            </v-btn>
            <v-btn :href="`sms:${this.phone}`" class="mx-4" icon ripple exact>
                <v-icon>{{ phoneIcon }}</v-icon>
            </v-btn>
            <snackbar :snackbar="snackbar"></snackbar>
        </v-container>
</template>

<script>
    import axios from '@/axios'
    import snackbar from '@/components/snackbar'

    export default {
        name: "Footer",
        data() {
            return {
                email: null,
                emailIcon: 'mdi-email',
                phone: null,
                phoneIcon: 'mdi-message-text',
                snackbar: {
                    color: 'red',
                    icon: 'mdi-thumb-down',
                    show: false
                }
            }
        },
        methods: {
            showFailedSnackbar(err) {
                this.snackbar['content'] = err
                this.snackbar['show'] = true
            }
        },
        created () {
            axios.get('/users/').then(resp => {
                const user = resp.data[0]
                this.email = user.email
                this.phone = user.phone
            }).catch(err => this.showFailedSnackbar(err))
        },
        components: {
            'snackbar': snackbar
        },
    }
</script>

<style>
</style>