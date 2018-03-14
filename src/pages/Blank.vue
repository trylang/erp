<template>
    <div id="app">
        <div class="blankbox">
            <erp-header></erp-header>
            <div class="blankcont">
                <div class="wrapper">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ErpHeader from '../components/IHeader'
    import ErpFooter from '../components/Footer'

    export default{
        name: "erpwebinner",
    	components:{
            ErpHeader,
            ErpFooter
    	}
    }
</script>

<style scoped>
    .blankbox{
        display: -webkit-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        min-width: 0;
        height: 100%;
    }
    .blankcont{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        min-width: 0;
    }
</style>