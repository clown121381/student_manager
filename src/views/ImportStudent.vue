<template>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="16" :offset="4">
                        <el-steps :active="active" align-center>
                            <el-step title="步骤1" description="上传学生excel文件"></el-step>
                            <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                            <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                            <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
                        </el-steps>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row>

                </el-row>
            </el-main>
            <el-main>
                <el-row>
<!--                    <el-col :span="16" :offset="5">-->
<!--                        <el-button style="margin-top: 12px;" :disabled="nextStatus" @click="next">下一步</el-button>-->
<!--                    </el-col>-->
                    <el-col v-if="active==0" :span="16" :offset="5">
                        <choose-students-excel></choose-students-excel>
                    </el-col>
                    <el-col v-else-if="active==1" :span="16" :offset="4">

                    </el-col>
                    <el-col v-else-if="active==2" :span="16" :offset="4">

                    </el-col>
                </el-row>
            </el-main>
        </el-container>
</template>
<script>
    import ChooseStudentsExcel from "@/views/ChooseStudentsExcel";
    export default {
        name: "ImportStudent.vue",
        components:{
            "chooseStudentsExcel":ChooseStudentsExcel
        },
        data() {
            return {
                active: 0,
                nextStatus: false,   /* 按钮的点击状态*/
                student: {
                    name: 'zhangsan'
                },

            };
        },
        methods: {
            next() {
                if (this.active++ > 2){
                    this.nextStatus = true
                    this.$message('success')
                }
            }
        }
    }
</script>

<style scoped>

</style>