<template>
    <v-container>
        <v-row justify="center">
            <v-card
                    v-for="button in socialButtons" :key="button.text"
                    :href="button.link"
                    class="social-links mx-2"
                    :id="button.text"
                    ripple
                    hover
            >
                <v-icon large class="pa-1">{{ button.icon }}</v-icon>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "SocialLinks",
        data() {
            return {
                socialButtons: [
                    {icon: 'mdi-instagram', link: 'https://www.instagram.com/zackcpetersen', text: 'Instagram'},
                    {icon: 'mdi-github-circle', link: 'https://github.com/zackcpetersen', text: 'GitHub'},
                    {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/zackcpetersen/', text: 'LinkedIn'}
                ]
            }
        }
    }
</script>

<style>
    #Instagram {
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        border: none;
    }

    #LinkedIn {
        background: #0e76a8;
    }

    .social-links {
        border-radius: 25% !important;
    }
</style>