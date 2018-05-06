<template>
    <header :style="`background-image: url(${heroWallpaper})`">
        <h1>Marvel Match Finder</h1>
        <p>This tool will find the comics with selected characters in the form</p>
    </header>
</template>

<script>
    // Workaround for a current issue in parcel
    import heroWallpaper from '../../../assets/images/heroes-wallpaper.jpg';

    export default {
        name: 'cc-header',
        computed: {
            heroWallpaper() {
                return heroWallpaper;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';
    @import '../../../assets/styles/base';

    header {
        width: 98%;
        height: 300px;
        margin: 1vw auto 0;
        background-size: cover;
        text-align: center;
        color: $color-white;
        padding-top: 5%;
    }

    h1 {
        font-size: $font-size-h1;
    }

    p {
        font-family: $font-family-body;
        font-size: $font-size-sub-title;
        font-weight: 100;
        margin: 0;
    }
</style>