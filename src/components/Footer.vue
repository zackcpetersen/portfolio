<template>
    <div class="footer">
        <p><strong>Let's Talk!</strong></p>
        <p>Wanna get in touch? Feel Free to contact me at
            <br><strong>- <a href="mailto:zackcpetersen@gmail.com">zackcpetersen@gmail.com</a></strong>
            <br><strong>- <a href="tel:3854045953">(385) 404-5953</a></strong>
            <br>or leave me a message on the <strong><router-link :to="{ name: 'Contact' }" class="link">contact page!
            </router-link></strong></p>
    </div>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style>
    .footer {
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
        margin: 2em 0 2em 0;
    }
    .footer p {
        padding: 0 .5em;
    }

</style>