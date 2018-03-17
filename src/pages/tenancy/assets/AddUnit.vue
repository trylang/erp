<template>
    <div class="savebox">
        <div class="savecont">
            <con-head title="添加单元"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">单元号</span>
                    <input class="inputtext" type="text" placeholder="请输入单元号">
                </div>
                <div class="dialoginput">
                    <span class="inputname">购物中心</span>
                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">楼宇</span>
                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">楼层</span>
                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">建筑面积</span>
                    <input class="inputtext" type="text" placeholder="请输入建筑面积">
                    <span class="dialogtext">㎡</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">使用面积</span>
                    <input class="inputtext" type="text" placeholder="请输入使用面积">
                    <span class="dialogtext">㎡</span>
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" placeholder="选填"></textarea>
                </div>
                </el-col>
            </el-row>
        </div>
        <div class="savebtn"><button>提交</button></div>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import BlankHead from '../../../components/BlankHead'
    export default {
        name: "add-user",
        data(){
            return{
                radio: '1'
            }
        },
        components:{
            ConHead,
            BlankHead
        }
    }
</script>

<style scoped>

</style>