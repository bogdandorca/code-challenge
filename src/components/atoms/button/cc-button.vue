<template>
    <button :class="type"
            :disabled="disabled"
            @click="$emit('click')">
        {{text}}
    </button>
</template>

<script>
    export default {
        name: 'CcButton',
        props: {
            type: {
                default: 'default',
                type: String,
                validator: function(val) {
                    const acceptedValues = ['default', 'primary', 'secondary', 'warning', 'error'];
                    return acceptedValues.indexOf(val) !== -1;
                }
            },
            disabled: {
                default: false,
                type: Boolean
            },
            text: {
                default: 'Click',
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';
    button {
        border-radius: 2px;
        padding: 10px 20px;
        border: none;
        font-size: 14px;
        box-shadow: $shadow-low;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        cursor: pointer;

        // Button types
        &.default {
            background-color: $color-white;
            color: $color-primary;
            border: 2px solid $color-primary;
        }
        &.primary {
            background-color: $color-primary;
            color: $color-white;
        }
        &.warning {
            background-color: $color-warning;
            color: $color-white;
        }
        &.error {
            background-color: $color-error;
            color: $color-white;
        }

        // Button states
        &:hover {
            box-shadow: $shadow-mid;
        }
        &:focus {
            outline: none;
        }
        &:disabled {
            cursor: default;
            background-color: $color-grey-lighter;
            color: $color-white;
            box-shadow: none;

            &:hover {
                box-shadow: none;
            }
        }
    }
</style>