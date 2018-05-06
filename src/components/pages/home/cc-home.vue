<template>
    <div class="home">
        <cc-header></cc-header>
        <cc-finder></cc-finder>
        <cc-comics-table></cc-comics-table>
    </div>
</template>

<script>
    import CcHeader from '../../organisms/header/cc-header.vue';
    import CcFinder from '../../organisms/finder/cc-finder.vue';
    import CcComicsTable from '../../organisms/comics-table/cc-comics-table.vue';

    export default {
        name: 'CcHome',
        components: {
            'cc-header': CcHeader,
            'cc-finder': CcFinder,
            'cc-comics-table': CcComicsTable
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
                    this.$store.dispatch('setComics', []);
                }
            }
        }
    }
</script>