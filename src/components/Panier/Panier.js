import { useContext } from "react";
import "./Panier.css";
import { BoutiqueContext } from "../../BoutiqueContext";
const Panier = () => {
    const boutiqueContext = useContext(BoutiqueContext);
    return (
        <div className="backPanier">
            <div className="panier">
                <h2>Votre panier</h2>
                <p className="close">X</p>
            </div>
        </div>
    )
}
export { Panier }