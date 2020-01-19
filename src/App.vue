<template>
    <div id="app">
        <Navbar id="navbar"/>
        <div class="content" id="page-wrap">
            <router-view/>
            <Footer/>
        </div>
    </div>
</template>

<style>
    @import "assets/bootstrap-social.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .content {
        margin-top: 30%;
    }

    h1 {
        text-align: left;
        margin: 1em 0;
    }
</style>
<script>
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";

    export default {
        components: {Footer, Navbar}
    }
</script>
