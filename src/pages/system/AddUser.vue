<template>
    <div class="savebox">
        <div class="savecont">
            <con-head title="创建用户"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">用户名</span>
                    <input class="inputtext" type="text" placeholder="请输入用户名">
                    <span class="textcount">0/20</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">密码</span>
                    <input class="inputtext" type="text" placeholder="请输入6-20位字母加数字组合">
                    <span class="textcount">0/20</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">角色</span>
                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">所属部门</span>
                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">职位</span>
                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                </el-col>
            </el-row>
            <blank-head title="员工信息"></blank-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">员工姓名</span>
                    <input class="inputtext" type="text" placeholder="请输入员工姓名">
                    <span class="textcount">0/10</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">手机号</span>
                    <input class="inputtext" type="text" placeholder="请输入手机号">
                </div>
                <div class="dialoginput">
                    <span class="inputname">邮箱</span>
                    <input class="inputtext" type="text" placeholder="(选填)">
                </div>
                <div class="dialoginput noline">
                    <span class="inputname">性别</span>
                    <div class="inputtext">
                        <el-radio v-model="radio" label="1">男</el-radio>
                        <el-radio v-model="radio" label="2">女</el-radio>
                    </div>
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" placeholder="选填"></textarea>
                    <span class="textcount">0/20</span>
                </div>
                <el-button type="primary" class="submitbtn">提交</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import BlankHead from '../../components/BlankHead'
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