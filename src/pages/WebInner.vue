<template>
  <div id="app">
  	<erp-header></erp-header>
  	<div class="wrapper">
	    <router-view></router-view>
    </div>
    <erp-footer></erp-footer>
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

</style>