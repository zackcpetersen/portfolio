<template>
    <div class="nav">
        <Push>
            <router-link :to="{ name: 'About' }" class="link">ABOUT</router-link>
            <router-link :to="{ name: 'Contact' }" class="link">CONTACT</router-link>
            <router-link :to="{ name: 'PortfolioList' }" class="link">PORTFOLIO</router-link>
        </Push>
    </div>


</template>

<script>
    import {Push} from 'vue-burger-menu'

    export default {
        name: "Navbar",
        data() {
            return {}
        },
        components: {
            Push
        }
    }
</script>

<style>
    /*menu*/
    .bm-menu {
        left: 0;
        right: 0;
        background-color: rgb(63, 63, 65);
    }

    .bm-burger-button {
        z-index: 999;
        position: fixed;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 75%;
        cursor: pointer;
    }

    .nav {
        margin: 1.5em;
    }
    .nav .link {
        color: white;
    }
    @media only screen and (min-width: 768px) {
        .bm-burger-button {
            top: 10%;
        }
    }
</style>