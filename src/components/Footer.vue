<template>
    <v-container>
        <v-footer
                :padless="padless"
        >
            <v-card
                    flat
                    tile
                    width="100%"
                    class="text-center"
                    color="rgba(0, 0, 0, 0.0)"
            >
                <p><strong>Let's Talk!</strong></p>
                <p>Wanna get in touch? Feel Free to contact me at
                    <br><strong>- <a href="mailto:zackcpetersen@gmail.com">zackcpetersen@gmail.com</a></strong>
                    <br><strong>- <a href="tel:3854045953">(385) 404-5953</a></strong>
                    <br>or leave me a message on the <strong>
                        <router-link :to="{ name: 'Contact' }" class="link">contact page!
                        </router-link>
                    </strong></p>
            </v-card>
        </v-footer>
    </v-container>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style>
</style>