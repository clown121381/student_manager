<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="12" :offset="6">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="schoolNumber">
                            <el-input :disabled="submitButton" v-model="ruleForm.schoolNumber" placeholder="请输入学工号"></el-input>
                        </el-form-item>
                        <el-form-item label="用户类型" prop="type">
                            <el-select :disabled="submitButton" v-model="ruleForm.type" placeholder="选择用户类型">
                                <el-option label="学生" value="student"></el-option>
                                <el-option label="教师" value="teacher"></el-option>
                                <el-option label="管理员" value="admin"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="用户密码" prop="password">
                            <el-input :disabled="submitButton" type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button :disabled="submitButton" type="primary" @click="submitForm('ruleForm')">登陆系统</el-button>
                            <el-button :disabled="submitButton" @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import axios from '@/axios'
    import {setCookie} from "@/util/cookieUtils";

    export default {
        name: "Login.vue",
        data() {
            return {
                ruleForm: {
                    schoolNumber: '',
                    type: '',
                    password: ''
                },
                submitButton: false,
                rules: {
                    schoolNumber: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { len: 10, message: '用户名长度为10', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '请输选择身份', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let url = 'login';
                        axios.post(url,{
                            "schoolNumber":this.ruleForm.schoolNumber,
                            "type":this.ruleForm.type,
                            "password":this.ruleForm.password,
                        }).then(resp => {
                            let data = resp.data;
                            if(data.requestflag){
                                this.submitButton = true;
                                setCookie('username',data.name);
                                this.$message(data.message)
                            }else{
                                this.$message(data.message)
                            }
                        }).catch(err => {
                            this.$message('发生错误'+err)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>