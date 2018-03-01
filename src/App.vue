<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    html,body{
        height: 100%;
    }
    * {
        webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {

    }
    body{
        -webkit-font-smoothing: antialiased;
        font: 14px PingFangSC-Light,'helvetica neue','hiragino sans gb',tahoma,'microsoft yahei ui','microsoft yahei',simsun,sans-serif;
        /*font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;*/
        line-height: 1.42857143;
        color: #333;
        background: #eee;
        margin: 0;
    }
    ol, ul, li {
        list-style: none;
    }
    input,textarea,button{
        outline: none;
    }
    #app {
        height: 100%;
        color: #2c3e50;
        min-width: 1140px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0 auto;
    }
    /*页面布局样式*/
    .container{
        display:flex;
        flex-direction: row;
        flex:1;
        box-sizing: border-box;
        height: 100%;
    }
    .aside{
        width: 240px;
        overflow: auto;
        box-sizing: border-box;
        background: #353c5f;
        position: fixed;
        top:0;
        bottom:0;
        z-index: 1600;
        padding-bottom: 50px;
    }
    .aside .logo{
        margin: 40px 0 0;
    }
    .main{
        display: flex;
        flex-direction: column;
        flex: 1;
        box-sizing: border-box;
        min-width: 0;
        padding-left: 240px;
        padding-top: 110px;
    }
    .wrapper{
        margin: 20px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 10px;
        background: #fff;
    }
    /******** end ********/
    /*导航*/
    .sub-menu .el-menu{
        color: #818181;
        background: #30354e;
        border-right: none;
    }
    .sub-menu .el-menu .el-menu-item{
        background: #30354e;
    }
    /*.sub-menu .el-menu li.el-menu-item:hover{
        background: #30354e;
    }*/
    .sub-menu .el-menu-item-group__title{
        display: none;
    }
    .sub-menu .el-submenu__title{
        color: #fff;
        background: #30354e;
    }
    .sub-menu .el-submenu__title i{
        color: #fff;
    }
    .sub-menu .el-menu-item>li{
        color: #fff;
        padding-left: 18px;
    }
    .sub-menu .el-menu-item.is-active{
        color: #fff;
        background: url(./assets/sanjiao.png) center right no-repeat #30354e;
    }
    .sub-menu .el-menu-item.is-active .menutitle{
        padding: 2px 0;
        border-bottom: 1px solid #fff;
    }
    /*添加按钮重写*/
    .header .el-button{
        padding: 6px 10px;
        background: #ff5400;
        border-color: #ff5400;
        font-size: 14px;
    }
    .header .el-button a{
        text-decoration: none;
        color: #fff;
    }
    /*正文盒子*/
    .mainbox{
        background: #fff;
        padding: 15px 20px;
    }
    /*dialog重写*/
    .el-dialog{
        padding: 0 15px;
        border-radius: 8px;
    }
    .el-dialog__title{
        color: #353c5f;
        border-left: 4px solid #353c5f;
        padding-left: 5px;
        margin: 10px 0;
        font-size: 18px;
        font-weight: bold;
    }
    .el-button{
        background-color: #e5e5e5;
        padding: 6px 12px;
    }
    .el-button--primary{
        background-color: #ff5400;
        border: 1px solid #ff5400;
    }
    .el-button--primary:focus{
        background-color: #ff5400;
        border: 1px solid #ff5400;
    }
    .el-button--primary:hover{
        background: #ff5400;
        border: 1px solid #ff5400;
        opacity: 0.85;
    }
    .customdialog{
        width: 600px;
    }
    /*dialog内容框*/
    .dialogbox{
        padding: 0 40px;
    }
    .dialogbox .dialoginput{
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 20px;
        color: #666;
        position: relative;
        display: flex;
    }
    .dialoginput .inputname{
        width: 76px;
        padding: 0 10px;
        line-height: 30px;
        display: inline-block;
    }
    .dialoginput .inputnameWidth{
        width:104px;
        display: inline-block;
    }
    .dialoginput .inputtext{
        border:none;
        margin-left: 20px;
        flex: 1;
    }
    .dialoginput .inputtext .el-radio{
        line-height: 30px;
    }
    .dialoginput .inputtext::-webkit-input-placeholder{color:#ccc}
    .dialoginput .inputtext:-ms-input-placeholder{color:#ccc}
    .dialoginput .inputtext::placeholder{color:#ccc}
    .dialoginput .el-input__inner{
        border:none;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
    }
    .dialoginput .dialogselect{
        flex: 1;
    }
    .dialogbox .noline{
        border:none;
    }
    /*选择按钮重写*/
    .el-radio__input.is-checked .el-radio__inner{
        border-color: #457fcf;
        background: #457fcf;
    }
    .el-radio__input.is-checked+.el-radio__label{
        color: #457fcf;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        background-color: #fff;
        border-color: #fff;
        border: 1px solid #457fcf;
    }
    .el-checkbox__inner{
        width: 16px;
        height: 16px;
    }
    .el-checkbox__inner::after{
        border: 2px solid #457fcf;
        border-left: 0;
        border-top: 0;
        left: 5px;
        top:2px;
    }
    .el-checkbox__input.is-indeterminate .el-checkbox__inner::before{
        background-color: #457fcf;
        height: 4px;
        top:5px;
    }
    /*tree树形空间*/
    .el-tree-node__content>.el-tree-node__expand-icon{
        padding: 5px;
    }
    .el-tree-node__expand-icon{
        font-size: 18px;
    }
    /*搜索样式*/
    .searchbox{
        margin-top: 30px;
        position: relative;
        font-size: 14px;
        width: 100%;
    }
    .searchbox input{
        background: none;
        border: none;
        border-bottom: 1px solid #e5e5e5;
        padding: 3px 35px 3px 5px;
        color:#ccc;
        width: 100%;
        height: 32px;
    }
    .searchbox .iconfont {
        position: absolute;
        width: 32px;
        height: 100%;
        right: 0;
        top: 0;
        text-align: center;
        color: #666;
        transition: all .3s;
        font-size: 14px;
        line-height: 32px;
    }
    .searchinput{
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        color:#666;
        margin-top: 30px;
        position: relative;
    }
    .searchinput .inputname {
        width: 110px;
        padding: 0 5px;
        line-height: 30px;
        display: inline-block;
    }
    .searchinput .el-input__inner{
        height:30px;
        padding:0;
        border:0;
    }
    .searchinput .el-date-editor .el-range-input{
        height:26px;
    }
    .searchinput .el-date-editor .el-range__close-icon{
        width:22px;
    }
    .searchselect{
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        color:#666;
        margin-top: 30px;
        position: relative;
    }
    .searchselect .inputname{
        width: 76px;
        padding: 0 5px;
        line-height: 30px;
        display: inline-block;
    }
    .searchselect .dialogselect{
        flex:1;
    }
    .searchselect .el-input__inner {
        border: none;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
    }
    .searchselect .el-select .el-input .el-select__caret{
        color:#666;
    }
    .texttitle{
        display: flex;
        color:#666;
        margin-top: 30px;
        position: relative;
    }
    .texttitle .inputname{
        padding: 0 5px;
        line-height: 30px;
        display: inline-block;
    }
    /*列表样式*/
    .el-table  .cell{
        box-sizing: border-box;
        white-space: normal;
        word-break: break-all;
        line-height: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 10px;
        text-align: left;
    }
    .el-table::before{
        display: none;
    }
    .el-table td{
        border: none;
    }
    .el-table__header tr th{
        background-color: #e4e4e4;
        color: #666;
        padding: 12px 0;
    }
    .btn_text{
        color: #457fcf;
        text-decoration: none;
        margin-right: 15px;
        font-weight: bold;
        background: none;
        border: none;
        cursor: pointer;
    }

    /*多选按钮样式*/
    .global-btn {
       width: 5.6rem;
        height: 2rem;
        margin-right: .5rem;
        border-width: 0;
        border-radius: 2rem;
        cursor: pointer;
        background: #457fcf;
        color: #fff;
    }
    .global-btn:hover {
        background: #4a92e4;
    }
    .font12 {
        font-size: 12px;
    }
</style>
