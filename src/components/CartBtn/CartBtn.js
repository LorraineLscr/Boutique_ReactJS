import "./CartBtn.css";
import BoutiqueContext from "../../BoutiqueContext";
import React, {useContext} from "react";

const CartBtn = (props) => {
    const data = useContext(BoutiqueContext);
      return (
        <button onClick={
            ()=>{
                data.qteManager(props.cle, props.children)
            }
        }>{props.children}</button>
      )
    }
  
  export default CartBtn;