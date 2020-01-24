<template>
    <v-app>
        <Navbar id="navbar"/>
        <v-content>
            <v-container>
                <v-row justify="center">
                    <v-col lg="9">
                        <router-view/>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer :padless="true" absolute app>
            <Footer/>
        </v-footer>
    </v-app>
</template>

<style>
    @import "assets/bootstrap-social.css";

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    .content {
        margin-top: 1.5em;
    }

    h1 {
        text-align: left;
        margin: 1em 0;
    }

    .first-header {
        color: #AB47BC;
    }
</style>
<script>
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";

    export default {
        components: {Footer, Navbar}
    }
</script>
