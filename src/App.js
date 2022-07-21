import React from 'react';
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Panier from "./components/Panier/Panier";
import './App.css';
import { playlist } from "./playlist";

import BoutiqueContext from './BoutiqueContext';
import MediaPlayer from './components/MediaPlayer/MediaPlayer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPanier: false,
      playlistData: playlist,
      achat: [],
      addArticle: this.addArticle.bind(this),
      qteManager: this.qteManager.bind(this)
    }
  }

  stockManager(datakey,action){
    let playlistDataTmp = this.state.playlistData; 
    if(action === "+"){
      playlistDataTmp[datakey].qte--; 
    }else{
      playlistDataTmp[datakey].qte++; 
    }
    this.setState({playlistData:playlistDataTmp}); 
  }

  // délcarations des méthodes de App
  qteManager(datakey, action) {
    console.dir(typeof(action))
    let achatTmp = this.state.achat;
    // j'ajoute un disc à mon tableau achat
    if (action == "+" && this.state.playlistData[datakey].qte>0) {
      this.stockManager(datakey,action); 
        achatTmp.push(datakey)
        console.log("first")
      }
    // je retire un disc à mon tableau achat
    if (action === "-") {
      this.stockManager(datakey,action); 
      let stop = true; 
      // array.includes(resultats) à vérifier
      achatTmp.map((value, key) => {
        if (datakey == value && stop) {
          achatTmp.splice(key, 1);
          stop = false;
        }
      });
    }

    this.setState({ achat: achatTmp },()=>{
    });
  }

  addArticle(datakey) {
    this.stockManager(datakey, "+"); 
    /* console.log("click")
    console.log(datakey) */
    let achatTmp = this.state.achat;
    achatTmp.push(datakey);
    /*  console.dir(achatTmp); */
    this.setState({ achat: achatTmp });
    console.dir(this.state.achat);
  }

  handleClick() {
    this.setState({ displayPanier: !this.state.displayPanier });
  }
  render() {
    return (
      <BoutiqueContext.Provider value={this.state}>
        <div className="App">
          <header>
            <Menu action={() => { this.handleClick() }}></Menu>
          </header>
          <main>
            {/* 
        if(displayPanier === true){
          <Panier/>
        } else {
          **
          est équivalent avec une ternaire
        }*/}
            {this.state.displayPanier ? <Panier /> : ""}
            <Products listeDeLecture={this.state.playlistData}></Products>
          </main>
        </div>
        <MediaPlayer></MediaPlayer>
      </BoutiqueContext.Provider>
    );
  }

}

export default App;
