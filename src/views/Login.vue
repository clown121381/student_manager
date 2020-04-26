<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="12" :offset="6">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入学工号"></el-input>
                        </el-form-item>
                        <el-form-item label="用户类型" prop="type">
                            <el-select v-model="ruleForm.type" placeholder="选择用户类型">
                                <el-option label="学生" value="student"></el-option>
                                <el-option label="教师" value="teacher"></el-option>
                                <el-option label="管理员" value="admin"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="用户密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">登陆系统</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Login.vue",
        data() {
            return {
                ruleForm: {
                    name: '',
                    type: '',
                    password: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { len: 10, message: '用户名长度为10', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    password: [
                        { type: 'password', required: true, message: '请输入密码', trigger: 'bulr' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
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