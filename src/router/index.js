import { createRouter, createWebHistory } from "vue-router";
import mainPage from "../views/mainPage.vue";

import serve from "../components/serve.vue";
import passengers from "../views/passengers.vue";
import passenger2 from "../components/passenger2.vue";

const routes = [{
        path: "/atto",
        name: "mainPage",
        component: mainPage,
    },
    {
        path: "/atto/passengers",
        name: "passengers",
        component: passengers,
    },
    {
        path: "/atto/passenger2",
        name: "passenger2",
        component: passenger2,
    },
    {
        path: "/serve",
        name: "serve",
        component: serve,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;