import MenuBtn from "../MenuBtn/MenuBtn";
import "./Menu.css"; 

function Menu (props){
    return (
        <nav>
            <h1>La Boutique de Lorraine</h1>
            <ul>
                <li>
                <MenuBtn title="">HOME </MenuBtn> {/* props.title = innerText props.children = innerHTML */}
                </li>
                <li>
                <MenuBtn title="">VINYLS <i className="fa-solid fa-compact-disc"></i></MenuBtn>
                </li>
            </ul>
            <ul>
                <li onClick={props.action}>
                    {/* déclaration d'évent sur un élément */}
                <MenuBtn title="" btnPanier={true}>PANIER <i className='fa-solid fa-cart-arrow-down'></i></MenuBtn>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;