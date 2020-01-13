<template>
    <div id="app">
        <Navbar id="navbar"/>
        <div class="content">
            <router-view id="page-wrap"/>
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
        margin-top: 4em;
    }
</style>
<script>
    import Navbar from "./components/Navbar";
    export default {
        components: {Navbar}
    }
</script>