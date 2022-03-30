<template>
    <v-container class="about">
        <h1 class="text-center"><span class="first-header">Hello,</span> my name is {{ fullName }}</h1>
        <v-row justify="center">
            <v-col sm="10" md="8" lg="6" align="center">
                <!-- TODO if image stays blurry remove mx-5 -->
                <v-img v-if="userImage" :src="user.image" contain class="rounded-circle mt-5 mx-5" max-width="500"></v-img>
                <socialLinks class="my-2" />
                <v-btn :to="{ name: 'ProjectList' }" color="primary"
                       class="my-5"
                       min-width="30%"
                       large
                >View My Work
                </v-btn>
                <p class="ma-5 text-left"><span v-html="userBio"></span></p>
                <v-divider class="my-10"/>
                <h3>Enter your name to send a message!</h3>
                <contactForm />
                <v-divider class="my-10"/>
            </v-col>
        </v-row>
        <snackbar :snackbar="snackbar"></snackbar>
    </v-container>
</template>

<script>
    import axios from '@/axios'

    import socialLinks from '@/components/socialLinks'
    import contactForm from '@/components/contactForm'
    import snackbar from '@/components/snackbar'

    export default {
        name: "About",
        components: {
            socialLinks,
            contactForm,
            snackbar
        },
        data() {
            return {
                user: null,
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
        computed: {
            userImage () {
                if (!!this.user) {
                    return this.user.image
                }
            },
            userBio () {
                if (!!this.user) {
                    return this.user.bio
                }
            },
            fullName () {
                if (!!this.user) {
                    return this.user.first_name + ' ' + this.user.last_name
                }
            }
        },
        created () {
            axios.get('/users/').then(resp => {
                this.user = resp.data[0]
            }).catch(err => this.showFailedSnackbar(err))
        }
    }
</script>
