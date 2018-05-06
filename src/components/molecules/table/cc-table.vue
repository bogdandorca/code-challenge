<template>
    <table>

    </table>
</template>

<script>
    import CcTableRow from '../../atoms/table-row/cc-table-row.vue';

    export default {
        name: 'CcTable',
        components: {
            'cc-table-row': CcTableRow
        },
        computed: {
            // TODO: Check if you can use arrow functions
            tableRows: function() {

            }
        }
    }
</script>