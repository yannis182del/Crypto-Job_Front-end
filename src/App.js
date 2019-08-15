
import React from "react";
import JotformEmbed from 'react-jotform-embed';


import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
import {Router, AppRouter} from "./Router"
import { ReactComponent as Logo } from "./assets/Images/logo.svg";
import "./index.css";


function Contact() {
  return (
    <div className="candidat-container">
      <p className="candidat-p">OnchainJobs est gratuit pour les chercheurs d'emploi, déposes ton CV et nous te mettrons en relation avec des entreprises Blockchain si ton CV les intéresse !
Afin d'etre préparé pour ta recherche, inscris-toi à notre newsletter et mets toutes les chances de ton coté en bénéficiant de conseils exclusifs !</p>
      <div className="candidat-form">
      <JotformEmbed src="https://form.jotformeu.com/92245174500349" />
      </div>
    </div>
  )
}

function Candidat() {
  return (
    <div className="candidat-container">
      <p className="candidat-p">OnchainJobs est gratuit pour les chercheurs d'emploi, déposes ton CV et nous te mettrons en relation avec des entreprises Blockchain si ton CV les intéresse !
Afin d'etre préparé pour ta recherche, inscris-toi à notre newsletter et mets toutes les chances de ton coté en bénéficiant de conseils exclusifs !</p>
      <div className="candidat-form">
        <JotformEmbed src="https://form.jotformeu.com/92245174500349" />
      </div>
    </div>
  )
}

function Recruteur() {
  return (
    <div className="candidat-container">
      <p className="candidat-p">OnChainJobs est gratuit durant notre lancement, profitez-en !
      Vous cherchez des talents spécialisés Blockchain ?
      Laissez-nous vos coordonnées et nous reviendrons vers vous !
    Pour vous aider dans vos démarches, OnChainJobs s'appuie sur son réseau de partenaires, sa visibilité mais surtout sur son expertise métier au niveau de la technologie et du recrutement.</p>
      <div className="candidat-form">
      <JotformEmbed src="https://form.jotformeu.com/92264894937373" />
      </div>
    </div>
  )
}


const App = () => (
  <>
    <AppRouter />
    <Logo
      className="App-logo"
      aria-label="logo"
      onClick={() => {
        window.location = "/";
      }}
    />
    <Router 
    jobCard={JobCard} 
    Articles={Articles} 
    Candidat={Candidat}
     Recruteur={Recruteur} 
     Contact={Contact} />
  </>
)

export default App
