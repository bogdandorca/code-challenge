<template>
    <div class="comics-table">
        <div v-if="comics.length">
            <h2>Comics the characters appeared in:</h2>
            <cc-table :table-data="comics"></cc-table>
        </div>
        <cc-table-state v-else></cc-table-state>
    </div>
</template>

<script>
    import CcTable from '../../molecules/table/cc-table.vue';
    import CcTableState from '../../molecules/table-state/cc-table-state.vue';

    export default {
        name: 'CcComicsTable',
        components: {
            CcTableState,
            'cc-table': CcTable,
            'cc-table-state': CcTableState
        },
        computed: {
            comics() {
                return this.$store.getters.comics;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';

    .comics-table {
        width: 98%;
        margin: 20px auto 0;
    }

    h2 {
        margin: 0 0 10px;
        font-family: $font-family-heading;
    }
</style>