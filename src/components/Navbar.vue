<template>
    <!--    <div class="nav">-->
    <!--        <Push>-->
    <!--            <router-link :to="{ name: 'About' }" class="link">ABOUT</router-link>-->
    <!--            <router-link :to="{ name: 'Contact' }" class="link">CONTACT</router-link>-->
    <!--            <router-link :to="{ name: 'PortfolioList' }" class="link">PORTFOLIO</router-link>-->
    <!--            <SocialLinks />-->
    <!--        </Push>-->

        <v-list>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-contact-mail</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title>Contact</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
</template>

<script>
    import {Push} from 'vue-burger-menu'
    import SocialLinks from "./SocialLinks";

    export default {
        name: "Navbar",
        data() {
            return {
                collapseOnScroll: true,
            }
        },
        components: {
            SocialLinks,
            Push
        }
    }
</script>

<style>
</style>