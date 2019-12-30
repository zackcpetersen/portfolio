<template>
    <div class="portfolio-list container">
        <h1>Software Engineer Portfolio</h1>
        <p>{{ list.description }}</p>

        <div class="tagList ">
                <li v-for="(tag, index) in list.tags" :key="index" class="tags">{{ tag }}</li>
        </div>

        <p class="my-4">Use tags to filter by project type or technology</p>
        <hr>

        <PortfolioView />
    </div>
</template>

<script>
    import PortfolioView from "./PortfolioView";

    export default {
        name: "PortfolioList",
        components: {
            PortfolioView
        },
        data() {
            return {
                list: {
                    description: 'From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. ' +
                        'Check out my latest web software development portfolio projects.',
                    tags: ['VUEJS', 'FIREBASE', 'FRONT-END', 'BACKEND', 'PYTHON', 'DJANGO', 'MARKETING',
                        'POSTGRESQL', 'UX/UI DESIGN', 'JAVASCRIPT', 'GOOGLE SCRIPTS']
                }
            }
        }
    }
</script>

<style>
    .tags {
        display: inline-block;
        white-space: pre-wrap;
        border: solid black 1px;
        margin: 4px;
        padding: 4px;
    }
</style>
