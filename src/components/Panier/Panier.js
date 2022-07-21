import React, { useContext } from "react";
import BoutiqueContext from "../../BoutiqueContext";
import CartBtn from "../CartBtn/CartBtn";
import "./Panier.css"

function Panier(props) {
    const data = useContext(BoutiqueContext);
    let totalPanier = 0;
    const countOccurences = (tab) => {
        tab = tab.sort();
        var result = {};
        tab.forEach((elem) => {
            if (elem in result) {
                result[elem] = ++result[elem];
            }
            else {
                result[elem] = 1;
            }
        });
        return result;
    }
    /* console.dir(countOccurences(data.achat)) */

    return (
        <div className="panier">
            <h2>PANIER :</h2>
            <table>
                <thead>
                    <tr key="0">
                        <td></td>
                        <td className="tdpanier">Titre</td>
                        <td className="tdpanier">Prix unitaire</td>
                        <td className="tdpanier">Quantité</td>
                        <td className="tdpanier">Sous-total</td>
                        <td className="tdpanier">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(countOccurences(data.achat)).map((entree, cle) =>{
                        /* console.dir(entree);
                        console.dir(countOccurences(data.achat)[entree]) */
                        let qte = countOccurences(data.achat)[entree];
                        totalPanier += data.playlistData[entree].prix*qte;
                        return(
                            <tr key={entree}>
                                <td><img src={data.playlistData[entree].cover} alt={data.playlistData[entree].title} /></td>
                                <td>{data.playlistData[entree].title}</td>
                                <td>{data.playlistData[entree].prix}</td>
                                <td>{qte}</td>
                                <td>{data.playlistData[entree].prix*qte}</td>
                                <td>
                                    <CartBtn cle = {entree}>+</CartBtn>
                                    <CartBtn cle = {entree}>-</CartBtn>
                                </td>
                            </tr>
                            )
                    })
                }
                </tbody>
            </table>
            <div className="total"><i className="fa-solid fa-basket-shopping"></i> Total :  {Math.round(totalPanier * 100) / 100}</div>
        </div>


    );
}

export default Panier; 