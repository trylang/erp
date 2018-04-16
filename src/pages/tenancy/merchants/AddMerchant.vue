<template>
    <div class="savebox">
        <div class="savecont">
        <blank-head title="添加商户"></blank-head>
        <el-row class="commonbox">
            <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">商户名称</span>
                    <input class="inputtext" type="text" placeholder="请输入商户名称" v-model="merchantInfoData.merchantName">
                </div>
                <div class="dialoginput">
                    <span class="inputname">英文名称</span>
                    <input class="inputtext" type="text" placeholder="请输入英文名称" v-model="merchantInfoData.merchantEnglishName">
                </div>
                <div class="dialoginput">
                    <span class="inputname">商户类型</span>
                    <el-select v-model="merchantInfoData.merchantType" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in merchantTypeOption"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">商户性质</span>
                    <el-select v-model="merchantInfoData.merchantNature" placeholder="选填" class="dialogselect">
                        <el-option
                                v-for="item in merchantNatureOption"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">公司名称</span>
                    <input class="inputtext" type="text" placeholder="选填" v-model="merchantInfoData.companyName">
                </div>
            </el-col>
            <el-col :span="12"></el-col>
            <el-col :span="24" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">地址</span>
                    <input class="inputtext" type="text" placeholder="选填" v-model="merchantInfoData.adress">
                </div>
            </el-col>
        </el-row>
        <blank-head title="联系人<span style='color:#ccc;'>（选填）</span>">
        <div class="commonbox">
            <el-row class="dialogbox">
                <el-col :span="24">
                    <div class="listbox" style="margin: 0;">
                        <div class="listcont" v-for="(contactLists,index) in merchantInfoData.contactLstParams" :key="index">
                            <template>
                                <el-radio v-model="contactLists.mainOrNot" :label="index+1">主</el-radio>
                            </template>
                            <div class="listcolum columbox" style="padding: 0 20px;">
                                <div class="columboxinput">
                                    <span class="inputname" style="width: auto">联系人</span>
                                    <input class="inputtext" style="width: 55%" type="text" placeholder="请输入联系人" v-model="contactLists.responsiblePerson">
                                </div>
                            </div>
                            <div class="listcolum columbox" style="padding: 0 20px;">
                                <div class="columboxinput">
                                    <span class="inputname"  style="width: auto">联系电话</span>
                                    <input class="inputtext" style="width: 55%" type="text" placeholder="请输入联系电话" v-model="contactLists.contactNumber">
                                </div>
                            </div>
                            <div class="listcolum columbox" style="padding: 0 20px;">
                                <div class="columboxinput">
                                    <span class="inputname" style="width: auto">传真</span>
                                    <input class="inputtext" style="width: 55%" type="text" placeholder="请输入传真" v-model="contactLists.fax">
                                </div>
                            </div>
                            <div class="deletebtn">
                                <button class="btn_text" @click="delContactLists(contactLists)">删除</button>
                            </div>
                        </div>
                    </div>
                    <div class="listcont"><el-button icon="el-icon-plus" @click="addItem">继续添加</el-button></div>
                </el-col>
            </el-row>
        </div>
        </blank-head>
        <blank-head title="证件信息<span style='color:#ccc;'>（选填）</span>"></blank-head>
        <div class="commonbox">
            <div class="addnumber">1</div>
            <el-row class="dialogbox">
                <el-col :span="12">
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">营业执照编号</span>
                        <input class="inputtext" type="text" placeholder="请输入营业执照编号">
                    </div>
                </el-col>
                <el-col :span="24" style="margin: 0 10px;">
                    <div class="uploadtitle">营业执照<span>（图片仅支持jpg、jpeg、png格式，大小不超过1M）</span></div>
                    <div class="uploadlist">
                        <div class="avatar-uploader">
                            <label class="el-upload el-upload--text">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                <div class="el-upload__text">点击添加图片</div>
                                <input type="file" name="file" id="busLinsNumFile" 
                                class="el-upload__input" @change="addFileUpload('busLinsNumFile')">
                            </label>
                        </div>
                    </div>
                    <el-dialog :visible.sync="merchantInfoData.busLinsNumFile && merchantInfoData.busLinsNumFile.length>0">
                        <img width="100%" id="busLinsNumFile_img" alt="">
                    </el-dialog>
                </el-col>
            </el-row>
        </div>
        <div class="commonbox">
            <div class="addnumber">2</div>
            <el-row class="dialogbox">
                <el-col :span="12">
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">经营许可证号</span>
                        <input class="inputtext" type="text" placeholder="请输入经营许可证号">
                    </div>
                </el-col>
                <el-col :span="24" style="margin: 0 10px;">
                    <div class="uploadtitle">经营许可证<span>（图片仅支持jpg、jpeg、png格式，大小不超过1M）</span></div>
                    <div class="uploadlist">
                        <div class="avatar-uploader">
                            <label class="el-upload el-upload--text">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                <div class="el-upload__text">点击添加图片</div>
                                <input type="file" name="file" id="busPermitNumfile" 
                                class="el-upload__input" @change="addFileUpload('busPermitNumfile')">
                            </label>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="commonbox">
            <div class="addnumber">3</div>
            <el-row class="dialogbox">
                <el-col :span="12">
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">商标注册证件号</span>
                        <input class="inputtext" type="text" placeholder="请输入商标注册证件号">
                    </div>
                </el-col>
                <el-col :span="24" style="margin: 0 10px;">
                    <div class="uploadtitle">商标注册证件<span>（图片仅支持jpg、jpeg、png格式，大小不超过1M）</span></div>
                    <div class="uploadlist">
                        <div class="avatar-uploader">
                            <label class="el-upload el-upload--text">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                <div class="el-upload__text">点击添加图片</div>
                                <input type="file" name="file" id="tradeRegistNumFile" 
                                class="el-upload__input" @change="addFileUpload('tradeRegistNumFile')">
                            </label>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="commonbox">
            <div class="addnumber">4</div>
            <el-row class="dialogbox">
                <el-col :span="12">
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">法人身份证号</span>
                        <input class="inputtext" type="text" placeholder="请输入法人身份证号">
                    </div>
                </el-col>
                <el-col :span="24" style="margin: 0 10px;">
                    <div class="uploadtitle">法人身份证<span>（图片仅支持jpg、jpeg、png格式，大小不超过1M）</span></div>
                    <div class="uploadlist">
                        <div class="avatar-uploader">
                            <label class="el-upload el-upload--text">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                <div class="el-upload__text">点击添加图片</div>
                                <input type="file" name="file" id="legalPersonIdFile" 
                                class="el-upload__input" @change="addFileUpload('legalPersonIdFile')">
                            </label>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="commonbox">
            <div class="addnumber">5</div>
            <el-row class="dialogbox">
                <el-col :span="12">
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">其他证件号</span>
                        <input class="inputtext" type="text" placeholder="请输入其他证件号">
                    </div>
                </el-col>
                <el-col :span="24" style="margin: 0 10px;">
                    <div class="uploadtitle">其他证件<span>（图片仅支持jpg、jpeg、png格式，大小不超过1M）</span></div>
                    <div class="uploadlist">
                        <div class="avatar-uploader">
                            <label class="el-upload el-upload--text">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                <div class="el-upload__text">点击添加图片</div>
                                <input type="file" name="file" id="otherFile" 
                                class="el-upload__input" @change="addFileUpload('otherFile')">
                            </label>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        </div>
        <div class="savebtn"><button @click="submitFormData()">提交</button></div>
    </div>
</template>

<script>
    import BlankHead from '../../../components/BlankHead'
    export default {
        name: "add-merchant",
        data(){
            return{
                merchantInfoData:{
                    contactLstParams:[],
                    id:'',
                    merchantCode:'',
                    merchantName:'',
                    merchantEnglishName:'',
                    merchantType:'',
                    merchantNature:'',
                    companyName:'',
                    adress:'',
                    businessLicenseNumber:'',
                    businessPermitNumber:'',
                    trademarkRegistrationNumber:'',
                    legalPersonId:'',
                    otherCertificate:'',
                    mainContractId:'',
                    busLinsNumFile:[],
                    busPermitNumfile:[],
                    tradeRegistNumFile:[],
                    legalPersonIdFile:[],
                    otherFile:[]
                },
                merchantTypeOption:[{
                    name:'商场',
                    id:0
                },{
                    name:'写字楼',
                    id:1
                },{
                    name:'广告位',
                    id:3
                },{
                    name:'场地',
                    id:2
                }],
                merchantNatureOption:[{
                    name:'法人',
                    id:0
                },{
                    name:'个体',
                    id:1
                }],
          }
        },
        mounted(){
            this.getMerchantInfo();
        },
        methods:{
            addItem(){
                if(!this.merchantInfoData.contactLstParams) this.merchantInfoData.contactLstParams = [];
                this.merchantInfoData.contactLstParams.push({
                    id:'',
                    responsiblePerson:'',
                    contactNumber:'',
                    fax:'',
                    mainOrNot:''
                });
            },
            addFileUpload(type) {
                const file=document.getElementById(type).files[0]; //获取文件流
                if (!this.merchantInfoData[type]) {
                    this.merchantInfoData[type] = [];
                }
                this.merchantInfoData[type].push(file);
                this.changImg(type, file);
                console.log(this.merchantInfoData.busLinsNumFile);
            },
            changImg(type, file){  
                if (!(/^image\/.*$/i.test(file.type))) {  
                    return; //不是图片 就跳出这一次循环  
                }
                //实例化FileReader API  
                var freader = new FileReader();  
                freader.readAsDataURL(file);  
                freader.onload = function(e) {
                    $(`#${type}_img`).attr("src",e.target.result);  
                };
            },
            async submitFormData(){
                console.log(this.merchantInfoData);
                if(this.$route.params.merchantId == 0) {
                    await this.$api.rentapi.addUsingPOST_8({
                        $config:{ headers: { 'Content-Type':'multipart/form-data'}},
                        request: this.merchantInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.$router.push('/inner/merchants');
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.merchantInfoData.id = this.$route.params.merchantId;
                    await this.$api.rentapi.updateUsingPUT_9({
                        request: this.merchantInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.$router.push('/inner/merchants');
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async delContactLists(contactLists){
                let index = this.merchantInfoData.contactLstParams.indexOf(contactLists)
                if (index !== -1) {
                    this.merchantInfoData.contactLstParams.splice(index, 1)
                }
            },
            async getMerchantInfo(){
                if(this.$route.params.merchantId != 0) {
                    this.$api.rentapi.detailUsingGET_6({
                        id: this.$route.params.merchantId
                    }).then(res => {
                        this.merchantInfoData = res.data.data;
                    })
                }
            },
        },
        components:{
            BlankHead
        }
    }
</script>

<style scoped>
.el-radio {
  line-height: 30px;
}
.commonbox {
  position: relative;
}
.dialogbox {
  padding: 0 50px;
}
.uploadtitle {
  color: #666;
  font-weight: normal;
}
.dialoginput .inputnameWidth {
  width: 120px;
}
.dialoginput .inputtext {
  margin-left: 10px;
}
.addnumber {
  background: #fafafa;
  color: #ccc;
  border: 1px solid #ccc;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 12px;
  position: absolute;
  left: 20px;
  top: 5px;
}
</style>