/*
  Composant représentant le menu principal de l'application
  =========================================================
  ** Avec un bouton menant à la page d'accueil
  ** Avec un bouton menant à la page de crédits
  =========================================================
*/

const MainMenu = {
    data() {
      return {
        title: "🍸Cocktailpedia",
      }
    },
    template: `
    <header>
    <nav>
    <router-link to="/">{{ title }}</router-link>
      <ul>
        <li><router-link to="/credit">Crédit</router-link></li>
      </ul>
    </nav>
  </header>
      `,
  };
  
  export default MainMenu;