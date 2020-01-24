<template>
    <div class="social-links">
                <a class="btn btn-lg btn-social-icon btn-instagram instagram social-link"
                   href="https://www.instagram.com/zackcpetersen/" target="_blank" rel="noopener noreferrer">
                    <span class="fab fa-instagram insta_icon"></span>
                </a>
                <a class="btn btn-lg btn-social-icon btn-github social-link" href="https://github.com/zackcpetersen"
                   target="_blank"
                   rel="noopener noreferrer">
                    <span class="fab fa-github github-icon"></span>
                </a>
                <a class="btn btn-lg btn-social-icon btn-linkedin social-link" href="https://www.linkedin.com/in/zackcpetersen/"
                   target="_blank" rel="noopener noreferrer">
                    <span class="fab fa-linkedin-in linkedin-icon"></span>
                </a>
            </div>
</template>

<script>
    export default {
        name: "SocialLinks"
    }
</script>

<style>
    .instagram {
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        border: none;
    }

    .insta_icon, .github-icon, .linkedin-icon {
        color: white;
    }

    .social-link {
        border-radius: 25%;
        margin: 0 .2em;
    }
</style>