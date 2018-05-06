<template>
    <label :for="uniqueId">

        {{label}}

        <select :id="uniqueId"
                :name="name"
                :value="value"
                @change="$emit('change', $event.target.value)">

            <option disabled value="">{{defaultText}}</option>

            <option v-for="(option, index) in options"
                    :key="index"
                    :selected="option[valueKey] === value"
                    :value="option[valueKey]">
                {{option[textKey]}}
            </option>
        </select>
    </label>
</template>

<script>
    export default {
        name: 'CcSelect',
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

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';

    select {
        width: 100%;
        height: 35px;
        padding: 10px;
        border: 1px solid $color-grey-light;
        border-radius: 2px;
        font-size: 14px;
        display: block;
        &:focus {
            outline: none;
        }
    }
</style>