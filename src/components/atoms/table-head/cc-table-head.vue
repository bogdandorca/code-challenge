<template>
    <thead>
        <tr>
            <th v-for="(columnName, index) in columnNames"
                :key="index">
                {{columnName}}
            </th>
        </tr>
    </thead>
</template>

<script>
    export default {
        name: 'CcTableHead',
        props: {
            columnNames: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';

    th {
        border: solid 1px $color-grey-light;
        color: $color-primary;
        padding: 10px;
        text-align: left;
        text-transform: capitalize;
    }
</style>