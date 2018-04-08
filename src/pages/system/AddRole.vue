<template>
    <div class="savebox">
        <div class="savecont">
            <con-head title="创建角色"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameauto">用户名</span>
                    <input class="inputtext" type="text" maxlength="10" placeholder="请输入用户名" v-model="addRole.roleName">
                    <span class="textcount">{{addRole.roleName.length}}/10</span>
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">描述</span>
                    </div>
                    <textarea class="textareabox" maxlength="50" placeholder="选填" v-model="addRole.description"></textarea>
                    <span class="textcount">{{addRole.description.length}}/50</span>
                </div>
                <div class="treetitle">功能权限</div>
                <div class="treecontent">
                    <el-tree
                            :data="menuList"
                            show-checkbox
                            node-key="id"
                            :props="defaultProps"
                            ref="tree"
                            @check-change="handleCheckChange">
                    </el-tree>
                </div>
                </el-col>
            </el-row>
        </div>
        <div class="savebtn"><button @click="submitRoleData()">提交</button></div>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    export default {
        name: "add-role",
        data() {
            return {
                addRole:{
                    id:'',
                    marketId:1,
                    roleName:'',
                    description:'',
                    menus:[]
                },
                menuList:[],
                defaultProps: {
                    children: 'childrenMenus',
                    label: 'menuName'
                }
            };
        },
        mounted(){
            this.getMenuList();
            this.getRoleInfo();
        },
        methods:{
            async getMenuList(){
                await this.$api.systemapi.listUsingGET_7().then(res=>{
                    this.menuList = res.data.data;
                })
            },
            async handleCheckChange(){
                this.addRole.menus = this.$refs.tree.getCheckedNodes().map(item=>{
                    if(item.id != undefined){
                        return {
                            id:item.id
                        }
                    }
                });
            },
            async getRoleInfo(){
                if(this.$route.params.roleid != 0) {
                    await this.$api.systemapi.selectAllMenusForUpdateUsingGET({
                        roleId: this.$route.params.roleid
                    }).then(res => {
                        this.addRole = res.data.data.thisRole;
                        this.$refs.tree.setCheckedKeys(res.data.data.theRoleHasTheseMenus);
                    })
                }
            },
            async submitRoleData(){
                if(this.$route.params.roleid == 0) {
                    await this.$api.systemapi.addUsingPOST_1({
                        role:this.addRole
                    }).then(res => {
                        if(res.data.status == 200){
                            this.$message.success(res.data.msg);
                            this.$router.push('/system/role');
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.addRole.id = this.$route.params.roleid;
                    await this.$api.systemapi.updateUsingPUT_1({
                        role:this.addRole
                    }).then(res => {
                        if(res.data.status == 200){
                            this.$message.success(res.data.msg);
                            this.$router.push('/system/role');
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            }
        },
        components:{
            ConHead
        }
    }
</script>

<style scoped>
    .treetitle{
        padding: 5px 10px;
    }
    .treecontent{
        border: 1px solid #e5e5e5;
        padding: 10px;
    }
</style>