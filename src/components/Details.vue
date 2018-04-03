<template>
  <div>
    <con-head :title="header.title">      
    </con-head>
    <el-row class="detail_container" v-for="(con,index) in header.content" :key="index">
      <el-col :span="con.left_span">
        <span>{{con.label}}</span>
      </el-col>
      <el-col :span="con.right_span">
        <span v-if="con.type==='text'">{{details[con.name]}}</span>
        <span v-if="con.type==='status'">
          {{con.option[details[con.name]]}}
        </span>
        <span v-if="con.type==='time'">{{details[con.name]|formatDate(con.filter)}}</span>
        <div class="detail_table" v-if="con.type==='table'">
          <erp-table :noPage="true" :header="con.table" :content="details"></erp-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import conHead from "@/components/ConHead";
import erpTable from "@/components/Table";

export default {
  name: "erpDetails",
  components: {
    conHead,
    erpTable
  },
  props: ["header", "details"],
};
</script>

<style lang="scss" scoped>
  .detail_container {
    padding: 10px 0 10px 20px;
    .detail_table {
      margin-left: -1rem;
      margin-top: -1rem;
    }
  }
</style>
