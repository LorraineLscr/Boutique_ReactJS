import React, {useState} from 'react';
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Panier from "./components/Panier/Panier";
import './App.css';
import { playlist } from "./playlist";
import BoutiqueContext from './BoutiqueContext';



function App(props) {
  // déclaration de mes state
  const [displayPanier, setDisplayPanier] = useState(false);
  // j'ajoute à mes state la playlist importée
  const [playlistData, setPlaylistData] = useState(playlist);
  // j'ajoute dans un tableau achat les produits achetés à partir de leur index
  const [achat, setAchat] = useState([]); 

  const addArticle = (datakey) => {
    console.log("click")
    setAchat([...achat, datakey]); 
  }

/* const [stateAddArticle, setStateAddArticle] = 
useState((e)=>{addArticle(e)}) */

const [stateAddArticle, setStateAddArticle] = useState()

  function handleClick() {
    setDisplayPanier(!displayPanier);
  }
  return (
    <BoutiqueContext.Provider value={{
      playlistData : playlistData,
      achat : achat,
      stateAddArticle:stateAddArticle
      }
      }>
      <div className="App">
        <header>
          <Menu action={() => { handleClick() }}></Menu>
        </header>
        <main>
          {/* 
        if(displayPanier === true){
          <Panier/>
        } else {
          **
          est équivalent avec une ternaire
        }*/}
          {displayPanier ? <Panier /> : ""}
          <Products listeDeLecture={playlist}></Products>
        </main>
      </div>
    </BoutiqueContext.Provider>
  );
}

export default App;
