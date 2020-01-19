<template>
    <div class="nav">
        <Push>
            <router-link :to="{ name: 'About' }" class="link">ABOUT</router-link>
            <router-link :to="{ name: 'Contact' }" class="link">CONTACT</router-link>
            <router-link :to="{ name: 'PortfolioList' }" class="link">PORTFOLIO</router-link>
            <SocialLinks />
        </Push>

    </div>


</template>

<script>
    import {Push} from 'vue-burger-menu'
    import SocialLinks from "./SocialLinks";

    export default {
        name: "Navbar",
        data() {
            return {}
        },
        components: {
            SocialLinks,
            Push
        }
    }
</script>

<style>
    /*menu*/
    .bm-burger-button {
        z-index: 999;
        position: fixed;
        top: 1.5em;
        left: 1.5em;
        width: 36px;
        height: 30px;
        cursor: pointer;
    }

    /*nav*/
    .nav {
        z-index: 999;
        display: inline-block;
        position: fixed;
        width: 100%;
        left: 0;
        top: 1.5em;
    }

    .nav .link {
        color: white;
    }
</style>