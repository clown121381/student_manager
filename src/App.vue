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
                    <el-menu :default-active="index" mode="horizontal" @select="handleSelect">
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
                        <el-menu-item index="2">学生选择导师</el-menu-item>
                        <el-menu-item index="3">老师导入学生</el-menu-item>
                        <el-menu-item index="4">登录</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                <el-col v-if="index == 1"></el-col>
                <el-col v-if="index == 2"><chooseTeacher></chooseTeacher></el-col>
                <el-col v-if="index == 3"><importStudent></importStudent></el-col>
                <el-col v-if="index == 4"><login></login></el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import Login from "@/views/Login";
import ImportStudent from "@/views/ImportStudent";
import ChooseTeacher from "@/views/ChooseTeacher";
// import ViewChoosed from "@/views/ViewChoosed";

// import {getCookie} from "@/util/cookieUtils";

export default {
    name: 'App',
    components: {
        'login': Login,
        'importStudent': ImportStudent,
        'chooseTeacher':ChooseTeacher
    },
    data:()=>({
        isLogined:false,
        index: '4',
        currentUser:{
            name: '',
            school_number:''
        }
    }),
    methods: {
        handleSelect(key, keyPath) {
            console.log(key+'-------------', keyPath);
            this.index = key
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
