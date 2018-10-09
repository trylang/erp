<template>
    <div>
        <con-head title="签约统计（商铺业态）">
            <div class="echarts" style="width:100%; height:550px;">
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
    import 'echarts/lib/component/title';
    export default {
        data(){
            return{
                loading: false,
                pie: {
                    title : {
                        text: '签约业态占比',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        top:'center',
                        right: 20,
                        bottom: 20,
                        data: [],
                        padding: [0,20,10,10]
                    },
                    series : [
                        {
                            name: '签约统计',
                            type: 'pie',
                            radius : '70%',
                            center: ['50%', '55%'],
                            data:[],
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
            this.$api.reportapi.signTypeUsingGET().then(res=>{
                if(res.data.status === 200){
                    let newLegend = [];
                    this.pie.series[0].data = res.data.data;
                    res.data.data.forEach((item)=>{
                        newLegend.push(item.name);
                    })
                    this.pie.legend.data = newLegend;
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
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