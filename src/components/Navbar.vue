<template>
    <div class="nav">
        <Push>
            <router-link :to="{ name: 'About' }" class="link">ABOUT</router-link>
            <router-link :to="{ name: 'Contact' }" class="link">CONTACT</router-link>
            <router-link :to="{ name: 'PortfolioList' }" class="link">PORTFOLIO</router-link>

            <div class="social-links">
            <a class="btn btn-lg btn-social-icon btn-instagram instagram">
                <span class="fab fa-instagram insta_icon"></span>
            </a>
            <a class="btn btn-lg btn-social-icon btn-github">
                <span class="fab fa-github github-icon"></span>
            </a>
            <a class="btn btn-lg btn-social-icon btn-linkedin">
                <span class="fab fa-linkedin-in linkedin-icon"></span>
            </a>
        </div>

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
        /*left: 36px;*/
        /*top: 3%;*/
        cursor: pointer;
    }

    /*nav*/
    .nav {
        margin: 2em;
        display: inline-block;
    }

    .nav .link {
        color: white;
    }

    /*social links*/
    .instagram {
        text-align: center;
        vertical-align: middle;
        background: #d6249f;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        border: none;
    }

    .insta_icon, .github-icon, .linkedin-icon {
        color: white;
    }

    .btn {
        border-radius: 25%;
        margin: 0 .2em;
    }

    .social-links {
        position: relative;
        padding-left: .5em;
    }
</style>