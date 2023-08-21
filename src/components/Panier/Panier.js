import { useContext } from "react";
import "./Panier.css";
import { BoutiqueContext } from "../../BoutiqueContext";
import { MenuContext } from "../../MenuContext";
const Panier = () => {
    const boutiqueContext = useContext(BoutiqueContext);
    const menuContext = useContext(MenuContext);
    return (
        <div className="backPanier">
            <div className="panier">
                <h2>Votre panier</h2>
                <div className="close" onClick={
                    ()=>{
                    menuContext.fonctDisplayPanier(menuContext.displayPanier)
                    }
                    }>X</div>
            </div>
        </div>
    )
}
export { Panier }