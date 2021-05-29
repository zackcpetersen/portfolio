<template>
    <v-container class="about">
        <h1 class="text-center"><span class="first-header">Hello,</span> my name is Zack Petersen</h1>
        <v-row justify="center">
            <v-avatar class="mr-md-5 mr-3 my-5 rounded-circle" size="400" rounded v-if="user.image">
                <v-img :src="user.image" aspect-ratio="1"></v-img>
            </v-avatar>
            <SocialLinks class="my-5" />
            <v-btn :to="{ name: 'PortfolioList' }" color="primary"
                   class="my-5"
                   min-width="50%"
                   large>View My Work</v-btn>
        </v-row>
        <p class="my-5 text-left">{{ user.bio }}</p>
        <v-divider class="my-10"/>
        <h3>Wanna Talk?</h3>
        <ContactForm />
        <v-divider class="my-10"/>
    </v-container>
</template>

<script>
    import axios from '@/axios'

    import SocialLinks from "../components/SocialLinks";
    import ContactForm from "../components/ContactForm";

    export default {
        name: "About",
        components: { SocialLinks, ContactForm },
        data() {
            return {
                user: null,
                myName: 'Hello, my name is Zack Petersen',
            }
        },
        created () {
            axios.get('/users/').then(resp => {
                this.user = resp.data[0]
            }).catch(err => alert(err))
        }
    }
</script>
