/*
    Vue permettant l'affichage de la liste des crédits
    ================================================================
    ** Affiche la liste des frameworks utilisés
    ** Affiche la liste des API utilisées
    ** Affiche les ressources utilisées
    ================================================================
*/

const CreditView = {
    template: 
    `
    <article>
            <h2>Tous les outils utilisés</h2>
            <p>Frameworks</p>
            <ul>
                <li>Vue JS</li>
                <li>MVP.css</li>
            </ul>
            <p>API utilisée</p>
            <aside>
                <p>https://www.thecocktaildb.com/</p>
            </aside>
                <p>Ressources consultées</p>
            <ul>
                <li>Cours de Vue js</li>
                <li>https://www.thecocktaildb.com/api.php</li>
            </ul>
            <p>Fait entièrement par El-Farouk ACHIRAFI</p>
      </article>
    `,
};
  
export default CreditView;