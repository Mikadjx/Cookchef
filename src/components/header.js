import styles from "../header.module.scss";
import cookchef from "../assets/images/Orange and Brown Culinary Kitchen Logo (1).png";
import { useState} from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
   const [showMenu, setShowMenu] = useState(false);
    return (
    <header className={`${styles.header} d-flex align-items-center`}>

  
    <div className="flex-fill">
        <img src={cookchef} alt="logo cookchef" />
        </div>
    
    <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
        <i class="fa-solid fa-heart mr-5"></i>
            
            <span>Wishlist</span> </button>
        <button className="btn btn-primary">connexion</button>
    
    </ul>
    
    <i onClick={() => setShowMenu(true)} className={`fa-solid fa-bars ${styles.headerXs}`}></i>
 {showMenu && (
    <>
    <div onClick={() => setShowMenu(false)} className="calc"></div>
    <HeaderMenu />
    </>
 )}
 
    </header>

    );
}
export default Header;