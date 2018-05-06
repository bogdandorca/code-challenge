<template>
    <tr>
        <td v-for="(data, index) in rowData"
            :key="index">
            {{data}}
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'CcTableRow',
        props: {
            rowData: String
        }
    }
</script>