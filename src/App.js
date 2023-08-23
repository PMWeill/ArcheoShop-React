import { Menu } from './components/Menu/Menu';
import Boutique from './components/Boutique/Boutique';
import { articles } from './articles';
import { useState } from 'react';
import { BoutiqueContext } from './BoutiqueContext';
import './App.css';
import { MenuContext } from './MenuContext';
import { Panier } from './components/Panier/Panier';


function App() {
  // declaration de mes states
  const [stateArticles, setStateArticles] = useState(
    {
      "articles": articles,
      "tabPanier": [],
      "totalPanier": 0,
      "decrementQte": decrementQte,
      "incrementQte": incrementQte
    }
  );
  const [stateMenu, setStateMenu] = useState(
    {
      "displayPanier": false,
      "displayUl": !responsive(),
      "tabMenuNav": [
        {
          text: "Magasin",
          url: "#",
          isActive: false,
        },
        {
          text: "Panier",
          url: "#",
          isActive: false,
        },
        {
          text: "Contact",
          url: "#",
          isActive: false,
        },
      ],
      "burgerButton": burgerButton,
      "fonctDisplayPanier": fonctDisplayPanier

    }
  )
  function responsive() {
    let orientation; //true =>portrait mobile
    if (window.innerWidth > window.innerHeight) {
      orientation = false;
      // ou utiliser l'event deviceOrientation
    } else {
      orientation = true;
    }
    return orientation;
  }
  function burgerButton(disp) {
    // let displayUlTmp = !stateMenu.displayUl;
    setStateMenu({
      ...stateMenu,
      "displayUl": !disp
    })

  }
  function fonctDisplayPanier(disp) {
    if(disp) {
      document.body.style.height = "auto";
      document.body.style.overflow = "visible";
    }else {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
    setStateMenu({
      ...stateMenu,
      "displayPanier": !disp
    })

  }
  function decrementQte(id) {
    // je fait une copie de mon tableau stateArticles car il est en lecture seul et je ne peux pas le modifier directement.
    let articlesTmp = stateArticles.articles;
    // je modifie la qte de l'article correspondant à l'id transmie par mon component bouton
    articlesTmp.map((valeur, index) => {

      if (index === id) {
        valeur.qte > 0 && --valeur.qte;
        // ou  valeur.qte === 0 ? valeur.qte = 0 : valeur.qte -= 1;

      }
    })
    
    //je ajoute l'id de l'article acheté au tableau stateArticles.tabPanier
    const tmpTabPanier = stateArticles.tabPanier;
    tmpTabPanier.push(id)
    // je réasigne le nvx tableau article modifié à mon stateArticles grâce à sa fonction setStateArticles
    setStateArticles({
      ...stateArticles,//le ...objet, rappelle toutes les propriétées de l'objet
      "articles": articlesTmp,
      "tabPanier": tmpTabPanier
    });
    calculTotal()
  }


  function incrementQte(id) {
    let supprIndex;
    stateArticles.tabPanier.find((value, index) => {
      if (value === id) {
        //je recupére dans mon tableau stateArticles.tabPanier l'indec de l'article à supprimer
        supprIndex = index;

      }
    })
    
    console.log(supprIndex);
    const tmpTabPanier = stateArticles.tabPanier;
    tmpTabPanier.splice(supprIndex, 1);

    let articlesTmp = stateArticles.articles;
    articlesTmp.map((valeur, index) => {

      if (index === id) {
        valeur.qte > 0 && ++valeur.qte;
        // ou  valeur.qte === 0 ? valeur.qte = 0 : valeur.qte -= 1;

      }
    })

    

    setStateArticles(
      {
        ...stateArticles,//le ...objet, rappelle toutes les propriétées de l'objet
        "articles": articlesTmp,
        "tabPanier": tmpTabPanier
      }
    );
    calculTotal()
  }
  function calculTotal() {
    let totalTmp = 0;
    stateArticles.tabPanier.map((valeur,) => {
      totalTmp += stateArticles.articles[valeur].price
    })
    setStateArticles(
      {...stateArticles,
      "totalPanier": totalTmp}
    )
  }



  return (
    <MenuContext.Provider value={stateMenu}>
      <BoutiqueContext.Provider value={stateArticles}>

        <header>
          <Menu></Menu>
        </header>
        <main>
          {
            stateMenu.displayPanier ?
              <Panier></Panier>
              :
              <></>
          }
          <Boutique articles={stateArticles.articles}></Boutique>
        </main>
        <footer></footer>
      </BoutiqueContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
