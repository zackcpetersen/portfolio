<template>
    <v-container>
        <strong>Let's Talk!</strong>
        <p>Wanna get in touch? Feel Free to contact with the buttons below or by using the
            <router-link :to="{ name: 'Contact' }" class="link">
                <strong>contact page!</strong>
            </router-link>
        </p>
        <v-btn class="mx-4" icon :to="{ name: 'About' }">
            <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn class="mx-4" icon href="mailto:zackcpetersen@gmail.com">
            <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-btn class="mx-4" icon href="tel:3854045953">
            <v-icon>mdi-phone</v-icon>
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