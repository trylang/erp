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
    @import url('assets/iconfont/iconfont.css');
    @font-face {font-family: 'iconfont';
        src: url('assets/iconfont/iconfont.eot');
        src: url('assets/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
        url('assets/iconfont/iconfont.woff') format('woff'),
        url('assets/iconfont/iconfont.ttf') format('truetype'),
        url('assets/iconfont/iconfont.svg#iconfont') format('svg');
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

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
    .wrapper .savebox{
        height: 100%;
        background: #eee;
    }
    .wrapper .savebox .savecont{
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
    }
    /******** end ********/
    /*导航*/
    .sub-menu .el-menu{
        background: #353c5f;
        border-right: none;
    }
    .sub-menu .el-submenu__title{
        color: #fff;
        background: #353c5f;
    }
    .sub-menu .el-submenu__title i{
        color: #fff;
    }
    .sub-menu .el-menu-item.is-active{
        color: #fff;
        background: url(./assets/sanjiao.png) center right no-repeat #30354e;
    }
    .sub-menu .el-menu .is-opened{
        background: #30354e;
    }
    .sub-menu .el-menu .is-opened .el-menu-item{
        background: #30354e;
    }
    .sub-menu .is-opened .el-submenu__title{
        color: #fff;
        background: #30354e;
    }
    .sub-menu .is-opened .el-menu-item.is-active{
        color: #fff;
        background: url(./assets/sanjiao.png) center right no-repeat #30354e;
    }
    .sub-menu .el-menu-item>li{
        color: #fff;
        padding-left: 18px;
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
    .header a.el-button{
        text-decoration: none;
        color: #fff;
    }
    .header a.el-button span{
        margin-left: 5px;
    }
    /*底部保存按钮*/
    .savebtn{
        text-align: right;
    }
    .savebtn button{
        padding: 10px 0;
        background: #ff5400;
        border-color: #ff5400;
        font-size: 14px;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        line-height: 1;
        width: 140px;
        border: none;
        margin-top: 10px;
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
    .dialoginput .textcount{
        line-height: 30px;
        color: #ccc;
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
    ::-webkit-input-placeholder{color:#ccc}
    :-ms-input-placeholder{color:#ccc}
    ::placeholder{color:#ccc}
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
    .commonbox{
        margin: 30px 10px;
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
        border-radius: 4px;
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
    /*表单及文本域*/
    .textareabox{
        height: 60px;
        padding: 5px;
        line-height: 18px;
        border: 1px solid #e5e5e5;
        resize:none;
        overflow-x: hidden;
    }
    /*步骤条*/
    .el-tabs--card>.el-tabs__header{
        border:none;
    }
    .el-tabs__header{
        margin: 0;
        background: #eee;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item{
        border: none;
    }
    .el-tabs__nav-scroll{
        display: flex;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
        height:40px;
        align-items: center;
        display: table;
        margin: 0 auto;
    }
    .el-tabs__content{
        border-radius: 10px;
        background: #fff;
        min-height: 300px;
        padding: 20px 0;
    }
    .el-tabs__item{
        height: 30px;
        line-height: 30px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        box-shadow: 0px -2px 5px #dadada;
        margin:10px 2px 0;
    }
    .el-tabs__item.is-active{
        background: #fff;
        color: #457fcf;
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
        color: #fff;
        background: #4a92e4;
    }
    .font12 {
        font-size: 12px;
    }
    .small-btn {
        width: 90%;
        height: 1.6rem;
        border-radius: .8rem;
        padding: 0;
        font-size: 12px;
        font-weight: 600;
    }
    .small-btn:hover {
        color: #519ef7;
    }

    /* 收款页面对于时间选择框的样式修改 */
    .pay_date_picker.dialoginput .el-input__inner {
        margin-left: -9rem;
        color: #d3d3d3;
        font-size: .9rem;
    }
    .pay_date_picker .el-input__prefix {
        left: 10rem;
    }
    .pay_date_picker .el-input__icon.el-icon-circle-close {
        margin-left: -12rem;
    }

    /* 结算单收款中对于tab栏的样式修改 */
    .collect_money_tabs.el-tabs.el-tabs--top.el-tabs--border-card {
        box-shadow: 0 0 0 0;
    }
    .collect_money_tabs.el-tabs__header.is-top {
        border-bottom: 0;
        background: #eee;
    }
    .collect_money_tabs .el-tabs__item.is-top.is-active {
        box-shadow: 0 0 0;
        margin: 10px -1px 0;
        color: #457fcf;
        font-weight: 600;
    }

    .collect_money_tabs .el-tabs__header.is-top {
        border: 0;
    }
    .collect_money_tabs .el-tabs__item.is-top {
        box-shadow: 0 0;
        margin: 0;
        border: 0;
    }
    .collect_money_tabs .el-tabs__item.is-top:hover,
    .collect_money_tabs .el-tabs__item.is-top.is-active:hover {
        color: #457fcf;
        font-weight: 600; 
    }
    .collect_money_tabs .el-tabs__item.is-top {        
        margin: 10px -1px 0;
    }
    .collect_money_tabs .el-tabs--border-card>.el-tabs__header.el-tabs__item.is-active {
        color: #457fcf;
        font-weight: 600;
        margin: 10px -1px 0;
    }
</style>
