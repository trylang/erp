<template>
  <el-row style="margin: 30px">
    <el-upload
    class="upload-demo"
    :on-success="handleSuccess"
    :on-error="handleError"
    :file-list="fileList"
    :action="Upload()">
    <el-button size="small" type="primary">点击导入</el-button>
  </el-upload>
  </el-row>
</template>
<script>
import { $message } from "@/utils/notice";

export default {
  data() {
    return {
      fileList: []
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
        $message("error", res.msg);        
      }
    },
    handleError(err) {
      $message("error", err.message);
    }
  }
};
</script>
