<template>
    <div class="table-state">{{tableState}}</div>
</template>

<script>
    export default {
        name: 'CcTableState',
        computed: {
            tableState() {
                return this.$store.getters.tableState;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/variables';

    .table-state {
        width: 30%;
        margin: 20px auto 0;
        text-align: center;
        font-size: $font-size-body;
        font-family: $font-family-body;
    }
</style>