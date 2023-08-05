import styles from "../content.module.scss";
import Recipe from "./recipe";
import { data } from "../data/recipes";

function Content() {

    const recipes = data;
    return (
    
    
    <div className="flex-fill container p-20">
<h1 className="my-30">Découvrez nos nouvelles recettes</h1>
<div className={`card p-20 ${styles.contentCard} br`}>
<div className={styles.grid}>

{recipes.map((r) => (
<Recipe title={r.title} image={r.image} />
))}
</div>
</div>
    </div>
    );
}
export default Content;