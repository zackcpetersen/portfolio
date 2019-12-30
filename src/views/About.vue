<template>
    <div class="about container">
        <h1>About Me</h1>
        <h2>{{ myName }}</h2>
        <p>{{ aboutMe }}</p>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                aboutMe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
                    ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                    ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
                    ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
                    ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                myName: 'Hello, my name is Zack Petersen'
            }
        }
    }
</script>

<style>

</style>
