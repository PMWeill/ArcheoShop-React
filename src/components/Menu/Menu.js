import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import "./Menu.css"
import image from "./logo.jpg"
import { MenuContext } from '../../MenuContext';
/* function responsive() {
  let orientation; //true =>portrait mobile
  if (window.innerWidth > window.innerHeight) {
    orientation = false;
    // ou utiliser l'event deviceOrientation
  } else {
    orientation = true;
  }
  return orientation;
} */

function Logo() {
  return <img src={image} alt="Mon Image" className="logo"></img>;
}
function MenuEntrie(props) {
  const menuContext = useContext(MenuContext);
  return (
    <a href={props.url} onClick={(e)=>{
      e.preventDefault();
      props.text === "Panier" ? menuContext.fonctDisplayPanier(menuContext.displayPanier) : <></>
    }}>
      <li>{props.text}</li>
    </a>
  );
}
function Research() {
  return "";
}
function Menu() {
 const menuContext = useContext(MenuContext)
  // let oriententation = responsive();
  // utilisation de state dans un component fonctionnel
  /* window.addEventListener("resize", () => {
    setOrientation(responsive());
    setDisplayUl(!orientation);
  }); */
console.dir(menuContext);
  return (
    <nav>
      <Logo></Logo>

    {
      menuContext.displayUl ?
        <ul className= "slide-in-elliptic-top-fwd menuEntriesMobile menuEntries">
          {
            /*  boucle sur mon tableau objet menu */
            menuContext.tabMenuNav.map((valeur, index) => {
              return (
                <MenuEntrie
                  text={valeur.text}
                  url={valeur.url}
                  isActive={valeur.isActive}
                  key={index}
                ></MenuEntrie>
              );
            })
          }
        </ul>
        :
        <></>
      }
      <Research></Research>

      {
        //mise en place d'une condition ternaire pour l'affichage
        
          <div className="burger" onClick={() => menuContext.burgerButton(menuContext.displayUl)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
       
         
      }
    </nav>
  );
}
export { Menu };