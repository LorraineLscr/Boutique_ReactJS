import BuyBtn from "../BuyBtn/BuyBtn";
import "./Card.css"; 

function Card(props){
return <div className="card">
    <div className="cardPrix">{props.prix}</div>
    <img src={props.cover} className="cardImg" alt={props.title} />
    <h3 className="cardTitle">{props.title}</h3>
    <div className="cardInfos">{props.artist} - {props.genre} - {props.annee}</div>
    <p className="cardDescription">{props.children}</p>
    <div className="cardBtn">
        <BuyBtn datakey={props.datakey}/>
    </div>
</div>
}

export default Card; 