<template>
  <div class="login_container">
    <aside>
      <div class="context">
        <h1>云购物中心管理平台</h1>
        <el-form :model="user" ref="ruleForm" :rules="rules" label-width="0px" class="demo-ruleForm">
          <el-form-item>
            <div class="context_item">
              <!-- <h5>购物中心</h5>
              <el-select v-model="type" placeholder="请选择" class="select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select> -->
              <!-- <el-input placeholder="请输入商户名" v-model="user.userName"> -->
              <template slot="prepend">
                <i class="iconfont icon-yonghu"></i>
              </template>
            </el-input>
            </div>
          </el-form-item>
          <el-form-item prop="userName">
            <div class="context_item">
              <h5>用户名</h5>
              <el-input placeholder="请输入用户名" v-model="user.userName">
              <template slot="prepend">
                <i class="iconfont icon-yonghu"></i>
              </template>
            </el-input>
            </div>
          </el-form-item>
          <el-form-item prop="password">
            <div class="context_item">
              <h5>密码</h5>
              <el-input type="password" placeholder="请输入密码" v-model="user.password">
              <template slot="prepend">
                <i class="iconfont icon-password"></i>
              </template>
            </el-input>
            </div>
          </el-form-item>
          <div class="context_item">
            <el-button class="btn" type="primary" @click.prevent="login" native-type="submit">登录</el-button>
          </div>
        </el-form>

      </div>
    </aside>
      <div class="info">
          Copyright© 2017-2027 All Rights Reserved. 京ICP备11026916号-2 京公网安备110105014049西单大悦城有限公司
      </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        type:'',
        options: [{
          value: '选项1',
          label: '西单大悦城'
        }, {
          value: '选项2',
          label: '杭州大悦城'
        }],
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        user: {
          userName: '',
          password: '',
          verificationCode:122334
        }
      }
    },
    created(){
      this.user.userName=localStorage.getItem('erp_userinfo')
      ?JSON.parse(localStorage.getItem('erp_userinfo')).userName
      :''
    },
    methods: {
      login() {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            this.$api.systemapi.loginUsingPOST({request:this.user}).then(
              res=>{
                if (res.data.status==200) {
                  if (res.data.data.userInfoVO.userType==2||res.data.data.userInfoVO.userType==4) {
                    localStorage.setItem('erp_token', res.data.data.token);
                    localStorage.setItem('erp_userinfo', JSON.stringify(res.data.data.userInfoVO));
                    this.$root.menus = res.data.data.userInfoVO.menus.map(item=>{
                          return item.url
                        })
                    this.$router.push({path: '/'})
                  }else {
                    this.$message.error('用户名或密码错误');
                    return
                  }

                } else {
                     this.$message.error(res.data.msg);

                }
              }
            )
          } else {
            return
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  $color: #3e4c8f;
  .login_container {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/bg1.jpg) top no-repeat;
    background-size: 100% 120%;
    aside {
      width: 35%;
      height: 24rem;
      top: 22%;
      right: 5%;
      position: absolute;
      background: #fff;
      border-radius: 10px;
      z-index: 1000;
      .context{
        display: flex;
        justify-content: center;
        flex-direction: column;
        h1 {
          color: $color;
          margin: 2rem auto 1rem;
        }
        .el-form-item__error{
          left:113px;
        }
        .context_item {
          padding: 0 3rem 0.5rem;
          h5 {
            color: lighten($color, 10%);
            font-size: 12px;
            margin-bottom: .5rem;
            line-height: 1em;
          }
          i {
            color: lighten($color, 10%);
          }
          .btn {
            width: 100%;
            height: 2.5rem;
            margin-top: 1rem;
          }
          .select{
            width: 100%;
          }
        }
      }

    }
  }
  .info{
      position: absolute;
      bottom: 15px;
      text-align: center;
      width: 100%;
      color: #9ca5d0;
  }
</style>
