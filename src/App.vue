<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                app
                temporary
        ><NavDrawer />

        </v-navigation-drawer>
        <v-app-bar
                app
                dark
                fixed
        ><v-app-bar-nav-icon x-large @click.stop="drawer = !drawer"/>

        </v-app-bar>
        <v-main>
            <v-container>
                <v-row justify="center">
                    <v-col>
                        <router-view/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer :padless="true" absolute app>
            <Footer/>
        </v-footer>
    </v-app>
</template>

<style>
    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    h1 {
        text-align: left;
    }

    .v-application a {
        text-decoration: none;
    }

    /* global styles for medium articles */
    h1.medium {
        margin-bottom: 17px;

    }

    h2.medium {
        margin: 30px 0 0 0;
        margin-bottom: 18px;
        margin-top: 33px;
    }

    h3.medium {
        margin: 10px 0 20px 0;
        text-align: center;
    }

    pre.medium {
        overflow-x: scroll;
    }

    img.medium {
        max-width: 95%;
        display: block;
        margin: 20px auto;
    }

    footer.medium {
        padding: 0 20px;
        margin: 50px 0;
        text-align: center;
        font-size: 12px;
    }
</style>
<script>
    import NavDrawer from "./components/NavDrawer";
    import Footer from "./components/Footer";

    export default {
        components: {
            Footer,
            NavDrawer
        },
        data() {
            return {
                drawer: false,
            }
        }
    }
</script>
