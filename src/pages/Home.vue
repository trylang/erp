<template>
    <div class="home">
        <!-- <erp-header></erp-header>
        <h2>ERP项目首页</h2>
        <erp-footer></erp-footer> -->
        <div class="content">
          <div class="time">
           您好，{{time}}
          </div>
          <div class="title">
            JOY CITY <span>云购物中心管理平台</span>
          </div>
        </div>
        <div class="btn-con">
          <el-button class="goin" @click="go">欢迎使用</el-button>
        </div>
        <div class="info">
          Copyright© 2017-2027 All Rights Reserved. 京ICP备11026916号-2 京公网安备110105014049西单大悦城有限公司
        </div>
    </div>
</template>

<script>
    import ErpHeader from '../components/IHeader'
    import ErpFooter from '../components/Footer'
    export default {
        name: "erphome",
        computed:{
          time(){
            const formatNumber = n => {
              n = n.toString()
              return n[1] ? n : '0' + n
            }
            let date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return `${year}年${formatNumber(month)}月${formatNumber(day)}`
          }
        },
        methods:{
          go(){
            let linkList = ['/inner','/finance','/rebates','/visual','/database','/system']
            linkList.forEach(item=>{
              if (this.$root.menus.indexOf(item)>=0) {
                this.$router.push(item)
                return
              }
            })

          }
        },
        components:{
            ErpHeader,
            ErpFooter
        }
    }
</script>

<style scoped lang="scss">
  .home{
    width: 100%;
    height: 100%;
    background-image: url(../assets/bgImg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 150px;
  }
  .content{
    width: 500px;
    margin: 0 auto;
    color: #fff;

    .title{
      font-size: 34px;
      font-weight: 400;
      font-style: italic;
      margin-top: 10px;
      span{
        font-size: 34px;
        font-weight: 400;
        font-style: normal;
        padding-left: 30px;
      }
    }
  }
  .btn-con{
     text-align: center;
     margin-top: 200px;
  }
  .goin{
    width: 300px;
    height: 50px;
    font-size: 18px;
    background-color: #4c83ff;
    border: none;
    color: #fff;
    letter-spacing:.2em;
    // font-weight: 500;
  }
  .info{
    position: fixed;
    bottom: 15px;
    text-align: center;
    width: 100%;
    color: #546783;
  }

</style>
