<template>
    <fieldset class="finder">
        <legend>Select a couple of characters</legend>
        <character-selector name="first-character" label="Character 1:"></character-selector>
        <character-selector name="second-character" label="Character 2:"></character-selector>

        <cc-button text="Buscar comics" type="primary"></cc-button>
    </fieldset>
</template>

<script>
    import ccButton from '../../atoms/button/cc-button.vue';
    import characterSelector from '../../molecules/character-selector/character-selector.vue';

    export default {
        name: 'cc-finder',
        components: {
            'cc-button': ccButton,
            'character-selector': characterSelector
        }
    }
</script>