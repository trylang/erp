<template>
    <div class="savebox">
        <div class="savecont">
            <con-head title="创建用户"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">用户名</span>
                    <input class="inputtext" type="text" maxlength="20" placeholder="请输入用户名" v-model="addUser.username">
                    <span class="textcount">{{addUser.username.length}}/20</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">密码</span>
                    <input class="inputtext" type="password" maxlength="20" placeholder="请输入6-20位字母加数字组合" v-model="addUser.password">
                    <span class="textcount">{{addUser.password.length}}/20</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname" style="line-height: 40px;">角色</span>
                    <el-select v-model="addUser.roleSet" multiple value-key="id" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="(item,index) in roleList"
                                :key="index"
                                :label="item.roleName"
                                :value="item">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">所属部门</span>
                    <el-select v-model="addUser.departmentId" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="(item,index) in departmentsList"
                                :key="index"
                                :label="item.departmentName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">职位</span>
                    <el-select v-model="addUser.positionId" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="(item,index) in positionsList"
                                :key="index"
                                :label="item.positionName"
                                :value="item.id">
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
                    <input class="inputtext" type="text" maxlength="10" placeholder="请输入员工姓名" v-model="addUser.realname">
                    <span class="textcount">{{addUser.realname.length}}/10</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">手机号</span>
                    <input class="inputtext" type="text" maxlength="11" placeholder="请输入手机号" v-model="addUser.mobile">
                </div>
                <div class="dialoginput">
                    <span class="inputname">邮箱</span>
                    <input class="inputtext" type="text" placeholder="(选填)" v-model="addUser.email">
                </div>
                <div class="dialoginput noline">
                    <span class="inputname">性别</span>
                    <div class="inputtext">
                        <el-radio v-model="addUser.sex" label="1">男</el-radio>
                        <el-radio v-model="addUser.sex" label="2">女</el-radio>
                    </div>
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" maxlength="50" placeholder="选填" v-model="addUser.remark"></textarea>
                    <span class="textcount">{{addUser.remark.length}}/50</span>
                </div>
                <el-button type="primary" style="float:right" class="submitbtn" @click="submitÜserData()">提交</el-button>
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
                addUser:{
                    id:'',
                    username:'',
                    password:'',
                    roleSet:[],
                    departmentId:'',
                    positionId:'',
                    realname:'',
                    mobile:'',
                    email:'',
                    sex:'',
                    remark:''
                },
                departmentsList:[],
                positionsList:[],
                roleList:[],
            }
        },
        mounted(){
            this.getDepartmentsList();
            this.getPositionsList();
            this.getRoleList();
            this.getUserInfo();
        },
        methods:{
            async getDepartmentsList(){
                await this.$api.systemapi.listUsingGET({
                    pageNum:1,
                    pageSize:10,
                    name:''
                }).then(res=>{
                    this.departmentsList = res.data.data.list;
                })
            },
            async getPositionsList(){
                await this.$api.systemapi.listUsingGET_5({
                    pageNum:1,
                    pageSize:10,
                    name:''
                }).then(res=>{
                    this.positionsList = res.data.data.list;
                })
            },
            async getRoleList(){
                await this.$api.systemapi.listUsingGET_8({
                    pageNum:1,
                    pageSize:10,
                    name:''
                }).then(res=>{
                    this.roleList = res.data.data;
                })
            },
            async submitÜserData(){
                if(this.$route.params.userid == 0){
                    await this.$api.systemapi.addUsingPOST_2({
                        newUser:this.addUser
                    }).then(res=>{
                        if(res.data.status == 200){
                            this.$router.push('/system/user');
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.addUser.id=this.$route.params.userid;
                    await this.$api.systemapi.updateUsingPUT_2({
                        user:this.addUser
                    }).then(res=>{
                        if(res.data.status == 200){
                            this.$router.push('/system/user');
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async getUserInfo(){
                if(this.$route.params.userid != 0){
                    await this.$api.systemapi.getByIdUsingGET({
                        userId:this.$route.params.userid
                    }).then(res=>{
                        this.addUser = res.data.data;
                        this.addUser.sex = res.data.data.sex+'';
                    })
                }
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