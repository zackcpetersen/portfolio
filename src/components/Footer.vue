<template>

        <v-container>
            <strong>Let's Talk!</strong>
            <p>Wanna get in touch? Feel Free to contact with the options below or by using the
                <router-link :to="{ name: 'Contact' }" class="link">
                    <strong>contact page!</strong>
                </router-link>
            </p>
            <v-btn class="mx-4" icon :to="{ name: 'About' }" exact>
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn class="mx-4" icon href="mailto:zackcpetersen@gmail.com" exact>
                <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn class="mx-4" icon href="sms:3854045953" exact>
                <v-icon>mdi-message-text</v-icon>
            </v-btn>
        </v-container>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style>
</style>