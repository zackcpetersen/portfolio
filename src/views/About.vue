<template>
    <v-container class="about">
        <h1><span class="first-header">Hello, </span>My name is Zack Petersen</h1>
                <img :src="photo" class="my-10">
                <p>{{ aboutMe }}</p>
        <v-divider class="my-10" />
                <SocialLinks/>
    </v-container>
</template>

<script>
    import db from '@/firebase/init'
    import SocialLinks from "../components/SocialLinks";

    export default {
        name: "About",
        components: {SocialLinks},
        data() {
            return {
                aboutMe: null,
                myName: 'Hello, my name is Zack Petersen',
                photo: null,
            }
        },
        created() {
            db.collection('about').doc('u9EsLfOYROiDn7Vk46qV').get()
                .then(doc => {
                    let about = doc.data()
                    this.photo = about.aboutPhoto
                    this.aboutMe = about.bio
                })
        }
    }
</script>

<style>
    .about img {
        max-width: 60%;
        border-radius: 50%;
        margin: 1em;
    }

    .about p {
        text-align: left;
        padding: 1em;
    }

</style>
