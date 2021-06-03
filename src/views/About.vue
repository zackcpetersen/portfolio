<template>
    <v-container class="about">
        <h1 class="text-center"><span class="first-header">Hello,</span> my name is {{ fullName }}</h1>
        <v-row justify="center">
            <v-avatar class="mr-md-5 mr-3 my-5 rounded-circle" size="400" rounded v-if="userImage">
                <v-img :src="user.image" aspect-ratio="1"></v-img>
            </v-avatar>
            <socialLinks class="my-5" />
            <v-btn :to="{ name: 'PortfolioList' }" color="primary"
                   class="my-5"
                   min-width="30%"
                   large
            >View My Work</v-btn>
        </v-row>
        <p class="my-5 text-left">{{ userBio }}</p>
        <v-divider class="my-10"/>
        <h3>Wanna Talk?</h3>
        <contactForm />
        <v-divider class="my-10"/>
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
