<template>
    <tr>
        <td v-for="(key, index) in rowDataKeys"
            :key="index">
            {{rowData[key]}}
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'CcTableRow',
        props: {
            rowData: {
                type: Object,
                required: true
            }
        },
        computed: {
            rowDataKeys() {
                return Object.keys(this.rowData);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';

    td {
        border: solid 1px $color-grey-light;
        color: #333;
        padding: 10px;
        text-shadow: 1px 1px 1px #fff;
    }
</style>