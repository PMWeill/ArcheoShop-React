import React, { useContext } from 'react';
import Bouton from '../Bouton/Bouton';
import { BoutiqueContext } from '../../BoutiqueContext';
import './Card.css';




const Card = (props) => {
  const boutiqueContext =useContext(BoutiqueContext)
  return (

    <div className="card">
      <div className="nom-article">{props.article.name}</div >
      <div className='produit'>
      <div className="img-article"><img src={props.article.url} alt='mon image'></img></div>
      <div className='prdDetail'>
      <div className="prix">
        Prix : {props.article.price}€</div >
      { props.article.promo ? <div className= "promo">promo</div > : <></>
      }
      <div className="qte">
       Quantité restante :  {props.article.qte} Unité</div >
        </div>
        </div>
      <div className="cp">{props.article.description}</div >
     
      <Bouton id={props.article.id}></Bouton>
    </div >

  )
}

// ancienne nomenclature  et identique a la const Card au-dessus
// function Card(props){
//   return (
//     <div className={styles.Card}>
//     Card Component
//   </div>
//   )
// }

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
