<template>
  <el-dialog
      :title="title"
      :visible.sync="dialog.dialogVisible"
      :before-close="dialog.handleClose">
      <div class="dialogbox">
        <div class="dialoginput searchselect" v-for="(model,index) in dialog.models" :key="index">
          <span class="inputname">{{model.label}}</span>
          <input class="inputtext" v-if="model.type==='text'" v-model="dialog.param[model.name]" :type="model.type" :placeholder="model.placeholder">
          <el-input v-if="model.type==='textarea'" v-model="dialog.param[model.name]" :type="model.type" :placeholder="model.placeholder"></el-input>
          <el-select v-if="model.type==='select'" v-model="dialog.param[model.name]">
            <el-option
              v-for="(item, index) in model.options"
              :key="index"
              :label="item.label"
              :value="item[model.value]">
            </el-option>
          </el-select>
          <el-date-picker
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

<style>
.dialogselect {
  display: block;
}
</style>

