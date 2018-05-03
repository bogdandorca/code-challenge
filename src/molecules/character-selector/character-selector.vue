<template>
    <div class="hero-selector">
        <cc-select
                :name="name"
                :options="characters"
                :label="label"
                defaultText="-- select a character --"
                valueKey="id"
                textKey="name">
        </cc-select>
    </div>
</template>

<script>
    import ccSelect from '../../atoms/select/cc-select.vue';

    export default {
        name: 'character-selector',
        props: {
            name: {
                type: String,
                required: true
            },
            label: String
        },
        components: {
            'cc-select': ccSelect
        },
        computed: {
            characters: function() {
                return this.$store.getters.characters
            }
        }
    }
</script>