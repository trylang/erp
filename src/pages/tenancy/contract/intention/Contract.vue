<template>
    <div class="savebox">
        <template>
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="1合同主体" name="1">
                    <blank-head title="合同信息"></blank-head>
                    <div class="commonbox">
                        <el-row>
                            <el-col :span="12" class="dialogbox">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同号</span>
                                    <input class="inputtext" type="text" placeholder="请输入合同号">
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同分类</span>
                                    <el-select v-model="value" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">销售计税类型</span>
                                    <el-select v-model="value" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="16" class="dialogbox">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">备注</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="请输入"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="2意向单元" name="2">配置管理1</el-tab-pane>
                <el-tab-pane label="3租金条款" name="3">角色管理1</el-tab-pane>
                <el-tab-pane label="4费用条款" name="4">
                    <input type="text">
                </el-tab-pane>
                <el-tab-pane label="5诚意金" name="5">角色管理1</el-tab-pane>
                <el-tab-pane label="6附件上传" name="6">角色管理1</el-tab-pane>
            </el-tabs>
        </template>
        <div class="savebtn" v-show="!isShow"><button @click="next()">保存并下一步</button></div>
        <div class="savebtn" v-show="isShow"><button>保存</button></div>
    </div>
</template>

<script>
    import BlankHead from '../../../../components/BlankHead'
    export default {
        name: "contract1",
        data() {
            return {
                activeName2: '1',
                isShow:false
            };
        },
        methods: {
            next(number){
                this.activeName2 = parseInt(this.activeName2)+1+'';
                console.log(this.activeName2)
                if(this.activeName2 == '6'){
                    this.isShow = true;
                }else{
                    this.isShow = false;
                }
            },
            handleClick(){
                if(this.activeName2 == '6'){
                    this.isShow = true;
                }else{
                    this.isShow = false;
                }
            }
        },
        components:{
            BlankHead
        }
    }
</script>

<style scoped>

</style>