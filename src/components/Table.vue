<template>
	<div class="table" ref="table_cont" @scroll.passive="handleScroll">
		<table cellspacing="0" cellpadding="0" border="0" class="tablebox erp_table">
			<thead class="table_header">
				<tr v-if="header">
          <th v-for="(head,head_index) in header" :key="head_index">
            <div class="cell" :class="head.class" :style="head.style">
              {{head.label}}  
              <input v-if="head.type==='checkbox'" type="checkbox" id="checkedAll" :checked="checkedAll" @click="toggleAll(head)" @change="head.click&&head.click(checkedAll, content.list, null)">							
              <label v-if="head.type==='checkbox'" for="checkedAll"></label>
            </div>
          </th>
				</tr>
			</thead>
			<tbody class="table_body">
				<tr v-for="(con,index) in content.list" :key="index" :style="[index%2 === 0 ? '': oddColor]">
          <template v-if="con.editIndex >= -1">
             <!-- 编辑 -->
            <td v-for="(head,key) in headerEdit" :key="key">
              <div class="cell" :class="head.class" :style="head.style">
                <span v-if="head.type==='text'">{{tableParams[head.name] = head.value}}</span>
                <!-- <span v-if="head.type==='fmoney'">{{con[head.name] | fmoney}}</span>
                <a v-if="head.type==='link'" :style="head.linkStyle" :href="head.basehref+con[head.urlId]">{{con[head.name]}}</a>
                <span v-if="head.type==='time'">{{con[head.name]|formatDate(head.filter)}}</span>
                <span v-if="head.type==='status'">{{con[head.name] || (con[head.name] === 0) ? head.option[con[head.name]]: ''}}</span>
                <span v-if="head.type==='toggleText'">{{con[head.name] && head.option[con[head.name]] && head.option[con[head.name]][head.valueLabel] ? head.option[con[head.name]][head.valueLabel]: ''}}</span>
                <span v-if="head.type==='selectText'">{{con[head.name] && head.option[con[head.name]] ? head.option[con[head.name]][head.valueLabel]: ''}}</span> -->
                <!-- <input v-if="head.type==='checkbox'" type="checkbox" :id="index" v-model="tableParams[head.name]" @change="head.click&&head.click(tableParams[head.name], content.list, index)">
                <label v-if="head.type==='checkbox'" :for="index"></label> -->
                
                <!-- 编辑时的表单输入 -->
                <el-select v-if="head.type=='select'" 
                  v-model="tableParams[head.name]" 
                  @change="toggleVal(head, tableParams[head.name])"
                  placeholder="请选择">
                  <el-option
                    v-for="item in head.options"
                    :key="item[head.value]"
                    :label="item[head.valueLabel]"
                    :value="item[head.value]">
                  </el-option>
                </el-select>

                <!-- <el-input-number v-if="head.type=='input_number'" v-model="tableParams[head.name]" size="mini" :min="head[min]" :max="head[max]" label="描述文字" :controls="false"></el-input-number> -->
                <el-input-number 
                  style="width: 80%"
                  v-if="head.type=='input_number'" 
                  v-model="tableParams[head.name]" 
                  @change="toggleVal(head, tableParams[head.name])"
                  label="描述文字" :controls="false">
                </el-input-number>

                <span v-if="head.slot">{{head.slot}}</span>
                
                <el-date-picker
                  v-if="head.type=='date_picker'"
                  v-model="tableParams[head.name]"
                  type="date"
                  value-format="yyyy-MM-dd"
                  @blur="toggleVal(head, tableParams[head.name])"
                  placeholder="选择日期">
                </el-date-picker>

                <el-date-picker
                  v-if="head.type=='date_picker_range'"
                  v-model="tableParams[head.name]"
                  type="daterange"
                  value-format="yyyy-MM-dd"
                  @blur="toggleVal(head, [head.name])"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>

                <el-input v-if="head.type=='input'" v-model="tableParams[head.name]" :disabled="head.value" :placeholder="[head.placeholder]">
                  <template v-if="head.slot" slot="append">{{head.slot}}</template>
                </el-input>

                <div v-if="head.type==='buttons'">
                    <a href="#" class="btn_text" v-for="(operation, btn_index) in head.operations"
                      v-if="!operation.show || con[operation.show]"
                      :key="btn_index" :class="operation.class" 
                      :style="operation.style" 
                      :data="con"
                      :data1="con"
                      @click.stop.prevent="operation.click(con, content.list, index)" 
                      >{{ (operation.name && con[operation.name] === true ? operation.label : operation.otherLabel) || operation.label}}</a>
                </div>                       
              </div>
            </td>
          </template>

          <template v-else>
             <td v-for="(head,key) in header" :key="key">
              <div class="cell" :class="head.class" :style="head.style">
                <span v-if="head.type==='text'">{{con[head.name]}}</span>
                <span v-if="head.type==='fmoney'">{{con[head.name] | fmoney}}</span>
                <a v-if="head.type==='link'" :style="head.linkStyle" :href="head.basehref+con[head.urlId]">{{con[head.name]}}</a>
                <span v-if="head.type==='time'">{{con[head.name]|formatDate(head.filter)}}</span>
                <span v-if="head.type==='status'">{{con[head.name] || (con[head.name] === 0) ? head.option[con[head.name]]: ''}}</span>
                <span v-if="head.type==='toggleText'">{{con[head.name] && head.option[con[head.name]] && head.option[con[head.name]][head.valueLabel] ? head.option[con[head.name]][head.valueLabel]: ''}}</span>
                <span v-if="head.type==='selectText'">{{con[head.name] && head.option[con[head.name]] ? head.option[con[head.name]][head.valueLabel]: ''}}</span>
                <!-- 单选，多选的勾选操作 {label: '', name: 'checked', type: 'checkbox'} -->
                <input v-if="head.type==='checkbox'" type="checkbox" :id="index" v-model="con[head.name]" @change="head.click&&head.click(con[head.name], content.list, con)">
                <label v-if="head.type==='checkbox'" :for="index"></label>
                <div v-if="head.type==='buttons'">
                    <a href="#" class="btn_text" v-for="(operation, btn_index) in head.operations"
                      v-if="!operation.show || con[operation.show]"
                      :key="btn_index" :class="operation.class" 
                      :style="operation.style" 
                      :data="con"
                      :data1="con"
                      @click.stop.prevent="operation.click(con, content.list, index)" 
                      >{{ (operation.name && con[operation.name] === true ? operation.label : operation.otherLabel) || operation.label}}</a>
                </div>                       
              </div>
            </td>
          </template>

				</tr>
        <tr v-if="(content.list && content.list.length<1) || !content.list" class="table_empty-block">
          <td :colspan="header.length" class="table_empty-text">暂无数据</td>
        </tr>
        <slot name="lastTr"></slot>
			</tbody>
      
	  </table>
    <div v-if="!noPage && content.list && content.list.length>0" class="table_page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="content.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="content.total">
    </el-pagination>
    </div>
	</div>	
</template>

<script>
export default {
  name: "erp-table",
  props: ["header", "headerEdit", "tableParams", "content", "noPage", "noLoading", "oddColor", "ifScroll", "customPageSizes"],
  data() {
    return {
      currentPage: 1,
      loading: null
      // loading: !!this.content.list
    };
  },
  computed: {
    checkedAll: function() {
      let length = -1;
      if (this.content && this.content.list) {
        length = this.content.list.length;
      } else {
        length = this.content && this.content.length;
      }
      if (length <= 0) return false;
      const checkName = this.header.find(item => item.type === "checkbox").name;
      if (this.content.list) {
        return this.content.list.every(item => {
          return item[checkName];
        });
      }
      
    },
    pageSizes: function() {
      return !this.customPageSizes ? [10, 20, 30] : this.customPageSizes;
    },
  },
  watch: {
    'content.list': function(newValue, old) {
      if (!this.noLoading) {
        if (newValue == null) {
          this.loading = this.$loading({});
        } else {
          this.loading.close();
        }
      }
    }
  },
  methods: {
    openLoading() {
      this.loading = this.$loading({
        // lock: true,
        // text: 'Loading',
        // spinner: 'el-icon-loading',
        // background: 'rgba(0, 0, 0, 0.7)'
      });
      if (!!this.content.list) {
        this.loading.close();
      }
      if (this.errMsg) {
        this.loading.close();
      }
      setTimeout(() => {
        this.loading.close();
      }, 3000);
    },
    toggleAll: function(header) {
      const checkName = [header].find(item => item.type === "checkbox").name;
      if (this.content.list) {
        const ifChecked = this.content.list.every(item => {
          return item[checkName];
        });
        if (ifChecked) {
          this.content.list.forEach(element => {
            element[checkName] = false;
          });
        } else {
          this.content.list.forEach(element => {
            element[checkName] = true;
          });
        }
      }
      
    },
    handleSizeChange(val) {
      this.$emit("pageSize", val);
      if (!this.noLoading) {
        this.$nextTick(function () {
          this.content.list = null;
        });
      }     
    },
    handleCurrentChange(val) {
      if (!this.noLoading) {
        this.content.list = null;
      }
      this.currentPage = val;
      this.$emit("currentPage", val);
    },
    handleScroll(e) {
      if(!this.ifScroll) return;
      const tableCont = this.$refs.table_cont;
      var scrollTop = tableCont.scrollTop;
      tableCont.querySelector("thead").style.transform =
        "translateY(" + scrollTop + "px)";
    },
    toggleVal(model, val) {
      if (model.event) {
        model.event(this.tableParams[model.name]);
      }
      this.$forceUpdate();
    }
  },
  mounted () {
    if (this.ifScroll) {
      const tableCont = this.$refs.table_cont;
      tableCont.style.maxHeight = "380px";
    }
    if (!this.noLoading) {
      this.openLoading();
    }
    
  },
  updated () {
    if (this.ifScroll) {
      const tableCont = this.$refs.table_cont;
      tableCont.querySelector("thead").style.transform =
        "translateY(" + 0 + "px)";
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  // max-height: 200px;
  margin: 1.5rem 0;
  padding: 0 1.2rem;
  overflow: auto;
  color: #606266;
  font-size: 14px;
}
.erp_table {
  width: 100%;
  thead {
    color: #909399;
    font-weight: 500;
    th {
      background-color: #e4e4e4;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      user-select: none;
      text-align: left;
      .cell {
        // padding: 0.6rem;
        padding: 12px;
        line-height: 28px;
      }
    }
  }
  tbody {
    tr {
      &:nth-child(even) {
        background: #fafafa;
      }
      &:hover {
        background: #f5f7fa;
      }
    }
    .cell {
      // padding: 0.6rem;
      padding: 12px;
      line-height: 28px; 
      
    }
    .table_empty-block {
      min-height: 60px;
      text-align: center;
      .table_empty-text {
        padding: 1rem;
        color: #909399;
      }
    }
  }
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: inline-block;
    width: 48%;
    margin-top: 10px;
    margin-left: 5px;
    text-align: left;
  }

  label::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    line-height: 12px;
    background: #fff;
    border: 1px solid #999;
    border-radius: 2px;
    margin-right: 5px;
    transition: background ease-in 0.3s;
  }

  input[type="checkbox"]:checked + label::before {
    content: "\2713";
    color: #fff;
    font-size: 10px;
    text-align: center;
    // vertical-align: middle;
    background-color: #409eff;
    border: 1px solid #409eff;
  }
}
@media print {
  .table {
    -webkit-print-color-adjust: exact;   
    .cell {
      padding: 2pt;
      height: 22pt;
    }
    .table_empty-block {
      text-align: center;
      .table_empty-text {
        padding: 0pt;
        color: #909399;
      }
    }
  }
}
.table_page {
  display: flex;
  justify-content: center;
}


</style>