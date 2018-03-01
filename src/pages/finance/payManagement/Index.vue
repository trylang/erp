<template>
  <con-head title="收款管理">
    <el-button type="primary" slot="append" @click="linkTo('collectMoney')">收取</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入收款单号\合同号\账单号\票据号" v-model="query.name"><i class="iconfont icon-sousuo" @click="queryList(query)"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.name" placeholder="商户名称" class="dialogselect">
              <el-option
                v-for="item in selects.expenses"
                :key="item.id"
                :value="item.label">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
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
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">合同</span>
            <el-select v-model="query.name" placeholder="" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :value="item.label">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
		<el-row slot="preappend">
			<div class="global-block">
				<button class="global-btn">确 定</button>	
				<!-- <button class="global-btn">删 除</button>	 -->
			</div>
		</el-row>
    <erp-table :header="header" :content="content"></erp-table>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
export default {
  name: "account-group",
  components: {
    conHead,
    erpTable
  },
  data() {
    return {
      header: [
        {
          label: "",
          name: "state",
          type: "checkbox"
        },
        {
          label: "编码",
          type: "text",
          name: "id"
        },
        {
          label: "名称",
          type: "text",
          name: "name"
        },
        {
          label: "备注",
          type: "text",
          name: "desc"
        },
        {
          label: "更新时间",
          name: "update_time",
          type: "time"
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
              label: "编辑",
              name: "edit",
              type: "",
              style: {
                // color: "#902323"
              },
              class: "edit",
              click: (item) => {
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            },
            {
              label: "删除",
              name: "delete",
              type: "",
              style: {
                // color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                this.deleteDialog(item, data);
              }
            }
          ]
        }
      ],
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
        shops: [{
          id: 1,
          label: '商铺1'
        }, {
          id: 2,
          label: '商铺2'
        }],
        expenses: [{
          id: 11,
          label: '费用11'
        }, {
          id: 22,
          label: '费用22'
        }],
        status: [{
          isStatus:true,
          label: '全部'
        }, {
          isStatus:false,
          label: '新增'
        }, {
          isStatus:false,
          label: '已确认'
        }, {
          isStatus:false,
          label: '取消'
        }]
      },
      query: {
        name: ""
      }
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    linkTo(path) {
      this.$router.push({ path });
    },
    statusHandler(status){
			this.selects.status.forEach(function(obj){
					obj.isStatus = false;
			});
			status.isStatus = !status.isStatus
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id) {
        // 修改
        this.dialog.dialogVisible = false;
        this.$store
          .dispatch("updateAccountGroup", {
            id: this.dialog.param.id,
            param: this.dialog.param
          })
          .then(() => {
            $message("success", "修改成功!");
          })
          .catch(error => {
            $message("error", !error.message? "无法修改，请重试!" : error.message);
          });
      } else {
        // 新增
        if (this.dialog.param.id && this.dialog.param.name) {
          this.dialog.dialogVisible = false;
          this.$store
            .dispatch("addAccountGroup", this.dialog.param)
            .then(() => {
              $message("success", "添加成功!");
            })
            .catch(error => {
              $message("error", !error.message? "无法添加，请重试!" : error.message);
            });
        }
      }
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该结算组别, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store
            .dispatch("delAccountGroup", item.id)
            .then(() => {
              $message("success", "删除成功!");
            })
            .catch(() => {
              $message("error", "无法删除，请重试!");
            });
        })
        .catch(() => {
          $message("info", "已取消删除!");
        });
    },
    ...mapActions(["getAccountGroups"]),
    queryList: function(query) {
      this.getAccountGroups(query);
    }
  },
  computed: {
    ...mapGetters({
      content: "accountGroups"
    })
  },
  created() {
    this.$store.dispatch("getAccountGroups");
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
			.global-btn {
				width: 5.6rem;
				height: 2rem;
				margin-right: .5rem;
				border-width: 0;
				border-radius: 2rem;
				cursor: pointer;
				background: #457fcf;
				color: #fff;
				&:hover {
					background: #4a92e4;
				}
			}
		}
		
</style>