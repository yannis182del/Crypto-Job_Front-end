
import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import JotformEmbed from 'react-jotform-embed';



import JobCard from "./components/Cards/JobCard";
import Articles from "./components/Articles/Articles";
import { ReactComponent as Logo } from "./assets/Images/logo.svg";
import "./index.css";


function Contact() {
  return (
    <div className="candidat-container">
      <p className="candidat-p">OnchainJobs est gratuit pour les chercheurs d'emploi, déposes ton CV et nous te mettrons en relation avec des entreprises Blockchain si ton CV les intéresse !
Afin d'etre préparé pour ta recherche, inscris-toi à notre newsletter et mets toutes les chances de ton coté en bénéficiant de conseils exclusifs !</p>
      <div className="candidat-form">
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
    <div>
      <p className="recruteur-p">OnChainJobs est gratuit durant notre lancement, profitez-en !
      Vous cherchez des talents spécialisés Blockchain ?
      Laissez-nous vos coordonnées et nous reviendrons vers vous !
    Pour vous aider dans vos démarches, OnChainJobs s'appuie sur son réseau de partenaires, sa visibilité mais surtout sur son expertise métier au niveau de la technologie et du recrutement.</p>
      <div className="candidat-form">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScELoRwcw4m7bW_iPB8QN3qHd2w8ouEMEMgCbBN459gUDgwAA/viewform?embedded=true" width="640" height="814" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

      </div>
    </div>
  )
}


function AppRouter() {
  return (
    <div>
      <nav className="nav">
        <ul className="ul-el">
          <li>
            <Link className="router-link home" to="/">Home</Link>
          </li>
          <li >
            <Link className="router-link left" to="/candidat">Candidat</Link>
          </li>
          <li>
            <Link className="router-link left" to="/recruteur">Recruteur<span>?</span></Link>
          </li>
        </ul>
      </nav>
    </div>

  );
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

    <Switch>
      <Route exact path="/" component={JobCard} />
      <Route path="/job/:id" component={Articles} />
      <Route path="/candidat" component={Candidat} />
      <Route path="/recruteur" component={Recruteur} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Contact} />
      <Route path="/a-propos" component={Contact} />
    </Switch>
  </>
)

export default App
