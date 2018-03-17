<template>
    <div class="savebox">
        <template>
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="1 合同主体" name="1">
                    <blank-head title="合同信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同号</span>
                                    <input class="inputtext" type="text" placeholder="请输入合同号">
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">版本号：1</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同分类</span>
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
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">销售计税类型</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="dialoginput dialogtext">
                                    <div class="inputname">税率</div>
                                    <input class="middleinput" type="text" placeholder="0">
                                    <span class="rightcompany">%</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="15">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="商户信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">商户</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">品牌</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">经营方式</span>
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
                    </div>
                    <blank-head title="时间条款"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同有效期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="datevalue"
                                            type="daterange"
                                            range-separator="~"
                                            start-placeholder="选填"
                                            end-placeholder="选填">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">合同租期：0个月</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">交铺日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="onedatevalue"
                                            type="date"
                                            placeholder="选填">
                                    </el-date-picker>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">开业日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="onedatevalue"
                                            type="date"
                                            placeholder="选填">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">装修周期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="datevalue"
                                            type="daterange"
                                            range-separator="~"
                                            start-placeholder="选填"
                                            end-placeholder="选填">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">周期：0个月</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">签约日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="onedatevalue"
                                            type="date"
                                            placeholder="请输入签约日期">
                                    </el-date-picker>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">失效日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="onedatevalue"
                                            type="date"
                                            placeholder="请输入失效日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="15">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">备注</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="2 意向单元" name="2">
                    <blank-head title="租赁单元"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont" v-for="(lists,index) in list">
                                        <div class="listcolum contractlist">
                                            <span>单元号</span>
                                            <p>{{lists.name}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>建筑面积</span>
                                            <p>{{lists.number}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>使用面积</span>
                                            <p>{{lists.number}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>楼层</span>
                                            <p>{{lists.name}}</p>
                                        </div>
                                        <div class="deletebtn">
                                            <button data-v-4d27413a="" class="btn_text">删除</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="listcont"><el-button icon="el-icon-plus" @click="addItem">继续添加单元</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="外摆面积"></blank-head>
                    <div class="commonbox">
                        <el-row>
                            <el-col :span="10" class="dialogbox">
                                <div class="dialoginput">
                                    <span class="inputname">外摆面积</span>
                                    <input class="inputtext" type="text" placeholder="选填">
                                    <span class="dialogtext">㎡</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="3 租金条款" name="3">
                    <blank-head title="合同租金条款"></blank-head>
                    <div class="commonbox">
                            <el-row class="dialogbox">
                                <el-col :span="24">
                                    <div class="listbox" style="margin: 0;">
                                        <div class="listcont" v-for="(lists,index) in list">
                                            <div class="">
                                                <p>第一阶段</p>
                                            </div>
                                            <div class="listcolum columbox">
                                                <div class="columboxinput">
                                                    <span class="inputname">保底租金</span>
                                                    <input class="inputtext" type="text" placeholder="请输入保底租金">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div class="listcolum columbox">
                                                <div class="columboxinput">
                                                    <span class="inputname">抽成比例</span>
                                                    <input class="inputtext" type="text" placeholder="请输入抽成比例">
                                                    <span class="rightcompany">%</span>
                                                </div>
                                            </div>
                                            <div class="deletebtn">
                                                <button data-v-4d27413a="" class="btn_text">删除</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listcont"><el-button icon="el-icon-plus" @click="addItem">继续添加</el-button></div>
                                </el-col>
                            </el-row>
                        </div>
                </el-tab-pane>
                <el-tab-pane label="4 费用条款" name="4">
                    <blank-head title="合同费用条款"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">物业管理费</span>
                                    <input class="inputtext" type="text" placeholder="请输入物业管理费">
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">推广费</span>
                                    <input class="inputtext" type="text" placeholder="请输入推广费">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="5 诚意金" name="5">
                    <blank-head title="诚意金"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname">诚意金</span>
                                    <input class="inputtext" type="text" placeholder="
 请输入诚意金金额">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="6 附件上传" name="6">
                    <blank-head title="合同附件"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont">
                                        <div class="listcolum">
                                            <div class="uploadtitle">文件上传<span>（图片仅支持jpg、jpeg、png格式，大小不超过1M）</span></div>
                                            <div class="uploadlist">
                                                <el-upload
                                                        class="avatar-uploader"
                                                        action="https://jsonplaceholder.typicode.com/posts/"
                                                        :show-file-list="false"
                                                        :on-success="handleAvatarSuccess"
                                                        :before-upload="beforeAvatarUpload">
                                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                    <div class="el-upload__text">点击添加图片</div>
                                                </el-upload>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listcont contractcont">
                                        <div class="listcolum">
                                            <div class="uploadtitle">2018-12-21</div>
                                            <div class="uploadlist">
                                                <div class="uploadfile">
                                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520426027148&di=e9172a2c88f976b30f1c751f4473edc8&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20150805%2F87%2F7582706754612447311.jpg" alt="">
                                                    <span class="spantopL"></span>
                                                    <span class="spantopLname">1</span>
                                                    <span class="spantopR"><i class="el-icon-close"></i></span>
                                                    <span class="spanbottom">重新上传</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </template>
        <div class="savebtn" v-show="!isShow">
            <button @click="next()">保存并下一步</button>
        </div>
        <div class="savebtn" v-show="isShow">
            <button>保存</button>
        </div>
    </div>
</template>

<script>
    import BlankHead from '../../../components/BlankHead'

    export default {
        name: "contract1",
        data() {
            return {
                activeName2: '0',
                isShow: false,
                datevalue: '',
                onedatevalue:'',
                list:[{
                    name:'B1-40B',
                    number:'117.98㎡',
                },{
                    name:'B1-40B',
                    number:'117.98㎡',
                },{
                    name:'B1-40B',
                    number:'117.98㎡',
                }]
            };
        },
        created(){
            setTimeout(()=>{
                this.activeName2 = localStorage.getItem('activeName2')
            },0);
        },
        methods: {
            next(number) {
                this.activeName2 = parseInt(this.activeName2) + 1 + '';
                localStorage.setItem('activeName2', this.activeName2);
                if (this.activeName2 == '6') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            },
            handleClick() {
                localStorage.setItem('activeName2', this.activeName2);
                if (this.activeName2 == '6') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            }
        },
        components: {
            BlankHead
        }
    }
</script>

<style scoped>

</style>