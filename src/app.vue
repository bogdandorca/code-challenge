<template>
    <div class="content">
        <cc-header></cc-header>
        <cc-finder></cc-finder>
    </div>
</template>

<script>
    import store from './store';

    import ccHeader from './organisms/header/header.vue';
    import ccFinder from './organisms/finder/finder.vue';

    export default {
        name: 'App',
        components: {
            'cc-header': ccHeader,
            'cc-finder': ccFinder
        },
        store
    }
</script>