/*
  Composant représentant un cocktail
  ==================================
  ** Affiche le titre du cocktail
  ** Affiche l'image
  ** Affiche la description du cocktail
  ** Affiche la liste des ingrédients
  ==================================
*/

const Cocktail = {
  props: ["cocktail"],
  template: 
  `
  <aside class="cocktail_card">
    <img v-bind:src="this.cocktail.strDrinkThumb" alt="img_cocktail">
    <h3>
        {{ this.cocktail.strDrink }}
        <sup v-if="this.cocktail.strAlcoholic === 'Alcoholic'">Alcool</sup>
    </h3>
    <p>
      Type : {{ this.cocktail.strCategory }}
    </p>
    <p>Ingrédients : </p>
    <ul>
      <li>{{ this.cocktail.strIngredient1 }}</li>
      <li>{{ this.cocktail.strIngredient2 }}</li>
      <li>{{ this.cocktail.strIngredient3 }}</li>
      <li>{{ this.cocktail.strIngredient4 }}</li>
    </ul>
  </aside>
  `
}

/*
  Vue permettant l'affichage de la liste des cocktails
  ================================================================
  ** Affiche soit :
    *** - Un message d'erreur si aucun cocktail n'a été trouvé
    *** - La liste des cocktails trouvés
  ================================================================
*/

const HomeView = {
    props: ["cocktails"],
    template: `
    <section>
      <header>
        <h2 v-if="this.cocktails.length === 0">Aucun résultat</h2>
        <h2 v-else="this.cocktails.length != 0">{{ this.cocktails.length }} résultat(s)</h2>
      </header>
      <cocktail v-if="this.cocktails.length != 0" v-for="cocktail in cocktails" :cocktail="cocktail"></cocktail>
    </section> 
    `,
    components: {
      Cocktail
    }
  };
  
  export default HomeView;