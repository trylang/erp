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

    @font-face {
        font-family: 'iconfont';
        src: url('assets/iconfont/iconfont.eot');
        src: url('assets/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
        url('assets/iconfont/iconfont.woff') format('woff'),
        url('assets/iconfont/iconfont.ttf') format('truetype'),
        url('assets/iconfont/iconfont.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body {
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

    body {
        -webkit-font-smoothing: antialiased;
        font: 14px PingFangSC-Light, 'helvetica neue', 'hiragino sans gb', tahoma, 'microsoft yahei ui', 'microsoft yahei', simsun, sans-serif;
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

    input, textarea, button {
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
    .container {
        display: flex;
        flex-direction: row;
        flex: 1;
        box-sizing: border-box;
        height: 100%;
    }

    .aside {
        width: 240px;
        overflow: auto;
        box-sizing: border-box;
        background: #353c5f;
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 1600;
        padding-bottom: 50px;
    }

    .aside .logo {
        margin: 40px 0 0;
    }

    .main {
        display: flex;
        flex-direction: column;
        flex: 1;
        box-sizing: border-box;
        min-width: 0;
        padding-left: 240px;
        padding-top: 110px;
    }

    .wrapper {
        margin: 20px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 10px;
        background: #fff;
    }

    .wrapper .savebox {
        height: 100%;
        background: #eee;
    }

    .wrapper .savebox .savecont {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
    }

    /******** end ********/
    /*导航*/
    .sub-menu .el-menu {
        background: #353c5f;
        border-right: none;
    }

    .sub-menu .el-submenu__title {
        color: #fff;
        background: #353c5f;
    }

    .sub-menu .el-submenu__title i {
        color: #fff;
    }

    .sub-menu .el-menu-item.is-active {
        color: #fff;
        background: url(./assets/sanjiao.png) center right no-repeat #30354e;
    }

    .sub-menu .el-menu .is-opened {
        background: #30354e;
    }

    .sub-menu .el-menu .is-opened .el-menu-item {
        background: #30354e;
    }

    .sub-menu .is-opened .el-submenu__title {
        color: #fff;
        background: #30354e;
    }

    .sub-menu .is-opened .el-menu-item.is-active {
        color: #fff;
        background: url(./assets/sanjiao.png) center right no-repeat #30354e;
    }

    .sub-menu .el-menu-item > li {
        color: #fff;
        padding-left: 18px;
    }

    .sub-menu .el-menu-item.is-active .menutitle {
        padding: 2px 0;
        border-bottom: 1px solid #fff;
    }

    /*添加按钮重写*/
    .header .el-button {
        padding: 6px 10px;
        background: #ff5400;
        border-color: #ff5400;
        font-size: 14px;
    }

    .header a.el-button {
        text-decoration: none;
        color: #fff;
    }

    .header a.el-button span {
        margin-left: 5px;
    }

    /*底部保存按钮*/
    .savebtn {
        text-align: right;
    }

    .savebtn button {
        padding: 15px 0;
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
    .mainbox {
        background: #fff;
        padding: 15px 20px;
    }

    /*dialog重写*/
    .el-dialog {
        padding: 0 15px;
        border-radius: 8px;
    }

    .el-dialog__title {
        color: #353c5f;
        border-left: 4px solid #353c5f;
        padding-left: 5px;
        margin: 10px 0;
        font-size: 18px;
        font-weight: bold;
    }

    .el-button {
        background-color: #e5e5e5;
        padding: 6px 12px;
    }

    .el-button--primary {
        background-color: #ff5400;
        border: 1px solid #ff5400;
    }

    .el-button--primary:focus {
        background-color: #ff5400;
        border: 1px solid #ff5400;
    }

    .el-button--primary:hover {
        background: #ff5400;
        border: 1px solid #ff5400;
        opacity: 0.85;
    }

    .customdialog {
        width: 600px;
    }
    .contractdialog{
        width: 600px;
    }
    .contractdialog .el-dialog__header{
        padding: 0;
    }
    .contractdialog .el-dialog__title{
        border: none;
        line-height: 0;
        padding: 0;
        margin: 0;
    }
    .contractdialog .el-dialog__body{
        padding: 15px;
    }
    .contractdialog .searchbox{
        margin: 0;
    }
    .contractdialog .dialogbox{
        padding: 0;
    }
    .floorsearchlist{
        padding: 15px 0;
        overflow: auto;
    }
    .floorsearchlist li{
        float: left;
        width: 50px;
        cursor: pointer;
    }
    /*dialog内容框*/
    .dialogbox {
        padding: 0 40px;
    }

    .dialogbox .dialoginput {
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 20px;
        color: #666;
        position: relative;
        display: flex;
    }

    .dialoginput .inputname {
        width: 80px;
        padding: 0 10px;
        line-height: 30px;
        display: inline-block;
    }

    .dialoginput .inputnameauto {
        width: auto;
    }

    .dialoginput .textcount {
        line-height: 30px;
        color: #ccc;
    }

    .dialoginput .inputnameWidth {
        width: 104px;
        display: inline-block;
    }

    .dialoginput .inputtext {
        border: none;
        margin-left: 20px;
        flex: 1;
    }

    .dialoginput .inputtext .el-radio {
        line-height: 30px;
    }

    ::-webkit-input-placeholder {
        color: #ccc
    }

    :-ms-input-placeholder {
        color: #ccc
    }

    ::placeholder {
        color: #ccc
    }

    .dialoginput .el-select .el-input__inner {
        border: none;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
    }

    .dialoginput .dialogselect {
        flex: 1;
    }
    .dialoginput .el-select__tags{
        padding-left: 10px;
    }
    .dialogbox .noline {
        border: none;
    }

    .commonbox {
        margin: 20px 10px;
    }

    .dialogtext {
        line-height: 30px;
        margin-left: 20px;
    }

    .middleinput {
        border: none;
        width: 100%;
    }

    .rightcompany {
        margin-left: 5px;
    }

    /*合同日期*/
    .dialoginput .el-range-editor.el-input__inner {
        height: 30px;
        padding: 0;
        border: 0;
    }

    .dialoginput .inputtext .el-input__inner {
        height: 30px;
        padding: 0;
        border: 0;
    }

    .dialoginput .inputtext .el-input__prefix {
        left: 100%;
        width: 25px;
        margin-left: -25px;
    }

    .dialoginput .inputtext .el-input__suffix {
        right: 16px;
    }

    .dialoginput .inputtext .el-input__icon {
        line-height: 30px;
    }

    .dialoginput .datetext {
        margin-left: 0px;
        margin-top: -1px;
    }

    .dialoginput .el-date-editor .el-range-separator {
        width: 20px;
    }

    .dialoginput .el-date-editor .el-range-input {
        height: 28px;
        text-align: left;
        width: 72px;
    }

    .dialoginput .el-date-editor .el-range__icon {
        float: right;
    }

    .dialoginput .el-date-editor .el-range__close-icon {
        width: 16px;
    }

    /*选择按钮重写*/
    .el-radio__inner {
        border-radius: 4px;
    }

    .el-radio__input.is-checked .el-radio__inner {
        border-color: #457fcf;
        background: #457fcf;
    }

    .el-radio__input.is-checked + .el-radio__label {
        color: #457fcf;
    }

    .el-radio__inner::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 6px;
        background: transparent;
        top: 1px;
        left: 4px;
        border: 2px solid #fff;
        border-radius: 0;
        border-top: none;
        border-left: none;
        -webkit-transform: rotate(45deg) scaleY(0);
        -moz-transform: rotate(45deg) scaleY(0);
        -o-transform: rotate(45deg) scaleY(0);
        -ms-transform: rotate(45deg) scaleY(0);
        transform: rotate(45deg) scaleY(0);
    }

    .el-radio__input.is-checked .el-radio__inner::after {
        webkit-transform: rotate(45deg) scaleY(1);
        transform: rotate(45deg) scaleY(1);
    }

    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #fff;
        border-color: #fff;
        border: 1px solid #457fcf;
    }

    .el-checkbox__inner {
        width: 16px;
        height: 16px;
        border-radius: 4px;
    }

    .el-checkbox__inner::after {
        border: 2px solid #457fcf;
        border-left: 0;
        border-top: 0;
        left: 5px;
        top: 2px;
    }

    .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
        background-color: #457fcf;
        height: 4px;
        top: 5px;
    }

    /*tree树形空间*/
    .el-tree-node__content > .el-tree-node__expand-icon {
        padding: 5px;
    }

    .el-tree-node__expand-icon {
        font-size: 22px;
    }

    .treestyle .el-tree-node .el-tree-node__content {
        margin-top: 10px;
    }

    .treestyle .el-tree-node.is-current > .el-tree-node__content {
        color: #457fcf;
    }

    .treestyle > .el-tree-node > .el-tree-node__content > .el-tree-node__label {
        background: url("./assets/label1.png") center left no-repeat;
        padding-left: 24px;
        background-size: 16px 16px;
    }

    .treestyle > .el-tree-node > .el-tree-node__children > .el-tree-node > .el-tree-node__content > .el-tree-node__label {
        background: url("./assets/label2.png") center left no-repeat;
        padding-left: 24px;
        background-size: 16px 16px;
    }

    .treestyle > .el-tree-node > .el-tree-node__children > .el-tree-node > .el-tree-node__children > .el-tree-node > .el-tree-node__content > .el-tree-node__label {
        background: url("./assets/label3.png") center left no-repeat;
        padding-left: 24px;
        background-size: 16px 16px;
    }

    /*搜索样式*/
    .searchbox {
        margin-top: 30px;
        position: relative;
        font-size: 14px;
        width: 100%;
    }

    .searchbox input {
        background: none;
        border: none;
        border-bottom: 1px solid #e5e5e5;
        padding: 3px 35px 3px 35px;
        color: #ccc;
        width: 100%;
        height: 32px;
    }

    .searchbox .iconfont {
        position: absolute;
        width: 32px;
        height: 100%;
        left: 0;
        top: 0;
        text-align: center;
        color: #ccc;
        transition: all .3s;
        font-size: 14px;
        line-height: 32px;
    }

    .searchinput {
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        color: #666;
        margin-top: 30px;
        position: relative;
    }

    .searchinput .inputname {
        width: 110px;
        padding: 0 5px;
        line-height: 30px;
        display: inline-block;
    }

    .searchinput .inputnameauto {
        width: auto;
    }

    .searchinput .el-input__inner {
        height: 30px;
        padding: 0;
        border: 0;
        flex: 1;
    }

    .searchinput .el-date-editor .el-range-input {
        height: 26px;
    }

    .searchinput .el-date-editor .el-range__close-icon {
        width: 18px;
    }

    .searchinput .el-date-editor .el-range__icon {
        float: right;
    }

    .searchselect {
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        color: #666;
        margin-top: 30px;
        position: relative;
    }

    .searchselect .inputname {
        width: 80px;
        padding: 0 5px;
        line-height: 30px;
        display: inline-block;
    }

    .searchselect .inputnameauto {
        width: auto;
    }

    .searchselect .dialogselect {
        flex: 1;
    }

    .searchselect .el-input__inner {
        border: none;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
    }

    .searchselect .el-select .el-input .el-select__caret {
        color: #666;
    }

    .texttitle {
        display: flex;
        color: #666;
        margin-top: 30px;
        position: relative;
    }

    .texttitle .inputname {
        padding: 0 5px;
        line-height: 30px;
        display: inline-block;
    }

    /*列表样式*/
    .el-table .cell {
        box-sizing: border-box;
        white-space: normal;
        word-break: break-all;
        line-height: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 10px;
        text-align: left;
    }

    .el-table::before {
        display: none;
    }

    .el-table td {
        border: none;
    }

    .el-table__header tr th {
        background-color: #e4e4e4;
        color: #666;
        padding: 12px 0;
    }

    .btn_text {
        color: #457fcf;
        text-decoration: none;
        margin-right: 15px;
        font-weight: bold;
        background: none;
        border: none;
        cursor: pointer;
    }
    /*自定义列表*/
    .table_box{
        border-collapse:collapse;
    }
    .table_header tr th{
        background-color: #e4e4e4;
        color: #666;
    }
    /*表单及文本域*/
    .textareabox {
        height: 60px;
        padding: 5px;
        line-height: 18px;
        border: 1px solid #e5e5e5;
        resize: none;
        overflow-x: hidden;
    }

    /*步骤条*/
    .el-tabs--card > .el-tabs__header {
        border: none;
    }

    .el-tabs__header {
        margin: 0;
        background: #eee;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item {
        border: none;
    }

    .el-tabs__nav-scroll {
        display: flex;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__nav {
        border: none;
        height: 40px;
        align-items: center;
        display: table;
        margin: 0 auto;
    }

    .el-tabs__content {
        border-radius: 10px;
        background: #fff;
        min-height: 300px;
        padding: 20px 0;
    }

    .el-tabs__item {
        height: 30px;
        line-height: 30px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        box-shadow: 0px -2px 5px #dadada;
        margin: 10px 2px 0;
    }

    .el-tabs__item.is-active {
        background: #fff;
        color: #457fcf;
    }

    /*带竖线列表*/
    .listbox {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
    }

    .listcont {
        flex: 1;
        display: flex;
        flex-direction: row;
        line-height: 30px;
        border-left: 2px solid #e5e5e5;
        margin: 12px 0;
        padding-left: 10px;
    }

    .listcont .listcolum {
        flex: 1;
    }

    .listcont .el-button {
        background: #457fcf;
        color: #fff;
        border: none;
        border-radius: 15px;
    }

    .listcont .el-button span {
        color: #fff;
    }

    .listskin span {
        color: #999;
    }

    .listskin img {
        width: 10px;
        height: 12px;
        cursor: pointer;
    }

    .listskin input {
        width: 50%;
        height: 24px;
        border: none;
        border-bottom: 1px solid #e6e6e6;
        padding-left: 5px;
        font-size: 14px;
    }
    .listskin .text{
        width: 50%;
        height: 24px;
        border: none;
        padding-left: 5px;
        color: #333;
    }

    .contractcont {
        line-height: normal;
    }

    .contractlist span {
        width: 100%;
        color: #999;
        margin-bottom: 5px;
        display: block;
    }

    .contractcont .deletebtn {
        width: 45px;
    }

    .contractlist .el-radio {
        margin-left: 10px;
    }

    .contractlist .el-radio span {
        width: 14px;
        margin: 0;
        display: inline-block;
        border-radius: 4px;
    }

    .contractlist .el-radio .el-radio__input {
        margin-top: -2px;
    }

    .contractlist .el-radio .el-radio__label {
        padding-left: 5px;
    }

    .contracthead .contractcont {
        background: #eee;
        border-radius: 5px;
        padding: 10px 0 10px 10px;
        font-weight: bold;
        color: #666;
        border-left: 2px solid #eee;
    }

    .contracthead .contractlist span {
        color: #666;
    }

    .columbox {
        padding: 0 40px;
    }

    .columbox .columboxinput {
        border-bottom: 1px solid #e5e5e5;
        color: #666;
        position: relative;
        display: flex;
    }

    .columbox .columboxinput span {
        color: #666;
    }

    .columbox .columboxinput .inputname {
        width: 108px;
        padding: 0 10px;
        line-height: 30px;
        display: inline-block;
    }

    .columbox .columboxinput .inputtext {
        border: none;
        width: 100%;
        height: auto;
    }

    /*附件上传*/
    .uploadtitle {
        font-weight: bold;
    }

    .uploadtitle span {
        color: #ccc;
        font-weight: normal;
        font-size: 12px;
    }

    .uploadlist .uploadfile {
        width: 150px;
        height: 200px;
        float: left;
        margin: 10px 10px 0 0;
        position: relative;
    }

    .uploadlist .uploadfile span {
        position: absolute;
    }

    .uploadlist .uploadfile .spantopL {
        top: 0;
        width: 32px;
        line-height: 22px;
        border-top: 22px solid #d9d9d9;
        border-right: 10px solid transparent;
        height: 0;
    }

    .uploadlist .uploadfile .spantopLname {
        width: 32px;
        line-height: 22px;
        top: 0;
        padding-left: 8px;
    }

    .uploadlist .uploadfile .spantopR {
        top: 0;
        right: 0;
        background: #f1f4f3;
        width: 22px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        color: #fd702a;
        cursor: pointer;
        display: none;
    }

    .uploadlist .uploadfile .spantopR i {
        font-weight: bold;
    }

    .uploadlist .uploadfile .spanbottom {
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px 0;
        cursor: pointer;
        display: none;
    }

    .uploadlist .uploadfile:hover .spantopR, .uploadlist .uploadfile:hover .spanbottom {
        display: block;
    }

    .uploadlist .uploadfile img {
        width: 150px;
        height: 200px;
    }

    .avatar-uploader .el-upload {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 150px;
        height: 200px;
        background: #f2f2f2;
        margin-top: 10px;
    }

    .avatar-uploader.addimage .el-upload {
        float: left;
        margin-right: 10px;
    }

    .avatar-uploader .el-upload__text {
        color: #999;
        font-size: 14px;
        margin-top: 10px;
    }

    .avatar-uploader .avatar-uploader-icon {
        font-size: 16px;
        color: #fff;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 16px;
        background: #457fcf;
        text-align: center;
        margin-top: 70px;
    }

    /*租金和费用的样式*/
    .rentcontent {
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 20px;
        color: #666;
        position: relative;
        display: flex;
    }

    .rentcontent .inputname {
        width: 82px;
        padding: 0 15px 0 10px;
        line-height: 30px;
        display: inline-block;
    }

    .rentcontent .inputnameNarrow {
        width: auto;
        padding: 0 5px 0 10px;
    }

    .rentcontent .inputnameCenter {
        width: 96px;
    }

    .rentcontent .inputnameWidth {
        width: 110px;
    }

    .rentcontent .dialogselect {
        flex: 1;
    }

    .rentcontent .el-select .el-input__inner {
        border: none;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding-left: 0;
    }

    .rentcontent .inputtext {
        border: none;
        flex: 1;
        width: 100%;
    }

    .rentcontent .inputtextNarrow {
        text-align: center;
    }

    .rentcontent .rightcompany {
        line-height: 30px;
    }

    .renttitle .h3 {
        color: #353c5f;
        font-size: 16px;
        font-weight: bold;
    }

    .rentbutton .el-button {
        background: #457fcf;
        color: #fff;
        border: none;
        border-radius: 15px;
    }

    /*添加阶段*/
    .stagebox {
        border: 1px solid #e5e5e5;
        display: flex;
        flex-direction: row;
        background: #fcfdff;
        margin-top: 40px;
        position: relative;
    }

    .stageboxtitle {
        border: 1px solid #e5e5e5;
        position: absolute;
        width: 70px;
        line-height: 30px;
        color: #333;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        left: 20px;
        top: -15px;
        background: #fff;
    }

    .stagecontent {
        flex: 1;
        padding: 40px 0 10px 0;
    }

    .stagecontent .inputtext {
        border: none;
        flex: 1;
    }

    .stagecontent .inputtext .el-input__inner {
        height: 30px;
        padding: 0;
        border: 0;
    }

    .stagecontent .inputtext .el-input__prefix {
        left: 100%;
        width: 25px;
        margin-left: -25px;
    }

    .stagecontent .inputtext .el-input__icon {
        line-height: 30px;
    }

    .stagecontent .inputtext .el-input__suffix {
        right: 13px;
    }

    .stagelist {
        display: flex;
        flex-direction: row;
    }

    .stagelist > div {
        flex: 1;
        padding: 0 20px;
    }

    .stageaction {
        width: 80px;
        border-left: 1px solid #e5e5e5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .stageaction span {
        width: 100%;
        display: block;
        text-align: center;
    }

    .stageaction button {
        color: #457fcf;
        text-decoration: none;
        font-weight: bold;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
    }

    .stagelineheight {
        line-height: 30px;
    }

    .stagebutton {
        margin-top: 30px;
    }

    .stagesale {
        padding: 0 20px;
        margin-top: 10px;
    }

    .addlistnumber {
        background: #fafafa;
        color: #ccc;
        border: 1px solid #ccc;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 12px;
        margin-top: 3px;
    }

    .stagesale .stagesaletitle {
        padding: 0 10px;
        margin-bottom: 20px;
    }

    .stagesale .stagesalelist {
        display: flex;
        text-align: center;
        line-height: 30px;
    }

    .stagesale .stagesalelist .flexwidth {
        flex: 1;
        margin: 0 15px;
    }

    .stagesale .stagesalelist .flexwidth input {
        text-align: center;
    }

    .stagesale .stagesalelist .salelistwidth {
        width: 30px;
    }

    .stagesale .stagesalelist .saleselect {
        width: 140px;
        margin: 0 15px;
    }

    .stagesale .stagesalelist .salelistadd {
        width: 104px;
        margin-left: 15px;
    }

    .stagesale .stagesalelist .salelistadd .el-button {
        background: #fff;
        color: #457fcf;
        border-radius: 15px;
        border: 1px solid #457fcf;
        font-weight: bold;
    }

    .stagesale .stagesalelist .salelistdel {
        width: 45px;
        margin-left: 20px;
    }

    .lineheight {
        line-height: 30px;
    }

    /*保证金*/
    .bondcont {
        padding: 0 20px;
        display: flex;
    }

    .bondcont > div {
        flex: 1;
        margin: 30px 20px;
        border: 1px solid;
        text-align: center;
        padding: 10px 0;
    }

    .bondcont > div.bondconta {
        border-color: #457fcf;
        color: #457fcf;
    }

    .bondcont > div.bondcontb {
        border-color: #45cfca;
        color: #45cfca;
    }

    .bondcont > div.bondcontc {
        border-color: #ff5400;
        color: #ff5400;
    }

    .bondcont span {
        width: 100%;
        display: block;
    }

    .bondcont .money {
        font-weight: bold;
        font-size: 20px;
        margin-top: 10px;
    }

    /*历史合同*/
    .listhistory {
        flex-direction: column;
        padding-left: 20px;
        line-height: normal;
        margin: 20px 0;
    }

    .historydate {
        font-size: 16px;
        font-weight: bold;
        color: #666;
    }

    .historydate a {
        font-size: 14px;
        color: #457fcf;
        text-decoration: none;
        margin-left: 80px;
    }

    .historyversion {
        font-size: 14px;
        color: #666;
        margin-top: 20px;
    }

    .historyversion .revisecont {
        font-weight: bold;
        margin-left: 30px;
    }

    .historycont {
        color: #999;
        margin-top: 10px;
    }

    .historycont li {
        margin-top: 5px;
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

    .collect_money_tabs .el-tabs--border-card > .el-tabs__header.el-tabs__item.is-active {
        color: #457fcf;
        font-weight: 600;
        margin: 10px -1px 0;
    }

    /* dialog组件关于时间选择器得样式修改 */
    .dialog_template .el-input__prefix {
        left: -5px;
        top: -5px;
    }

    .dialog_template .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date {
        margin-left: -2px;
    }

    .dialog_template .el-input__icon.el-icon-circle-close {
        margin-right: -26px;
    }
    /*数据字典*/
    .dictstatus .el-input{
        width: 70px;
    }
    .dictstatus .el-input__inner{
        height: 26px;
        padding: 0 12px;
    }
    .dictstatus .el-input__icon{
        width:16px;
    }
    /*切换标题*/
    .tabmenu{
        color: #666;
        margin: 10px 0;
        font-size: 18px;
        font-weight: bold;
    }
    .tabmenu a{
        color: #666;
        text-decoration: none;
        margin-right: 30px;
        border-left: 4px solid #fff;
        padding-left: 5px;
    }
    .tabmenu a.router-link-active{
        color: #353c5f;
        border-left: 4px solid #353c5f;
        padding-left: 5px;
    }
</style>
