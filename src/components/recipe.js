import styles from './recipe.module.scss';
import recipe from '../assets/images/katie-smith-uQs1802D0CQ-unsplash.jpg'


function Recipe() {
    return (
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={recipe} alt="recipe" />
            </div>
            <div className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}>
<h3> Cookies </h3>
            </div>
        </div>
    );
}

export default Recipe;