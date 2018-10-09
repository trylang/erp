<template>
    <div class="savebox" v-loading.fullscreen="loading">
        <div class="savecont">
            <con-head :title="this.$route.params.userid!=0?'编辑用户':'创建用户'"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">用户名</span>
                    <input class="inputtext" type="text" maxlength="20" placeholder="请输入用户名" v-model="addUser.username" @input="inputLength" :class="this.$route.params.userid == 0?'':'greyShow'" :disabled="this.$route.params.userid == 0?false:true">
                    <span class="textcount">{{usernameLength}}/20</span>
                </div>
                <div class="dialoginput" v-if="this.$route.params.userid == 0">
                    <span class="inputname">密码</span>
                    <input class="inputtext" type="password" maxlength="20" placeholder="请输入6-20位字母加数字组合" v-model="addUser.password" @input="inputLength">
                    <span class="textcount">{{passwordLength}}/20</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname" style="line-height: 40px;">角色</span>
                    <el-select v-model="roleId" placeholder="请选择" filterable clearable class="dialogselect">
                        <el-option
                                v-for="(item,index) in roleList"
                                :key="index"
                                :label="item.roleName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">所属部门</span>
                    <el-select v-model="addUser.departmentId" placeholder="请选择" filterable clearable class="dialogselect" @change="getPositionsList(addUser.departmentId)">
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
                    <el-select v-model="addUser.positionId" placeholder="请选择" filterable clearable class="dialogselect">
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
                    <input class="inputtext" type="text" maxlength="30" placeholder="请输入员工姓名" v-model="addUser.realname" @input="inputLength">
                    <span class="textcount">{{realnameLength}}/30</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">手机号</span>
                    <input class="inputtext" type="text" maxlength="11" placeholder="选填" v-model="addUser.mobile">
                </div>
                <div class="dialoginput">
                    <span class="inputname">邮箱</span>
                    <input class="inputtext" type="text" placeholder="选填" v-model="addUser.email">
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
                    <textarea class="textareabox" maxlength="50" placeholder="选填" v-model="addUser.remark"  @input="inputLength"></textarea>
                    <span class="textcount">{{remarkLength}}/50</span>
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
                loading: false,
                addUser:{
                    id:'',
                    username:'',
                    password:'',
                    roleIds:'',
                    departmentId:'',
                    positionId:'',
                    realname:'',
                    mobile:'',
                    email:'',
                    sex:'1',
                    remark:''
                },
                roleId:'',
                departmentsList:[],
                positionsList:[],
                roleList:[],
                usernameLength: 0,
                passwordLength: 0,
                realnameLength: 0,
                remarkLength: 0
            }
        },
        mounted(){
            this.getDepartmentsList();
            // this.getPositionsList();
            this.getRoleList();
            this.getUserInfo();
        },
        methods:{
            inputLength(){
                this.usernameLength = this.addUser.username.length;
                this.realnameLength = this.addUser.realname.length;
                this.remarkLength = this.addUser.remark.length;
                this.passwordLength = this.addUser.password.length;
            },
            async getDepartmentsList(){
                await this.$api.systemapi.listUsingGET({
                    pageNum:1,
                    pageSize:10,
                    name:''
                }).then(res=>{
                    this.departmentsList = res.data.data.list;
                })
            },
            async getPositionsList(positionId){
                await this.$api.systemapi.queryPositionUsingGET({id: positionId}).then(res=>{
                    if(res.data.status === 200){
                        this.positionsList = res.data.data;
                    }
                })
            },
            async getRoleList(){
                await this.$api.systemapi.listAllUsingGET().then(res=>{
                    this.roleList = res.data.data;
                })
            },
            async submitÜserData(){
                this.addUser.roleIds = [this.roleId];
                this.loading = true;
                if(this.$route.params.userid == 0){
                    await this.$api.systemapi.addUsingPOST_2({
                        newUser:this.addUser
                    }).then(res=>{
                        if(res.data.status == 200){
                            this.loading = false;
                            this.$router.push('/system/user');
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    this.addUser.id=this.$route.params.userid;
                    await this.$api.systemapi.updateUsingPUT_2({
                        user:this.addUser
                    }).then(res=>{
                        if(res.data.status == 200){
                            this.loading = false;
                            this.$router.push('/system/user');
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
                this.addUser.roleIds = parseInt(this.addUser.roleIds.join(''));
            },
            async getUserInfo(){
                if(this.$route.params.userid != 0){
                    await this.$api.systemapi.getByIdUsingGET({
                        userId:this.$route.params.userid
                    }).then(res=>{
                        if(res.data.status === 200){
                            this.addUser = res.data.data;
                            this.addUser.sex = res.data.data.sex+'';
                            this.usernameLength = this.addUser.username.length;
                            this.roleId = res.data.data.roleSet[0].id;
                            // if(this.addUser.password){
                            //     this.passwordLength = this.addUser.password.length;
                            // }
                            this.realnameLength = this.addUser.realname.length;
                            this.remarkLength = this.addUser.remark.length;
                            this.$api.systemapi.queryPositionUsingGET({id: this.addUser.departmentId}).then(res=>{
                                if(res.data.status === 200){
                                    this.positionsList = res.data.data;
                                }
                            })
                        }
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
    .greyShow{
        background-color: #eee;
    }
</style>