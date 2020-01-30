<template>

        <v-container>
            <strong>Let's Talk!</strong>
            <p>Wanna get in touch? Feel Free to contact with the options below or by using the
                <router-link :to="{ name: 'Contact' }" class="link">
                    <strong>contact page!</strong>
                </router-link>
            </p>
            <v-btn class="mx-4" :to="{ name: 'About' }" icon ripple exact>
                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn v-for="link in links" :key="link.name" :href="link.link" class="mx-4" icon ripple exact>
                <v-icon>{{ link.icon }}</v-icon>
            </v-btn>
        </v-container>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                links: [
                    { link: 'mailto:zackcpetersen@gmail.com', icon: 'mdi-email', name: 'Email' },
                    { link: 'sms:3854045953', icon: 'mdi-message-text' }
                ]
            }
        }
    }
</script>

<style>
</style>