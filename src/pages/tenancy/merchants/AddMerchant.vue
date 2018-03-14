<template>
    <div>
        <blank-head title="添加商户"></blank-head>
        <el-row class="commonbox">
            <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">商户名称</span>
                    <input class="inputtext" type="text" placeholder="请输入商户名称">
                </div>
                <div class="dialoginput">
                    <span class="inputname">英文名称</span>
                    <input class="inputtext" type="text" placeholder="请输入英文名称">
                </div>
                <div class="dialoginput">
                    <span class="inputname">商户性质</span>
                    <el-select v-model="value" placeholder="选填" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">公司名称</span>
                    <input class="inputtext" type="text" placeholder="选填">
                </div>
            </el-col>
            <el-col :span="12"></el-col>
            <el-col :span="24" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">地址</span>
                    <input class="inputtext" type="text" placeholder="选填">
                </div>
            </el-col>
        </el-row>
        <blank-head title="联系人"></blank-head>
        <blank-head title="证件信息"></blank-head>
    </div>
</template>

<script>
    import BlankHead from '../../../components/BlankHead'
    export default {
        name: "add-merchant",
        components:{
            BlankHead
        }
    }
</script>

<style scoped>

</style>