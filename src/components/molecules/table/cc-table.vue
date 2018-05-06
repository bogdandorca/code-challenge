<template>
    <table>
        <cc-table-head :column-names="columnNames"></cc-table-head>
        <tbody>
            <cc-table-row v-for="(data, index) in tableData"
                          :row-data="data"
                          :key="index">
            </cc-table-row>
        </tbody>
    </table>
</template>

<script>
    import CcTableRow from '../../atoms/table-row/cc-table-row.vue';
    import CcTableHead from '../../atoms/table-head/cc-table-head.vue';

    export default {
        name: 'CcTable',
        components: {
            'cc-table-row': CcTableRow,
            'cc-table-head': CcTableHead
        },
        props: {
            tableData: Array
        },
        computed: {
            columnNames() {
                const sampleData = this.tableData[0] || {};
                return Object.keys(sampleData);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';

    table {
        border: solid 1px $color-grey-light;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: $font-size-body;
        font-family: $font-family-body;
    }
</style>