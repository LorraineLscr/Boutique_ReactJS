import React, {useContext} from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import "./BuyBtn.css"; 

function BuyBtn(props) {
    const data = useContext(BoutiqueContext);
    return <button className='boutonAchat'
    disabled={data.playlistData[props.datakey].qte ? false : true}
    onClick={()=>data.addArticle(props.datakey)}
    >
        {data.playlistData[props.datakey].qte ? "Acheter" : "En rupture de stock"} <i className="fa-solid fa-cart-shopping"></i>
        </button>;
}

export default BuyBtn; 