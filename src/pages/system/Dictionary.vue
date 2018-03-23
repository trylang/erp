<template>
    <div>
        <con-head title="数据字典管理">
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox maincont">
                <div class="maincontL">
                    <ul>
                        <li class="active">1.010001（合同经营方式）<span>√</span></li>
                        <li>2.010002（合同结算等级）</li>
                    </ul>
                </div>
                <div class="maincontR">
                    <el-row>
                        <el-col :span="24" class="titletxt">
                            <span class="h3">■ 合同经营方式</span>
                        </el-col>
                        <el-col :span="24">
                            <div class="listbox">
                                <div class="listcont" v-for="(lists,index) in list">
                                    <div class="listcolum listskin">
                                        <span>名称：</span>
                                        {{lists.name}}
                                    </div>
                                    <div class="listcolum listskin">
                                        <span>编码：</span>
                                        {{lists.number}}
                                    </div>
                                    <div class="listcolum listskin">
                                        <span>顺序：</span>
                                        {{index+1}}
                                        <span v-if="index!==0"><img src="../../assets/up.png" alt=""></span>
                                        <span v-if="index !== list.length-1"><img src="../../assets/down.png" alt=""></span>
                                    </div>
                                    <div class="status">
                                        <span>状态：</span>
                                        {{lists.isDisabled == true?'启用':'禁用'}}
                                    </div>
                                    <div class="statusbtn">
                                        <button class="btnenable">保存</button>
                                        <button class="btnenable">取消</button>
                                    </div>
                                </div>
                                <div class="listcont" v-show="isadditem">
                                    <div class="listcolum listskin">
                                        <span>名称：</span>
                                        <input type="text">
                                    </div>
                                    <div class="listcolum listskin">
                                        <span>编码：</span>
                                        <input type="text">
                                    </div>
                                    <div class="listcolum listskin">
                                        <span>顺序：</span>
                                        {{list.length+1}}
                                        <!--<span><img src="../../assets/up.png" alt=""></span>
                                        <span><img src="../../assets/down.png" alt=""></span>-->
                                    </div>
                                    <div class="status">
                                        <span>状态：</span>
                                    </div>
                                    <div class="statusbtn">
                                        <button class="btnenable">保存</button>
                                        <button class="btnenable">取消</button>
                                    </div>
                                </div>
                            </div>
                            <div class="listcont"><el-button icon="el-icon-plus" @click="addItem">继续添加</el-button></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    export default {
        name: "dictionary",
        data(){
            return{
                isadditem:false,
                list:[{
                    name:'租赁',
                    number:'001002',
                    isDisabled:true
                },{
                    name:'自营',
                    number:'001002',
                    isDisabled:true
                },{
                    name:'联营',
                    number:'001002',
                    isDisabled:false
                }]
            }
        },
        mounted(){
            this.getDictList();
        },
        methods:{
            addItem(){
                this.isadditem = true;
            },
            async getDictList(){
                await this.$api.systemapi.typeListUsingGET({
                    nameOrCode:''
                }).then(res=>{
                    this.dataList = res.data.data;
                })
            }
        },
        components:{
            ConHead
        }
    }
</script>

<style scoped>
    .maincont{
        min-height: 300px;
        display: flex;
        flex-direction: row;
    }
    .maincontL{
        width: 260px;
        height: auto;
        border: 1px solid #e6e6e6;
        padding: 15px;
    }
    .maincontL li{
        font-size: 14px;
        color: #999;
        margin-bottom: 10px;
    }
    .maincontL li.active{
        color: #457fcf;
    }
    .maincontR{
        height: auto;
        margin-left: 20px;
        flex: 1;
        border: 1px solid #e6e6e6;
        padding: 15px;
    }
    .maincontR .h3{
        color: #353c5f;
        font-size: 16px;
        font-weight: bold;
    }
    .statusbtn button{
        background: none;
        border: none;
        font-weight: bold;
        width: 40px;
        text-align: left;
        margin-left: 20px;
        cursor: pointer;
    }
    .statusbtn button.btnenable{
        color: #457fcf;
    }
    .statusbtn button.btndisable{
        color: #ff5400;
    }
</style>