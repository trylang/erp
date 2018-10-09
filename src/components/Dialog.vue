<template>
  <el-dialog
      :title.sync="title"
      :visible.sync="dialog.dialogVisible"
      :before-close="dialog.handleClose"
      custom-class="customdialog">
      <div class="dialogbox">
        <div class="dialoginput" v-for="(model,index) in dialog.models" :key="index">
          <span class="inputname">{{model.label}}</span>
          <span class="inputname inputnameauto" v-if="model.type==='onlyword'">{{dialog.param[model.name]}}</span>
          <span class="inputname inputnameauto" v-if="model.type==='word'">{{model.options[dialog.param[model.name]] ? model.options[dialog.param[model.name]][model.valueLabel]:''}}</span>
          <input class="inputtext" v-if="model.type==='number' || model.type==='text'" 
            v-model="dialog.param[model.name]" 
            :type="model.type" 
            @change="toggleVal(model, dialog.param[model.name])"
            :placeholder="model.placeholder">
          <span v-if="model.slot">{{model.slot}}</span>
          <el-input v-if="model.type==='textarea'" class="inputtext dialog_area" 
            v-model="dialog.param[model.name]" 
            :type="model.type"
            @change="toggleVal(model, dialog.param[model.name])" 
            :placeholder="model.placeholder"></el-input>
          <el-select v-if="model.type==='select'" filterable class="dialogselect" clearable v-model="dialog.param[model.name]" 
            @change="toggleVal(model, dialog.param[model.name])">
            <el-option
              v-for="(item, index) in model.options"
              :key="index"
              :label="item[model.valueLabel]"
              :value="item[model.value]">
            </el-option>
          </el-select>
          <el-select v-if="model.type==='custom_select'" filterable clearable class="dialogselect" v-model="dialog.param[model.name]" 
            @change="toggleVal(model, dialog.param[model.name])">
            <el-option-group v-for="(group, groupIndex) in model.optionsGroups"
              :key="groupIndex"
              :label="group.label">
              <el-option
                v-for="(item, index) in group.options"
                :key="index"
                :label="item[model.valueLabel]"
                :value="item[model.value]">
                <!-- <span :style="model.optionsStyle" v-for="(optionlabel, index) in model.optionsLabels" :key="index">{{item[optionlabel]}}</span> -->
              </el-option>
            </el-option-group>
            
          </el-select>
          <el-date-picker
            class="inputtext"
            v-if="(model.type==='daterange' || model.type==='date')"
            v-model="dialog.param[model.name]"
            :type="model.type"
            :clearable="hideDate"
            :picker-options="model.pickerOptions?model.pickerOptions: {}"
            @blur="toggleVal(model, dialog.param[model.name])"
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
  data() {
    return {
      hideDate: true
    }
  },
  methods: {
    toggleVal(model, val) {
      if (model.event) {
        model.event(this.dialog.param[model.name]);
      }
      this.$forceUpdate();
      // this.$nextTick(function () {
      //   this.$emit('toggleInput', key, val);
      // })
    },
    filterSelect(data) {
      // console.log(datasync);
    }
  },
  watch: {
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
  margin-bottom: 0.5rem;
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

