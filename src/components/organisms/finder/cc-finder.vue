<template>
    <div class="finder">
        <h3>Select a couple of characters</h3>

        <character-selector name="character1"
                            label="Character 1:">
        </character-selector>

        <character-selector name="character2"
                            label="Character 2:">
        </character-selector>

        <cc-button :disabled="buttonIsDisabled"
                   text="Buscar comics"
                   type="primary"
                   @click="selectCharacters"></cc-button>
    </div>
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
            },
            buttonIsDisabled() {
                return !(this.selectedCharacters.character1 && this.selectedCharacters.character2);
            }
        },
        methods: {
            selectCharacters() {
                const selectedCharacters = this.$store.getters.selectedCharacters;

                if (selectedCharacters.character1 && selectedCharacters.character2) {
                    this.updateRouteParams();
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

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';

    .finder {
        width: 40%;
        height: 270px;
        margin: -135px auto 0;
        box-sizing: border-box;
        padding: 20px;
        color: $color-grey-dark;
        font-family: $font-family-body;
        background-color: $color-white;
        border-radius: 2px;
        box-shadow: $shadow-mid;
    }

    .characters-selected {
        margin-top: -270px;
    }

    h3 {
        margin: 0;
        padding-bottom: 10px;
        font-family: $font-family-heading;
    }

    button {
        margin-top: 10px;
    }
</style>