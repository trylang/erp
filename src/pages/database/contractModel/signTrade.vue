<template>
    <div>
        <con-head title="签约统计（商铺业态）">
            <div class="echarts" style="width:100%; height:450px;">
                <IEcharts :option="pie" :loading="loading" />
            </div>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import IEcharts from 'vue-echarts-v3/src/lite.js';
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/tooltip';
    export default {
        data(){
            return{
                loading: false,
                pie: {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        left: 'center',
                        top:'bottom',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '签约统计',
                            type: 'pie',
                            radius : '70%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
        },
        mounted(){
            // this.$api.systemapi.listUsingGET_6().then(res=>{
            //     let newLegend = [];
            //     this.pie.series[0].data = res.data.data;
            //     res.data.data.forEach((item)=>{
            //         newLegend.push(item.name);
            //     })
            //     this.pie.legend.data = newLegend;
            // }).catch(res=>{
            //     this.$message.error(res.data.msg);
            // })
        },
        methods:{
            
        },
        components:{
            ConHead,
            IEcharts
        }
    }
</script>

<style scoped>

</style>