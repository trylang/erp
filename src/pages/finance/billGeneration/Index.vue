<template>
  <con-head title="账单处理任务">
    <el-row slot="preappend">
        <el-col :span="9">
        <div class="texttitle">
            <span class="inputname">状态：</span>
            <div class="line-nav">
                <a href="javascript:void(0)" v-for="status in selects.status" :key="status.id" :class="{active:status.isStatus}" @click="statusHandler(status)">{{status.label}}</a>
                <!-- <el-radio-button v-for="status in selects.status" :key="status.id" :class="{active:status.isStatus}">{{status.label}}</el-radio-button> -->
            </div>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content"></erp-table>

    <!-- <erp-dialog :title="dialog.param.id? '修改结算组别': '添加结算组别'" :dialog="dialog"></erp-dialog> -->
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
export default {
  name: "account-group",
  components: {
    conHead,
    erpTable,
    erpDialog
  },
  data() {
    return {
      header: [
        {
          label: "任务名称",
          type: "text",
          name: "taskName"
        },
        {
          label: "开始时间",
          type: "time",
          name: "startTime",
          filter: "yyyy-MM-dd hh:mm:ss"
        },
        {
          label: "运行时间",
          name: "processTime",
          type: "text",
        },
        {
          label: "运行状态",
          name: "statusText",
          type: "text"
        },
        {
          label: "操作",
          name: "operations",
          type: "buttons",
          style: {
            width: "130px"
          },
          operations: [
            {
              label: "处理结果",
              name: "edit",
              type: "",
              show: 'showEdit',
              class: "edit",
              click: (item) => {
                this.$router.push({path: `billGeneration/${item.id}`})
              }
            }
          ]
        }
      ],
      content: [],
      dialog: {
        models: [{
          label: '编码',
          name: 'id',
          type: 'text',
          placeholder: '请输入编号'
        }, {
          label: '名称',
          name: 'name',
          type: 'text',
          placeholder: '请输入名称'
        }, {
          label: '备注',
          name: 'desc',
          type: 'text',
          placeholder: '请输入备注'
        }],
        dialogVisible: false,
        param: {
          id: "",
          name: "",
          desc: ""
        },
        options: [{
          label: "确 定",
          name: "submit",
          type: "primary",
          disabledFun: () => {
            return Object.values(this.dialog.param).some(item => {
              console.log(item);
              return item === (undefined || "");
            });
          },
          click: () => {
            this.confirmDialog();
          }
        }, {
          label: "取 消",
          name: "edit",
          type: "",
          click: () => {
            this.cancelDialog();
          }
        }]
      },
      selects: {
        status: [{
          isStatus:true,
          id: '',
          label: '全部'
        }, {
          isStatus:false,
          id: 30,
          label: '成功'
        }, {
          isStatus:false,
          id: 0,
          label: '进行中'
        }, {
          isStatus:false,
          id: 20,
          label: '失败'
        }]
      },
      query: {
        name: ""
      }
    };
  },
  methods: {
    linkTo(path) {
      this.$router.push({ path });
    },
    statusHandler(status){
			this.selects.status.forEach(function(obj){
					obj.isStatus = false;
			});
      status.isStatus = !status.isStatus;
      this.query.status = status.id;
    },
    async getBillList() {
      await this.$api.financeapi.listUsingGET_2().then(res => {
        if (res.data.status === 200) {
          res.data.data.list.forEach(item => {
            if (item.status === 10 || item.status === 20) {
              item.showEdit = true;
            }
          })
          this.content = res.data.data;
        } else {
          $message('error', res.data.msg);
        }
      })
    }
  },
  computed: {},
  created() {
    this.getBillList();
  }
};
</script>

<style lang="scss" scoped>
    .line-nav{
        flex:1;
        line-height: 30px;
    }
    .line-nav a{
        margin: 0 10px;
        color: #666;
        font-weight: bold;
        height: 30px;
        text-decoration: none;
        display: inline-block;
    }
    .line-nav a.active{
        color: #457fcf;
        border-bottom: 2px solid #457fcf;
    }
		.global-block {
			margin-top: 1rem;
		}
		
</style>