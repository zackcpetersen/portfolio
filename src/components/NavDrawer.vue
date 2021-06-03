<template>
<v-container>
        <v-list nav shaped>
             <v-list-item link v-for="link in links" :key="link.text" :to="{ name: link.route }" exact>
                <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    <v-divider />
    <socialLinks class="mt-5"/>
</v-container>
</template>

<script>
    import socialLinks from '@/components/socialLinks'

    export default {
        name: "NavDrawer",
        data() {
            return {
                collapseOnScroll: true,
                links: [
                    { icon: 'mdi-home', text: 'Home', route: 'About' },
                    { icon: 'mdi-account-box', text: 'Contact', route: 'Contact' },
                    { icon: 'mdi-xml', text: 'Portfolio', route: 'PortfolioList' },
                ],
            }
        },
        components: {
            socialLinks,
        }
    }
</script>

<style>
</style>