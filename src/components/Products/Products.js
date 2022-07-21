import Card from "../Card/Card";
import "./Products.css";

function Products(props) {
    return (
        <div>
            <h2>Nos meilleures ventes :</h2>
            <div className="cardContainer">
                {
                    props.listeDeLecture.map(function (value, key) {
                        return (<Card
                            key={key}
                            datakey={key}
                            cover={value.cover}
                            title={value.title}
                            artist={value.artist}
                            genre={value.genre}
                            annee={value.annee}
                            prix={value.prix}
                            qte={value.qte}
                        > {value.description} </Card>
                        )
                    })
                }


            </div>
        </div>
    )
}
export default Products; 