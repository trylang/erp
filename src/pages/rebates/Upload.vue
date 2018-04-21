<template>
    <div class="savebox">
        <div class="el-tabs__content">
            <blank-head title="销售数据导入"></blank-head>
            <div class="commonbox">
                <el-row class="dialogbox">
                    <el-col :span="10">
                        <div class="dialoginput">
                            <span class="inputname">任务名称</span>
                            <input class="inputtext" type="text" placeholder="请输入任务名称" v-model="fileName">
                        </div>
                        <div class="dialoginput">
                            <span class="inputname">文件类型</span>
                            <el-select v-model="type" placeholder="请选择" class="dialogselect">
                                <el-option
                                        v-for="item in channelOptions"
                                        :key="item.value"
                                        :label="item.text"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="dialoginput">
                            <span class="inputname">上传文件</span>
                            <!-- <input class="inputtext" type="text" placeholder="请上传文件"> -->
                            <!-- <span>图标</span> -->
                            <el-upload
                                class="upload-demo"
                                :action="$downLoadUrl+'/refund/billfile/import'"
                                :file-list="fileList"
                                :on-change="uploadFile">
                                <el-button size="small" type="primary" style="margin-left:20px;">点击上传</el-button>
                            </el-upload>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="savebtn">
            <button @click="uploadHandler">保存</button>
        </div>
    </div>
</template>

<script>
    import BlankHead from '../../components/BlankHead'
    export default {
        name: "contract1",
        data() {
            return {
                activeName2: '0',
                isShow: false,
                channelOptions: [],
                fileName: '',
                type: '',
                fileList: [],
                fileId: ''
            };
        },
        created(){
            // setTimeout(()=>{
            //     this.activeName2 = localStorage.getItem('activeName2')
            // },0);
        },
        mounted(){
            this.$api.refundapi.getChannelUsingGET().then(res=>{//渠道
                this.channelOptions = res.data.data;
            })
        },
        methods: {
            uploadHandler(){
                let params = {
                    id: this.fileId,
                    fileName: this.fileName,
                    type: this.type
                }
                console.log(123)
                console.log(params)
                this.$api.refundapi.saveBillFileUsingPOST(params).then(res=>{//提交
                    if(res.data.status === 200){
                        this.$message.success(res.data.msg);
                    }
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            uploadFile(file, fileList){
                if(file.response){
                    this.fileId = file.response.data;
                }
                this.fileList = fileList.slice(-3);
            }
            // next(number) {
            //     this.activeName2 = parseInt(this.activeName2) + 1 + '';
            //     localStorage.setItem('activeName2', this.activeName2);
            //     if (this.activeName2 == '6') {
            //         this.isShow = true;
            //     } else {
            //         this.isShow = false;
            //     }
            // },
            // handleClick() {
            //     localStorage.setItem('activeName2', this.activeName2);
            //     if (this.activeName2 == '6') {
            //         this.isShow = true;
            //     } else {
            //         this.isShow = false;
            //     }
            // },
        },
        components: {
            BlankHead
        }
    }
</script>

<style scoped>

</style>