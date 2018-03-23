<template>
  <el-dialog
      :title.sync="title"
      :visible.sync="dialog.dialogVisible"
      :before-close="dialog.handleClose"
      width="48%"
      class="dialog_template">
      <div class="dialogbox">
        <div class="dialoginput searchselect" v-for="(model,index) in dialog.models" :key="index">
          <span class="inputname">{{model.label}}</span>
          <input class="inputtext" v-if="model.type==='text'" v-model="dialog.param[model.name]" :type="model.type" :placeholder="model.placeholder">
          <el-input v-if="model.type==='textarea'" class="dialog_area" v-model="dialog.param[model.name]" :type="model.type" :placeholder="model.placeholder"></el-input>
          <!-- <select v-if="model.type==='select'" v-model="dialog.param[model.name]" @change="model.event?model.event(dialog.param[model.name]): ''">
            <option v-for="(item, index) in model.options"
              :key="index"
              :value="item[model.value]">
              {{item[model.valueLabel]}}
              </option>
          </select> -->
          <el-select v-if="model.type==='select'" v-model="dialog.param[model.name]" @change="model.event?model.event(dialog.param[model.name]): ''">
            <el-option
              v-for="(item, index) in model.options"
              :key="index"
              :label="item[model.valueLabel]"
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
  name: "erp-dialog",
  props: ["title", "dialog"],
  watch: {
    dialog: function(old) {
      console.log(old);
    },
    title: function(old) {
      console.log(old);
    }
  }
};
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
select {
  width: 50%;
  margin-bottom: .5rem;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
option {
  font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
}
</style>

