<template>
  <div class="savebox">
    <div class="savecont">
      <con-head :title="header.title">      
      </con-head>
      <div v-if="details.length">      
        <el-row class="detail_container" v-for="(con,index) in header.content" :key="index"> 
          <div v-for="(detail, index) in details" :key="index">
            <el-col :span="con.left_span">
              <span>{{con.label}}</span>
            </el-col>
            <el-col :span="con.right_span">
              <span v-if="con.type==='text'">{{detail[con.name]}}</span>
              <span v-if="con.type==='fmoney'">{{detail[con.name] | fmoney}}</span>
              <span v-if="con.type==='status'">
                {{con.option[detail[con.name]]}}
              </span>
              <span v-if="con.type==='img'">
                <img :src="detail[con.name]" alt="">
              </span>
              <span v-if="con.type==='moreImgs'">
                <a v-for="(item, index) in detail[con.name]" :key="index" :href="item[con.url]" target="blank">
                  <img class="con_img" :src="item[con.url]" alt="">
                </a>
              </span>
              <span v-if="con.type==='time'">{{detail[con.name]|formatDate(con.filter)}}</span>
              <div class="detail_table" v-if="con.type==='table'">
                <erp-table :noPage="true" :header="con.table" :content="detail"></erp-table>
              </div>
            </el-col>
          </div>
        </el-row>

      </div>

      <div v-else>
        <el-row class="detail_container" v-for="(con,index) in header.content" :key="index">     
          <el-col :span="con.left_span">
            <span>{{con.label}}</span>
          </el-col>
          <el-col :span="con.right_span">
            <span v-if="con.type==='text'">{{details[con.name]}}</span>
            <span v-if="con.type==='fmoney'">{{details[con.name] | fmoney}}</span>
            <span v-if="con.type==='status'">
              {{con.option[details[con.name]]}}
            </span>
            <span v-if="con.type==='img'">
              <img :src="details[con.name]" alt="">
            </span>
            <span v-if="con.type==='moreImgs'">
              <a v-for="(item, index) in details[con.name]" :key="index" :href="item[con.url]" target="blank">
                <img class="con_img" :src="item[con.url]" alt="">
              </a>
            </span>
            <span v-if="con.type==='time'">{{details[con.name]|formatDate(con.filter)}}</span>
            <div class="detail_table" v-if="con.type==='table'">
              <erp-table :noPage="true" :header="con.table" :content="details"></erp-table>
            </div>
          </el-col>      
        </el-row>
      </div>
    </div>

    <div v-if="!noGoback" class="savebtn"><button @click="$router.go(-1)">返回</button></div>
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
  props: ["header", "details", "noGoback"]
};
</script>

<style lang="scss" scoped>
.detail_container {
  padding: 10px 0 10px 20px;
  .detail_table {
    margin-left: -1rem;
    margin-top: -1rem;
  }
  .con_img {
    width: 120px;
    max-height: 120px;
    margin-right: 1rem;
  }
}
</style>
