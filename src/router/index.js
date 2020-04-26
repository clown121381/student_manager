import Vue from 'vue'
import VueRouter from 'vue-router'
import ChooseTeacher from "@/views/ChooseTeacher";
import ImportStudent from "@/views/ImportStudent";
import ViewChoosed from "@/views/ViewChoosed";
import Login from "@/views/Login";

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/ChooseTeacher',
            name:ChooseTeacher,
            component: ChooseTeacher
        },
        {
            path:'/ImportStudent',
            name:ImportStudent,
            component: ImportStudent
        },
        {
            path:'/ViewChoosed',
            name:ViewChoosed,
            component: ViewChoosed
        },
        {
            path:'/Login',
            name:Login,
            component: Login
        }
    ]
})