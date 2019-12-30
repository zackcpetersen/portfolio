<template>
    <div class="portfolio-view container">
        <div class="title">
            <h1>{{ project.name }}</h1>
            <a v-if="project.liveUrl" :href="project.liveUrl">Visit Website</a>
        </div>

        <div class="slider">
            <div v-for="(image, index) in project.images" :key="index">
                <img :src="image.url" alt=""/>
            </div>
            <hr>
        </div>

        <div class="about">
            <h2>About This Project</h2>
            <p>{{ project.description }}</p>
            <hr>
        </div>

        <div class="techSheet">
            <h2>Technical Sheet</h2>
            <p>Technology I used to create this project</p>
            <ul>
                <li v-for="(tech, index) in project.technology" :key="index" class="techList">{{ tech }}</li>
            </ul>
        </div>

        <div class="resources">
            <h2>Resources</h2>
            <div class="resourceList">
                <p v-if="project.liveUrl" class="my-1">
                    See this project live at <a :href="project.liveUrl">{{ project.liveUrl }}</a>
                </p>
                <p v-if="project.githubUrl">
                    See project source at <a :href="project.githubUrl">GITHUB</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import db from '@/firebase/init'

    export default {
        name: "PortfolioView",
        data() {
            return {
                project: null,
                // project: {
                //     name: 'Portfolio Website',
                //     liveUrl: 'https://www.behance.com',
                //     slug: 'portfolio-website',
                //     githubUrl: 'https://github.com/zackcpetersen/portfolio',
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                //     images: [
                //         {url: require('@/assets/friends.jpg')},
                //         {url: require('@/assets/liqueur.jpg')},
                //         {url: require('@/assets/logo.jpg')}
                //     ],
                //     technology: {
                //         sheet: ['UX/UI Design', 'UX/UI Animations', 'UX/UI Architecture', 'Vue.js', 'Firebase', 'HTML5',
                //             'Bootstrap', 'Material']
                //     },
                //     resources:
                //         [`See this project live at <a href="https://www.behance.com">https://www.behance.com</a>`,
                //             `See project source at <a href="https://github.com/zackcpetersen/portfolio">GITHUB</a>`]
                // },
                feedback: null,
            }
        },
        methods: {},
        created() {
            let ref = db.collection('projects').where(
                'slug',
                '==',
                this.$route.params.project_slug)
            ref.get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.project = doc.data()
                    this.project.id = doc.id
                })
            })
        }
    }
</script>

<style>
    div.resourceList {
        list-style-type: none;
        text-align: left;
        padding-bottom: 7em;
    }

    li.techList {
        text-align: left;
    }

    img {
        max-width: 100%;
        margin: 5px;
    }
    /*@media  {*/
    /*    div.resourceList {*/
    /*        padding-bottom: 5em;*/
    /*    }*/
    /*}*/
</style>
