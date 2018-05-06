<template>
    <div class="home">
        <cc-header></cc-header>
        <cc-finder></cc-finder>
    </div>
</template>

<script>
    import CcHeader from '../../organisms/header/cc-header.vue';
    import CcFinder from '../../organisms/finder/cc-finder.vue';

    export default {
        name: 'CcHome',
        components: {
            'cc-header': CcHeader,
            'cc-finder': CcFinder
        },
        watch: {
            $route: function() {
                this.setComicsList();
            }
        },
        mounted() {
            this.initSelectedCharacters();
            this.setComicsList();
        },
        methods: {
            initSelectedCharacters() {
                const query = this.$route.query;
                const characters = {
                    character1: query.character1 || '',
                    character2: query.character2 || ''
                };

                this.$store.dispatch('setSelectedCharacters', characters);
            },
            setComicsList() {
                const selectedCharacters = this.$route.query;

                if (selectedCharacters.character1 && selectedCharacters.character2) {
                    this.$store.dispatch('setComicsByCharacters', selectedCharacters);
                } else {
                    this.store.dispatch('setComics', []);
                }
            }
        }
    }
</script>