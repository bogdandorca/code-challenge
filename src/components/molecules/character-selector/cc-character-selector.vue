<template>
    <div class="hero-selector">
        <cc-select :name="name"
                   :options="characters"
                   :label="label"
                   :value="value"
                   default-text="-- select a character --"
                   value-key="name"
                   text-key="name"
                   @change="change">
        </cc-select>
    </div>
</template>

<script>
    import CcSelect from '../../atoms/select/cc-select.vue';

    export default {
        name: 'CcCharacterSelector',
        components: {
            'cc-select': CcSelect
        },
        props: {
            name: {
                type: String,
                required: true
            },
            label: String
        },
        computed: {
            characters() {
                return this.$store.getters.characters;
            },
            value() {
                return this.$store.getters.selectedCharacters[this.name] || null;
            }
        },
        methods: {
            change(value) {
                const payload = {
                    key: this.name,
                    value
                };

                this.$store.dispatch('setSelectedCharacter', payload);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hero-selector {
        padding: 10px 0;
        width: 100%;
    }
</style>