<template>
    <div class="savebox" v-loading.fullscreen="loading">
        <div class="savecont">
            <con-head :title="this.$route.params.roleid!=0?'编辑角色':'创建角色'"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameauto">角色名</span>
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
                loading: false,
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
        },
        methods:{
            async getMenuList(){
                await this.$api.systemapi.listUsingGET_7().then(res=>{
                    this.menuList = res.data.data;
                    this.getRoleInfo();
                })
            },
            async handleCheckChange(data, checked, indeterminate){
                let aryCheckNodes = this.$refs.tree.getCheckedNodes().map(item=>{
                    if(item.id != undefined){
                        return {
                            id:item.id
                        }
                    }
                });
                let aryHalfCheckNodes = this.$refs.tree.getHalfCheckedNodes().map(item=>{
                    if(item.id != undefined){
                        return {
                            id:item.id
                        }
                    }
                });
                this.addRole.menus = [...aryCheckNodes,...aryHalfCheckNodes];
            },
            async getRoleInfo(){
                let ary1,ary2=[],temp=[],newTreeMenus=[],newTreeMenusData=[];
                if(this.$route.params.roleid != 0) {
                    await this.$api.systemapi.selectAllMenusForUpdateUsingGET({
                        roleId: this.$route.params.roleid
                    }).then(res => {
                        if(res.data.status === 200){
                            this.addRole = res.data.data.thisRole;
                            ary1 = this.menuList.map(item=>{
                                return item.id
                            });
                            for (let i = 0; i < ary1.length; i++) {
                                temp[ary1[i]] = true;
                            };
                            for (let i = 0; i < res.data.data.theRoleHasTheseMenus.length; i++) {
                                if (!temp[res.data.data.theRoleHasTheseMenus[i]]) {
                                    newTreeMenus.push(res.data.data.theRoleHasTheseMenus[i]);
                                } ;

                            };
                            this.menuList.forEach(item=>{
                                ary2 = item.childrenMenus.map(_item=>{
                                    return _item.id
                                });
                                for (let i = 0; i < ary2.length; i++) {
                                    temp[ary2[i]] = true;
                                };
                            });
                            for (let i = 0; i < newTreeMenus.length; i++) {
                                if (!temp[newTreeMenus[i]]) {
                                    newTreeMenusData.push(newTreeMenus[i]);
                                };

                            };
                            this.$refs.tree.setCheckedKeys(Array.from(new Set(newTreeMenusData)));
                        }
                    })
                }
            },
            async submitRoleData(){
                this.loading = true;
                if(this.$route.params.roleid == 0) {
                    await this.$api.systemapi.addUsingPOST_1({
                        role:this.addRole
                    }).then(res => {
                        if(res.data.status == 200){
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.$router.push('/system/role');
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    this.addRole.id = this.$route.params.roleid;
                    await this.$api.systemapi.updateUsingPUT_1({
                        role:this.addRole
                    }).then(res => {
                        if(res.data.status == 200){
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.$router.push('/system/role');
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
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