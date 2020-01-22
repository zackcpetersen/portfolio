<template>
    <v-container class="about">
<!--                <h1>{{ myName }}</h1>-->
        <h1><span class="first-header">Hello, </span>My name is Zack Petersen</h1>
                <img :src="photo">
                <p>{{ aboutMe }}</p>
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
                aboutMe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
                    ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                    ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
                    ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
                    ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                myName: 'Hello, my name is Zack Petersen',
                photo: null,
            }
        },
        created() {
            db.collection('about').doc('u9EsLfOYROiDn7Vk46qV').get()
                .then(doc => {
                    let about = doc.data()
                    this.photo = about.aboutPhoto
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
