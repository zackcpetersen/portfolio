<template>
    <div v-if="project" class="portfolio-view container">
        <div class="title">
            <h1>{{ project.name }}</h1>
            <a v-if="project.liveUrl" :href="project.liveUrl">Visit Website</a>
        </div>

        <transition-group name="fade" tag="div">
            <div v-for="img in [imageIndex]" :key="img" class="slider">
                <img :src="currentImg" alt="" />
            </div>
        </transition-group>
        <a class="prev" @click="prevImage" href="#">&#10094; Previous</a>
        <a class="next" @click="nextImage" href="#">&#10095; Next</a>

        <div class="about mt-4">
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
                    See this project live at <a :href="project.liveUrl">{{ project.liveUrl.split("www.")[1] }}</a>
                </p>
                <p v-if="project.githubUrl">
                    See project source at <a :href="project.githubUrl">Github</a>
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
                feedback: null,
                imageIndex: 0,
            }
        },
        methods: {
            nextImage() {
                this.imageIndex += 1
            },
            prevImage() {
                this.imageIndex -= 1
            }
        },
        computed: {
            currentImg() {
                return this.project.images[Math.abs(this.imageIndex) % this.project.images.length]
            }
        },
        created() {
            let ref = db.collection('projects').where(
                'slug',
                '==',
                this.$route.params.project_slug)
            ref.get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.project = doc.data()
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
        max-height: 500px;
        margin: 5px;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        width: auto;
        top: 63%;
        padding: 16px;
        color: white;
        background: rgb(0, 0, 0, 0.4);
        font-weight: bold;
        font-size: 18px;
        transition: 0.7s ease;
        border-radius: 4px 4px 4px 4px;
        text-decoration: none;
        user-select: none;
    }

    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.7);
        color: white;
    }
    .slider img {
        max-width: 100%;
        border: 3px solid black;
        margin-top: 10px;
    }
</style>
