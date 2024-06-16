import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import Result from "../views/Result.vue";
import Question from "../components/Question.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/quiz",
        name: "Quiz",
        component: Quiz,
    },
    {
        path: "/quiz/:questionIndex",
        name: "Question",
        component: Question,
    },
    {
        path: "/result",
        name: "Result",
        component: Result,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
