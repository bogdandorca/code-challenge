<template>
    <fieldset class="finder">
        <legend>Select a couple of characters</legend>

        <character-selector name="character1" label="Character 1:"></character-selector>

        <character-selector name="character2" label="Character 2:"></character-selector>

        <cc-button text="Buscar comics" type="primary" @click="selectCharacters"></cc-button>
    </fieldset>
</template>

<script>
    import CcButton from '../../atoms/button/cc-button.vue';
    import CcCharacterSelector from '../../molecules/character-selector/cc-character-selector.vue';

    export default {
        name: 'CcFinder',
        components: {
            'cc-button': CcButton,
            'character-selector': CcCharacterSelector
        },
        computed: {
            selectedCharacters() {
                return this.$store.getters.selectedCharacters;
            }
        },
        methods: {
            selectCharacters() {
                const selectedCharacters = this.$store.getters.selectedCharacters;

                if (selectedCharacters.character1 && selectedCharacters.character2) {
                    this.updateRouteParams();
                } else {
                    // TODO: ERROR
                }
            },
            updateRouteParams() {
                this.$router.push({
                    name: '',
                    query: this.selectedCharacters
                });
            }
        }
    }
</script>