<template>
    <div class="about container">
        <!--        <h1>About Me</h1>-->
        <h2>{{ myName }}</h2>
        <img :src="photo">
        <p>{{ aboutMe }}</p>
        <SocialLinks />
    </div>
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
    .about {
        margin: 20% 0;
    }
    .about img {
        max-width: 60%;
        border-radius: 50%;
    }
    .about h2 {
        text-align: left;
        padding: .5em;
    }
    .about p {
        text-align: left;
        padding: 1em;
    }

</style>
