<template>
    <div>
        <con-head title="数据字典管理">
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称" v-model.trim="searchText"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox maincont">
                <div class="maincontL">
                    <ul>
                        <li :class="listIndex == index?'active':''" v-for="(dictlist,index) in dataList" @click="listClick(index,dictlist.id,dictlist.code,dictlist.name)">{{index+1}}.{{dictlist.code}}（{{dictlist.name}}）<span v-show="listIndex == index">√</span></li>
                    </ul>
                </div>
                <div class="maincontR">
                    <el-row>
                        <el-col :span="24" class="titletxt">
                            <span class="h3">■ {{rightTitle}}</span>
                        </el-col>
                        <el-col :span="24">
                            <div class="listbox">
                                <div class="listcont" v-for="(itemlist,index) in itemList">
                                    <div class="listcolum listskin">
                                        <span>名称：</span>
                                        <span class="text" v-show="itemlist.isEditShow == false">{{itemlist.name}}</span>
                                        <input v-show="itemlist.isEditShow == true" type="text" placeholder="输入名称" v-model="itemlist.name">
                                    </div>
                                    <div class="listcolum listskin">
                                        <span>编码：</span>
                                        <span class="text" v-show="itemlist.isEditShow == false">{{itemlist.value}}</span>
                                        <input v-show="itemlist.isEditShow == true" type="text" placeholder="输入编码" v-model="itemlist.value">
                                    </div>
                                    <div class="listcolum listskin">
                                        <span>顺序：</span>
                                        {{index+1}}
                                        <span v-if="index!==0" @click="updateSort(itemlist.id,itemlist.sort,index,1)"><img src="../../assets/up.png" alt=""></span>
                                        <span v-if="index !== itemList.length-1" @click="updateSort(itemlist.id,itemlist.sort,index,2)"><img src="../../assets/down.png" alt=""></span>
                                    </div>
                                    <div class="dictstatus">
                                        <span>状态：</span>
                                        <el-select v-model="itemlist.available" placeholder="请选择" @change="selectChange(index,itemlist.id,itemlist.available)">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.statevalue"
                                                    :label="item.label"
                                                    :value="item.statevalue">
                                            </el-option>
                                        </el-select>
                                    </div>
                                    <div class="statusbtn">
                                        <button class="btnenable" v-show="dictindex != index" @click="editDataInfo(index,itemlist)">编辑</button>
                                        <button class="btnenable" v-show="dictindex == index" @click="updateDataInfo(itemlist)">保存</button>
                                        <button class="btnenable" v-show="dictindex == index" @click="cancelDataInfo(itemlist.id,itemlist)">取消</button>
                                    </div>
                                </div>
                                <div class="listcont" v-show="isAddItem">
                                    <div class="listcolum listskin">
                                        <span>名称：</span>
                                        <input type="text" placeholder="输入名称" v-model="addDict.name">
                                    </div>
                                    <div class="listcolum listskin">
                                        <span>编码：</span>
                                        <input type="text" placeholder="输入编码" v-model="addDict.value">
                                    </div>
                                    <div class="listcolum listskin">
                                        <span>顺序：</span>
                                        {{itemList.length+1}}
                                    </div>
                                    <div class="dictstatus">
                                        <span>状态：</span>
                                        <el-select v-model="statevalue" placeholder="请选择" @focus="selectFocus()">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.statevalue"
                                                    :label="item.label"
                                                    :value="item.statevalue">
                                            </el-option>
                                        </el-select>
                                    </div>
                                    <div class="statusbtn">
                                        <button class="btnenable" @click="saveDataInfo()">保存</button>
                                        <button class="btnenable" @click="cancelDataInfo()">取消</button>
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
                dataList:[],
                listIndex:0,
                isAddItem:false,
                itemList:[],
                options:[{
                    label: '启用',
                    statevalue:true
                },{
                    label: '禁用',
                    statevalue:false
                }],
                statevalue:true,
                dictindex:-1,
                rightTitle:'',
                searchText:'',
                addDict:{
                    dictTypeId :null,
                    dictTypeCode:'',
                    name:'',
                    value:'',
                    sort:null
                },
                tid:'',
                sseq:''
            }
        },
        mounted(){
            this.getDictList();
        },
        watch:{
            searchText() {
                this.$delay(() => {
                    this.getDictList();
                }, 1000);
            }
        },
        methods:{
            async getDictList(){
                await this.$api.systemapi.typeListUsingGET({
                    nameOrCode:this.searchText
                }).then(res=>{
                    this.dataList = res.data.data;
                });
                this.rightTitle = this.dataList[0].name;
                this.addDict.dictTypeId = this.dataList[0].id;
                this.addDict.dictTypeCode = this.dataList[0].code;
                await this.getItemList(this.dataList[0].code);
            },
            async getItemList(code){
                await this.$api.systemapi.itemListUsingGET({
                    code:code
                }).then(res=>{
                    this.itemList = res.data.data.forEach(item=>{
                        item.isEditShow = false
                    });
                    this.itemList = res.data.data;
                });
            },
            async selectChange(index,id,value){
                await this.$api.systemapi.availItemUsingPUT({
                    id:id,
                    state:value
                }).then(res=>{
                    this.getItemList(this.addDict.dictTypeCode);
                })
            },
            listClick(index,id,code,name){
                this.listIndex = index;
                this.rightTitle = name;
                this.addDict.dictTypeId = id;
                this.addDict.dictTypeCode = code;
                this.getItemList(code);
            },
            addItem(){
                this.isAddItem = true;
            },
            editDataInfo(index,itemlist){
                this.dictindex = index;
                itemlist.isEditShow = true;
            },
            async saveDataInfo(){
                this.dictindex = -1;
                this.addDict.sort = this.itemList.length + 1;
                await this.$api.systemapi.itemSaveUsingPOST({
                    request:this.addDict
                }).then(res => {
                    if (res.data.code == 200) {
                        this.$message.success(res.data.msg);
                        this.getItemList(this.addDict.dictTypeCode);
                        this.addDict = {
                            dictTypeId: null,
                            dictTypeCode: '',
                            name: '',
                            value: '',
                            sort: null
                        };
                        this.isAddItem = false;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
            },
            async updateDataInfo(itemlist){
                this.dictindex = -1;
                await this.$api.systemapi.itemUpdateUsingPUT({
                    id:itemlist.id,
                    request : {
                        id: itemlist.id,
                        name: itemlist.name,
                        value: itemlist.value,
                        sort: itemlist.sort
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                        itemlist.isEditShow = false;
                        this.$message.success(res.data.msg);
                        this.getItemList(this.addDict.dictTypeCode);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
            },
            cancelDataInfo(id,itemlist){
                this.dictindex = -1;
                itemlist.isEditShow = false;
                if(!id) {
                    this.addDict = {
                        dictTypeId: null,
                        dictTypeCode: '',
                        name: '',
                        value: '',
                        sort: null
                    };
                    this.isAddItem = false;
                }
            },
            async updateSort(id,sortnum,index,type){
                if(type == 1){
                    this.tid = this.itemList[index-1].id;
                    this.sseq = this.itemList[index-1].sort;
                }else{
                    this.tid = this.itemList[index+1].id;
                    this.sseq = this.itemList[index+1].sort;
                }
                await this.$api.systemapi.itemSortExchangeUsingPUT({
                    sid:id,
                    fseq:sortnum,
                    tid:this.tid,
                    sseq:this.sseq
                }).then(res=>{
                    this.getItemList(this.addDict.dictTypeCode);
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
        cursor: pointer;
        padding: 4px 0;
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
    .dictstatus{
        margin-right: 20px;
    }
    .statusbtn{
        width: 74px;
    }
    .statusbtn button{
        background: none;
        border: none;
        font-weight: bold;
        width: 35px;
        text-align: center;
        cursor: pointer;
    }
    .statusbtn button.btnenable{
        color: #457fcf;
    }
    .statusbtn button.btndisable{
        color: #ff5400;
    }
</style>