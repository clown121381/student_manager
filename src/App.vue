<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="12" :offset="6" style="text-align: center">
                    <h1>欢迎来{{currentUser.name}}到教师学生互选系统</h1>
                </el-col>
            </el-row>
        </el-header>
        <el-header>
            <el-row>
                <el-col :span="12" :offset="6" style="text-align: center">
                    <el-menu :default-active="index" mode="horizontal" @select="handleSelect">
                        <el-submenu index="1">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1" @click="routeToListStudents">学生管理</el-menu-item>
                            <el-menu-item index="2-2" @click="routeToListTeachers">教师管理</el-menu-item>
                            <el-menu-item index="2-3" @click="routeToListCourses">课程管理</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">其他管理</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2" @click="routeToChooseTeacher">学生选择导师</el-menu-item>
                        <el-menu-item index="3" @click="routeToImportStudent">老师导入学生</el-menu-item>
                        <el-menu-item v-if="!isLogined" index="4" @click="routeToLogin">登录</el-menu-item>
                        <el-menu-item v-else index="4" @click="routeToMine">我的</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
                <router-view></router-view>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import PubSub from 'pubsub-js'

export default {

    name: 'App',
    components: {},
    data:()=>({
        isLogined: false,
        index: '4',
        loginType:'',
        currentUser:{
            name: '',
            school_number:'',
        }
    }),
    mounted(){
        PubSub.subscribe('afterLogin',(msg,data)=>{
            this.isLogined = true
            this.currentUser = data.data;
            this.loginType = data.type;
            console.log(data)
        })

        PubSub.subscribe('loginType',(msg,data)=>{
            this.loginType = data;
            console.log(data)
            console.log(this.loginType != 'student')
        })
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key+'-------------', keyPath);
            this.index = key
        },
        routeToChooseTeacher(){
            this.$router.push('/ChooseTeacher')
        },
        routeToImportStudent(){
            this.$router.push('/ImportStudent')
        },
        routeToLogin(){
            this.$router.push('Login')
        },
        routeToListStudents(){
            this.$router.push('ListStudents')
        },
        routeToListTeachers(){
            this.$router.push('ListTeachers')
        },
        routeToListCourses(){
            this.$router.push('ListCourses')
        },
        routeToMine(){

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
