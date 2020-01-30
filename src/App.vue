<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                app
                temporary
        >
            <NavDrawer />
        </v-navigation-drawer>
        <v-app-bar
                app
                dark
                fixed
        >
            <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer"/>
        </v-app-bar>
        <v-content>
            <v-container>
                <v-row justify="center">
                    <v-col>
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

    .first-header {
        color: #AB47BC;
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
