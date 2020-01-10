<template>
    <div v-if="project" class="portfolio-view container">
        <div class="title">
            <h1>{{ project.name }}</h1>
            <a v-if="project.liveUrl" :href="project.liveUrl" class="website btn btn-primary my-2">Visit Website</a>
        </div>

        <div class="row">
            <div class="col">
                <transition-group name="fade" tag="div">
                    <div v-for="img in [imageIndex]" :key="img" class="slider">
                        <img :src="currentImg" alt=""/>
                    </div>
                </transition-group>
                <a class="prev-button" @click="prevImage">
                    <span class="prev-symbol" href="#">&#10094;</span>
                </a>
                <a class="next-button" @click="nextImage">
                    <span class="next-symbol" href="#">&#10095;</span>
                </a>


            </div>
        </div>

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

        <hr>

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

    .prev-symbol, .next-symbol {
        color: black;
        opacity: .7;
        position: absolute;
        top: 35%;
    }

    .next-button, .prev-button {
        font-size: 5em;
        display: block;
        position: absolute;
        height: 100%;
        top: 0;
        width: 40%;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.0);
        padding: 0;
        text-decoration: none;
    }

    .next-symbol, .next-button {
        right: 0;
    }

    .prev-symbol, .prev-button {
        left: 0;
    }

    .prev-symbol:hover, .next-symbol:hover {
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
    }

    .slider img {
        justify-content: center;
        max-width: 95%;
        border: 3px solid black;
        margin-top: 10px;
    }

    h2 {
        /*text-align: left;*/
    }

    @media only screen and (min-width: 768px) {
        .next-symbol, .next-button {
            right: 1.5em;
        }

        .prev-symbol, .prev-button {
            left: 1.5em;
        }
        .next-button, .prev-button {
            width: 30%;
        }
    }
</style>
