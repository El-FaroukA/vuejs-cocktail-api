/*
    Composant principal de l'application
    ====================================
    ** Ici sont réalisées les requêtes à l'API en fonction de la recherche de l'utilisateur :
        *** La recherche aléatoire de cocktail
        *** La recherche par nom de cocktail
        *** La recherche par ingrédient
        *** La recherche aléatoire de cocktail sans alcool
    ** Les données sont ensuite transmises aux composants enfants
    ====================================
*/

const App = {
    data() {
        return {
          cocktails: [],
          cocktail: {},
          cocktailIngredient: [],
          cocktailsById: [],
          isFind: true,
        };
      },
    mounted() {
        console.log("App mounted");
        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").
            then((response) => {
                response.json().then((data) => {
                    this.cocktailIngredient = data.drinks;
                })
        })
    },
    methods: {
        async getRandomCocktail() {
            this.cocktails = [];
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            const data = await response.json();
            this.cocktail = data.drinks[0];
            this.cocktails.push(this.cocktail);
        },

        async getCocktailByName() {
            this.cocktails = [];
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.cocktail.name);
            const data = await response.json();
            if (data.drinks != null) {
                this.isFind = true;
                this.cocktails = data.drinks;
                this.cocktail.name = "";
            } else {
                this.isFind = false;
            }
            document.getElementById("cocktail_name").value = "";
        },

        async getCocktailById() {
            this.cocktails = [];
            this.cocktailsById.forEach(async (cocktail) => {
                const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktail.idDrink);
                const data = await response.json();
                this.cocktails.push(data.drinks[0]);
            })
        },

        async getCocktailByIngredient() {
            this.cocktailsById = [];
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + this.cocktail.ingredient);
            const data = await response.json();
            this.cocktailsById = data.drinks;
            this.getCocktailById();
        },

        async getNonAlcoholicCocktail() {
            this.cocktailsById = [];
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
            const data = await response.json();
            const random = Math.floor(Math.random() * data.drinks.length);
            this.cocktail = data.drinks[random];
            this.cocktailsById.push(this.cocktail);
            this.getCocktailById();
        }
    },
    template: 
    `<main>
        <section>
            <aside class="cocktail_hasard">
                <h3>🎲Trouver un cocktail au hasard</h3>
                <a href="#" @click.prevent="getRandomCocktail()"><b>Surprends-moi😏</b></a>
                <a href="#" @click.prevent="getNonAlcoholicCocktail()"><i>Sans alcool la fête est plus folle🥳</i></a>
            </aside>
            
            <form @submit.prevent="getCocktailByIngredient()">
                <aside>
                    <h3>🍸Trouver un cocktail à base de :</h3>
                    <select v-model="cocktail.ingredient" required>
                        <option value="label" disabled>Choisir un ingrédient</option>
                        <option v-for="ingredient in cocktailIngredient" :value="ingredient.strIngredient1">{{ingredient.strIngredient1}}</option>
                    </select>
                    <button type="submit">Rechercher</button>
                </aside>
            </form>
            
            <form @submit.prevent="getCocktailByName()">
                <aside>
                    <h3>🔎Rechercher un cocktail</h3>
                    <input type="text" v-model="cocktail.name" id="cocktail_name"required>
                    <button type="submit">Rechercher</button>
                </aside>
            </form>
        </section>
        <router-view :cocktails="cocktails"></router-view>
    </main>`,
}

export default App;