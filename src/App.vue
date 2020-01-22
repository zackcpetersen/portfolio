<template>
    <v-app>
        <v-container fluid>
            <v-row justify="center">
                <v-col lg="9">
                    <div id="app">
                        <Navbar id="navbar"/>
                        <div class="content" id="page-wrap">
                            <router-view/>
                            <Footer/>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
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
</style>
<script>
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";

    export default {
        components: {Footer, Navbar}
    }
</script>
