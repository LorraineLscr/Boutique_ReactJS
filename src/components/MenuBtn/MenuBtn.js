import React, { useContext } from "react";
import BoutiqueContext from "../../BoutiqueContext";
import "./MenuBtn.css";

/* exemple de component avec fonction fléchée SANS RETURN

const MenuBtn = (props) => {
<div></div>
}  */

function MenuBtn(props) {
   const data = useContext(BoutiqueContext);
   let displayBtn = false; 
   if (props.btnPanier && data.achat.length) {
      displayBtn = true;
   }
   return (<div>{props.children}
      {
         /* displayBtn ? <span className="badge">{data.achat.length}</span> : "" */
         displayBtn &&= <span className="badge">{data.achat.length}</span>
      }
   </div>);
}

export default MenuBtn;


