<template>
    <div>
        <el-submenu :index="index+''">
            <template slot="title">
                <i :class="'iconfont '+item.iconClass+index"></i>
                <span>{{item.title}}</span>
            </template>
            <el-menu-item
                :index="child.tabs?child.tabs[0].path:child.path"
                v-for="(child, $index) in item.children"
                :key="child.title">
                <router-link tag="li" :to="child.tabs?child.tabs[0].path:child.path">
                    <span>-</span>
                    <span class="menutitle">{{child.title}}</span>
                </router-link>
            </el-menu-item>
        </el-submenu>
    </div>
</template>

<script>
    export default {
        name: "menu-item",
        props:['item','index']
    }
</script>

<style scoped>

</style>