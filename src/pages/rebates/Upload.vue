<template>
    <div class="savebox">
        <div class="el-tabs__content">
            <blank-head title="销售数据导入"></blank-head>
            <div class="commonbox">
                <el-row class="dialogbox">
                    <el-col :span="10">
                        <div class="dialoginput">
                            <span class="inputname">任务名称</span>
                            <input class="inputtext" type="text" placeholder="请输入任务名称">
                        </div>
                        <div class="dialoginput">
                            <span class="inputname">文件类型</span>
                            <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="dialoginput">
                            <span class="inputname">上传文件</span>
                            <input class="inputtext" type="text" placeholder="请上传文件">
                            <span>图标</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="savebtn">
            <button>保存</button>
        </div>
    </div>
</template>

<script>
    import BlankHead from '../../components/BlankHead'

    export default {
        name: "contract1",
        data() {
            return {
                activeName2: '0',
                isShow: false,
                datevalue: '',
                onedatevalue:'',
                list:[{
                    name:'B1-40B',
                    number:'117.98㎡',
                },{
                    name:'B1-40B',
                    number:'117.98㎡',
                },{
                    name:'B1-40B',
                    number:'117.98㎡',
                }]
            };
        },
        created(){
            setTimeout(()=>{
                this.activeName2 = localStorage.getItem('activeName2')
            },0);
        },
        methods: {
            next(number) {
                this.activeName2 = parseInt(this.activeName2) + 1 + '';
                localStorage.setItem('activeName2', this.activeName2);
                if (this.activeName2 == '6') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            },
            handleClick() {
                localStorage.setItem('activeName2', this.activeName2);
                if (this.activeName2 == '6') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            }
        },
        components: {
            BlankHead
        }
    }
</script>

<style scoped>

</style>