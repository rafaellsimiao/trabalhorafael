import React from 'react';
import './Cartão.css';
import netflix from '../componentes/netflix.png';
import store from '../componentes/store.png';
import google from '../componentes/google.png';


function Cartão(){
    return(
        <div className="cartão"> 
        <img src={netflix} alt="netflix" className="logo"/>
        <header>
        <h1 className='titulo'>NETFLIX</h1>
        <p className='legenda'>A MELHOR STREAMING DO BRASIL</p>
        <p></p>
        <p className='rs'>🎥 Filmes e Séries</p>
        <p className='rs'>🤩 Alta Qualidade</p>
        <p className='rs'>🍿 Lançamentos</p>
        <p className='legenda'>ASSINE A NETFLIX E APROVEITE 🤟</p>
        </header>
        <img src={store} alt="google" className="store"/>
        <img src={google} alt="store" className="google"/>
        </div>

    );
};
export default Cartão;