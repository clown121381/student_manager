<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="12" :offset="6" style="text-align: center">
                    <h1>欢迎来到教师学生互选系统</h1>
                </el-col>
            </el-row>
        </el-header>
        <el-header>
            <el-row>
                <el-col :span="12" :offset="6" style="text-align: center">
                    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                        <el-submenu index="1">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2"><router-link to="/ChooseTeacher">学生选择导师</router-link></el-menu-item>
                        <el-menu-item index="3"><router-link to="/ImportStudent">老师导入学生</router-link></el-menu-item>
                        <el-menu-item index="4"><router-link to="/Login">登录</router-link></el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                <el-col>
                    <router-view></router-view>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data:()=>({
        currentUser: {
            name:''
        },
        isLogined:false,
        activeIndex: '4',
    }),
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .router-link-active {
        text-decoration: none;
    }
</style>
