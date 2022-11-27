import HomeView from "../views/HomeView.js";
import CreditView from "../views/CreditView.js";
import NotFound from "../views/NotFound.js";

/*
  Composant gérant le routage de l'application
  ============================================
  ** '/' : Affiche la page d'accueil
  ** '/credit' : Affiche la page des crédits
  ** '*' : Affiche la page d'erreur 404
  ============================================
*/

const routes = [
  { path: "/", component: HomeView, props: { cocktails: true } },
  { path: "/credits", component: CreditView },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
