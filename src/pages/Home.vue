<template>
    <div>
        <erp-header></erp-header>
        <h2>ERP项目首页</h2>
        <erp-footer></erp-footer>
    </div>
</template>

<script>
    import ErpHeader from '../components/IHeader'
    import ErpFooter from '../components/Footer'
    export default {
        name: "erphome",
        components:{
            ErpHeader,
            ErpFooter
        }
    }
</script>

<style scoped>

</style>
