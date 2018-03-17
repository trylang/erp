<template>
  <el-dialog
      :title="title"
      :visible.sync="dialog.dialogVisible"
      :before-close="dialog.handleClose"
      width="48%"
      class="dialog_template">
      <div class="dialogbox">
        <div class="dialoginput searchselect" v-for="(model,index) in dialog.models" :key="index">
          <span class="inputname">{{model.label}}</span>
          <input class="inputtext" v-if="model.type==='text'" v-model="dialog.param[model.name]" :type="model.type" :placeholder="model.placeholder">
          <el-input v-if="model.type==='textarea'" class="dialog_area" v-model="dialog.param[model.name]" :type="model.type" :placeholder="model.placeholder"></el-input>
          <el-select v-if="model.type==='select'" v-model="dialog.param[model.name]">
            <el-option
              v-for="(item, index) in model.options"
              :key="index"
              :label="item.label"
              :value="item[model.value]">
            </el-option>
          </el-select>
          <el-date-picker
            v-if="(model.type==='daterange' || model.type==='date')"
            v-model="dialog.param[model.name]"
            :type="model.type"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button v-for="(option,index) in dialog.options" :key="index" :type="option.type" :disabled="option.disabledFun?option.disabledFun(dialog.param):option.disabled" @click="option.click">{{option.label}}</el-button>
      </span>
    </el-dialog>
</template>

<script>
  export default {
    name: 'erp-dialog',
    props: ["title", "dialog"]
  }
</script>

<style lang="scss" scoped>
.dialogselect {
  display: block;
  .dialog_area {
    @at-root .noline {
      border-bottom: 0;
    }
    @at-root .noline {
      border-bottom: 0;
    }
  }
}
.dialog_template {
  .inputname {
    width: 8rem;
  }
} 
</style>

