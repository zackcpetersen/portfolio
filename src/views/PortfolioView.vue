<template>
    <div class="portfolio-view container">
        <h1>{{ project.name }}</h1>
        <a v-if="project.url" :href="project.url">Visit Website</a>

        <div v-for="(image, index) in project.images" :key="index">
            <img :src="image.url" alt="" class="slider" />
        </div>
        <hr>

        <h2>About This Project</h2>
        <p>{{ project.about }}</p>
        <hr>

        <h2>Technical Sheet</h2>
        <p>Technology I used to create this project</p>
        <ul>
            <li v-for="(tech, index) in project.technology.sheet" :key="index" class="techSheet">{{ tech }}</li>
        </ul>

        <h2>Resources</h2>
        <ul>
            <li v-for="(resource, index) in project.resources" :key="index" v-html="resource" class="resources">
                {{ resource }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "PortfolioView",
        data() {
            return {
                project: {
                    name: 'Zack\'s Project',
                    url: 'https://www.behance.com',
                    githubUrl: 'https://github.com/zackcpetersen/portfolio',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    old: ['@/assets/friends.jpg', '@/assets/liqueur.jpg', '@/assets/logo.jpg'],
                    imageTest: require('@/assets/logo.jpg'),
                    images: [
                        {url: require('@/assets/friends.jpg')},
                        {url: require('@/assets/liqueur.jpg')},
                        {url: require('@/assets/logo.jpg')}
                    ],
                    technology: {
                        sheet: ['UX/UI Design', 'UX/UI Animations', 'UX/UI Architecture', 'Vue.js', 'Firebase', 'HTML5',
                            'Bootstrap', 'Material']
                    },
                    resources:
                        [`See this project live at <a href="https://www.behance.com">https://www.behance.com</a>`,
                            `See project source at <a href="https://github.com/zackcpetersen/portfolio">GITHUB</a>`]
                }
            }
        }
    }
</script>

<style>
    .resources {
        list-style-type: none;
        text-align: left;
    }
    .techSheet {
        text-align: left;
    }
    img {
        max-width: 100%;
        margin: 5px;
    }
</style>
