<template>
    <div v-loading.fullscreen="loading">
        <con-head title="重新对账">
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">类型：</span>
                            <el-select v-model="channelId" placeholder="请选择" filterable clearable class="dialogselect" @change="pageHandler">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in channelOptions"
                                        :key="item.value"
                                        :label="item.text"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <el-row slot="preappend">
                <div class="global-block">
                    <button class="global-btn" @click="batchConfirm">重新计算</button>
                </div>
            </el-row>
            <erp-table :header="header" :content="dataList" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import RtPage from '../../components/Pagination'
    import erpTable from "../../components/Table";
    export default {
        name: "index",
        data(){
            return{
                loading: false,
                listid:0,
                dialogVisible:false,
                dataList: {list:[]},
                channelId: '',
                channelOptions: [],
                header: [
                    {
                      label: "",
                      name: "checked",
                      type: "checkbox"
                    },
                    {
                      label: "任务名称",
                      type: "text",
                      name: "fileName"
                    },
                    {
                      label: "类型",
                      type: "text",
                      name: "typeStr"
                    },
                    {
                      label: "上传人",
                      type: "text",
                      name: "uploadPerson"
                    },{
                      label: "上传时间",
                      type: "text",
                      name: "createDateStr"
                    }
                ],
                pageNum: 1,
                pageSize: 10
            }
        },
        mounted(){
            this.getChannelList();
        },
        methods:{
            pageHandler(page={}, callback){
                this.loading = true;
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    fileName: this.searchName,
                    type: this.channelId
                }
                this.$api.refundapi.getListForPageUsingGET_2(params).then(res=>{
                    if(res.data.status === 200){
                        res.data.data.list.forEach(item=>{
                            item.checked = false;
                        })
                        this.dataList = res.data.data;
                        this.loading = false;
                    }else{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                    this.$message.error(res.data.msg);
                })
            },
            getChannelList(){
                this.$api.refundapi.getChannelUsingGET().then(res=>{//渠道
                    this.channelOptions = res.data.data;
                })
            },
            getCurrentPage(pageNum) {
              this.pageNum = pageNum;
              this.pageHandler();
            },
            getpageSize(pageSize) {
              this.pageSize = pageSize;
              this.pageHandler();
            },
            filterIds() {
              const param = this.dataList.list.filter(item => {
                return item.checked === true;
              });
              let ids = [];
              param.forEach(item => {
                ids.push(item.id);
              });
              return ids;
            },
            batchConfirm() {
                if(this.dataList.list.length>0){
                    this.confirmHandler(this.filterIds());
                    this.pageHandler();
                }else{
                    this.$message.error('请选择对账任务！');
                }
            },
            confirmHandler(param) {
              this.$api.refundapi.recalculateUsingPOST({ids: param}).then(res => {
                if(res.data.status === 200) {
                    this.$message.success(res.data.msg);
                    this.pageHandler();  
                } else {
                  this.$message.error(res.data.msg);
                }       
              });
            },
        },
        components:{
            ConHead,
            RtPage,
            erpTable
        }
    }
</script>

<style scoped>
    .line-nav{
        flex:1;
        line-height: 30px;
    }
    .line-nav a{
        margin: 0 10px;
        color: #666;
        font-weight: bold;
        height: 30px;
        text-decoration: none;
        display: inline-block;
    }
    .line-nav a.active{
        color: #457fcf;
        border-bottom: 2px solid #457fcf;
    }
    .global-block {
        margin-top: 1rem;
    }
</style>