<template>
	<div class="table" ref="table_cont" @scroll.passive="handleScroll">
		<table cellspacing="0" cellpadding="0" border="0" class="tablebox erp_table">
			<thead class="table_header">
				<tr v-if="header">
          <th v-for="(header,index) in header" :key="index">
            <div class="cell" :class="header.class" :style="header.style">
              {{header.label}}  
              <input v-if="header.type==='checkbox'" type="checkbox" id="checkedAll" :checked="checkedAll" @click="toggleAll(header)">							
              <label v-if="header.type==='checkbox'" for="checkedAll"></label>
            </div>
          </th>
				</tr>
			</thead>
			<tbody class="table_body">
				<tr v-for="(content,index) in content.list" :key="index" :style="[index%2 === 0 ? '': oddColor]">
          <td v-for="(header,key) in header" :key="key">
            <div class="cell">
              <span v-if="header.type==='text'">{{content[header.name]}}</span>
              <a v-if="header.type==='link'" :style="header.linkStyle" :href="header.basehref+content[header.urlId]">{{content[header.name]}}</a>
              <span v-if="header.type==='time'">{{content[header.name]|formatDate(header.filter)}}</span>
              <span v-if="header.type==='status'">{{content[header.name] || (content[header.name] === 0) ? header.option[content[header.name]]: ''}}</span>
              <span v-if="header.type==='selectText'">{{content[header.name] ? header.option[content[header.name]][header.valueLabel]: ''}}</span>
              <input v-if="header.type==='checkbox'" type="checkbox" :id="index" v-model="content[header.name]">
              <label v-if="header.type==='checkbox'" :for="index"></label>
              <div v-if="header.type==='buttons'">
                  <a href="#" class="btn_text" v-for="(operation, index) in header.operations"
                    v-if="!operation.show || content[operation.show]"
                    :key="index" :class="operation.class" 
                    :style="operation.style" 
                    @click.stop.prevent="operation.click(content, content)" 
                    >{{ (operation.name && content[operation.name] === true ? operation.label : operation.otherLabel) || operation.label}}</a>
              </div>                       
            </div>
          </td>
				</tr>
        <tr v-if="content.list && content.list.length<1" class="table_empty-block">
          <td colspan="7" class="table_empty-text">暂无数据</td>
        </tr>
        <slot name="lastTr"></slot>
			</tbody>
      
	  </table>
    <div v-if="!noPage && content.list && content.list.length>0" class="table_page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
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
  props: ["header", "content", "noPage", "oddColor", "ifScroll"],
  data() {
    return {
      currentPage: 1
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
      return this.content.list.every(item => {
        return item[checkName];
      });
    }
  },
  methods: {
    toggleAll: function(header) {
      const checkName = [header].find(item => item.type === "checkbox").name;
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
    },
    handleSizeChange(val) {
      this.$emit("pageSize", val);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.$emit("currentPage", val);
    },
    handleScroll(e) {
      if(!this.ifScroll) return;
      const tableCont = this.$refs.table_cont;
      var scrollTop = tableCont.scrollTop;
      tableCont.querySelector("thead").style.transform =
        "translateY(" + scrollTop + "px)";
    }
  },
  mounted () {
    if (this.ifScroll) {
      const tableCont = this.$refs.table_cont;
      tableCont.style.maxHeight = "380px";
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
        padding: 0.6rem;
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
      padding: 0.6rem;
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
    background: #fff;
    border: 1px solid #eee;
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

.table_page {
  display: flex;
  justify-content: center;
}
</style>