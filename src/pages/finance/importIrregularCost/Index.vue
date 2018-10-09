<template>
    <div>
        <con-head title="不规则费用导入"></con-head>
        <el-row style="margin: 30px;">
            <el-col :span="3" style="width: 9.5%;">
                <el-upload
                class="upload-demo"
                :on-success="handleSuccess"
                :on-error="handleError"
                :before-upload="importChange"
                :file-list="fileList"
                :headers="headers"
                :action="Upload()">
                    <el-button size="small" type="primary">点击导入</el-button>
                </el-upload>
            </el-col>
            <el-col :span="5" class="download">
                <a href="javascript:void(0);" @click="download">下载模板</a>
            </el-col>
        </el-row>
        <el-row style="padding: 30px 0; margin: 0 30px; border-top: 1px dashed #909399;" v-if="importerror != ''">
            <el-col :span="24">
                <div>失败信息如下：</div>
                <div v-html="importerror" style="line-height: 28px; margin-top: 20px;"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { $message } from "@/utils/notice";
import ConHead from '../../../components/ConHead'
export default {
  data() {
    return {
      headers: {
        token: localStorage.getItem('erp_token')
      },
      fileList: [],
      importerror:''
    };
  },
  methods: {
    Upload() {
      return this.HOST + "/finance/irregular/cost/import";
    },
    handleSuccess(res,file, fileList) {
      if (res.status === 200) {
        $message("success", '上传成功');
        this.fileList = fileList;
      } else {
        fileList.splice(fileList.indexOf(file),1);
        this.fileList = fileList;
        this.importerror = res.msg;
      }
    },
    handleError(err) {
      $message("error", err.message);
    },
    importChange(){
      this.importerror = '';
    },
    download() {
      this.$api.refundapi.downloadUsingGET({id: -1}).then(res => {
        var reader = new FileReader();
        reader.readAsDataURL(res.data);
        reader.onload = function (e) {
          // let name =  formatTime(new Date())
          var a = document.createElement('a');
          // a.download = `${item.taskName}.xls`;
          a.download = `不规则导入模板.xlsx`;
          a.href = e.target.result;
          a.click()
        }
      }).catch(res=>{
          this.$message.error(res.data.msg);
      });
    }
  },
    components:{
        ConHead
    }
};
</script>

<style scoped>
.upload-demo {
  width: 360px;
}
.download a {
  font-size: 12px;
  vertical-align: -webkit-baseline-middle;
}
</style>
