<template>
    <label :for="uniqueId">{{label}}
        <select :id="uniqueId"
                :name="name"
                :value="value"
                v-on:change="$emit('change', $event.target.value)">

            <option disabled value="">{{defaultText}}</option>
            <option v-for="(option, index) in options"
                    @click="$emit('')"
                    :value="option[valueKey]">
                {{option[textKey]}}
            </option>
        </select>
    </label>
</template>

<script>
    export default {
        name: 'cc-select',
        props: {
            name: {
                type: String,
                required: true
            },
            options: {
                type: Array,
                required: true
            },
            valueKey: {
                type: String,
                default: 'value'
            },
            textKey: {
                type: String,
                default: 'text'
            },
            uniqueId: {
                default: Math.random().toString(36).substring(6),
                type: String
            },
            defaultText: String,
            label: String,
            value: String
        }
    }
</script>

<style lang="scss">
    @import '../../assets/styles/variables';

    select {
        padding: 10px;
        border-radius: 2px;
        border: 1px solid $color-grey-light;
        font-size: 14px;
        &:focus {
            outline: none;
        }
    }
</style>