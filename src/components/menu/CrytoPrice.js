import React, { Component } from "react";
import "./CryptoPrice.css";

export default class CrytoPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btc: [],
      eth: []
    };
  }
  componentDidMount() {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&api_key=dfde7343cfd2ae82003c6d3acda4b20a0f24c46352776440402961da601ba468"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          btc: result.BTC.USD,
          eth: result.ETH.USD
        });
      });
  }

  render() {
    return (
      <div className="price-container">
        <p className="btc-price">BTC: $ {this.state.btc}</p>
        <p className="btc-price">ETH: $ {this.state.eth}</p>
      </div>
    );
  }
}
