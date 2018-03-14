<template>
    <div id="app">
        <div class="container">
            <div class="aside">
                <div class="logo">
                    <router-link to="/"><img src="../assets/logo.png"></router-link>
                </div>
                <erp-menu></erp-menu>
            </div>
            <div class="main">
                <erp-header></erp-header>
                <div class="wrapper">
                     <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ErpHeader from '../components/Header';
    import ErpMenu from '../components/Menu';
    export default {
        name: "erpweb",
        components:{
            ErpHeader,
            ErpMenu
        }
    }
</script>

<style scoped>

</style>