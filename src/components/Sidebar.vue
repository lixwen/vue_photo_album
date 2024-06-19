<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse"
        mode="horizontal" :collapse-transition="false">
        <el-menu-item index="1" @click="navigateTo('/')">
            <i class="el-icon-house"></i>
            <template v-slot:title>Home</template>
        </el-menu-item>
        <!-- <el-menu-item index="2" @click="navigateTo('/login')">
            <i class="el-icon-document"></i>
            <template v-slot:title>login</template>
        </el-menu-item> -->
        <el-menu-item index="3" @click="navigateTo('/gallery')">
            <i class="el-icon-news"></i>
            <template v-slot:title>Gallery</template>
        </el-menu-item>
        <el-menu-item index="4" @click="navigateTo('/upload')">
            <i class="el-icon-setting"></i>
            <template v-slot:title>Upload Photo</template>
        </el-menu-item>
        <!-- <el-menu-item index="5" @click="navigateTo('/register')">
            <i class="el-icon-setting"></i>
            <template v-slot:title>register</template>
        </el-menu-item> -->

    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(`Selected key: ${key}`, `Key path: ${keyPath}`);
        },
        navigateTo(route) {
            console.log("r: " + route);
            this.$router.push(route);
        },

    },

};
</script>

<style scoped>
.el-menu-vertical-demo {
    width: 100%;
    /* border-bottom: 1px solid #ddd; */
    justify-content: center; /* 将菜单项居中对齐 */

}
</style>
