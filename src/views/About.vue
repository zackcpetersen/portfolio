<template>
    <v-container class="about">
        <h1 class="text-center"><span class="first-header">Hello,</span> my name is Zack Petersen</h1>
        <v-row justify="center">
            <SocialLinks class="my-5" />
            <v-btn :to="{ name: 'PortfolioList' }" color="primary"
                   class="my-5"
                   min-width="50%"
                   large>View My Work</v-btn>
        </v-row>
        <p v-for="about in aboutMe" class="my-5 text-left">{{ about }}</p>
        <v-divider class="my-10"/>
        <h3>Wanna Talk?</h3>
        <ContactForm />
        <v-divider class="my-10"/>
    </v-container>
</template>

<script>
    // import db from '@/firebase/init'
    // import 'firebase/firestore'
    import SocialLinks from "../components/SocialLinks";
    import ContactForm from "../components/ContactForm";

    export default {
        name: "About",
        components: { SocialLinks, ContactForm },
        data() {
            return {
                aboutMe: null,
                myName: 'Hello, my name is Zack Petersen',
                photo: null,
            }
        },
        // created() {
        //     db.collection('about').doc('u9EsLfOYROiDn7Vk46qV').get()
        //         .then(doc => {
        //             let about = doc.data()
        //             this.photo = about.aboutPhoto
        //             this.aboutMe = about.bio
        //         })
        // }
    }
</script>
