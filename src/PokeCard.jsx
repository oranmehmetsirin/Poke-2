import React, { Component } from "react";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="PokeCard">
        <h2 className="PokeCard-title">Pokemon</h2>
        <div className="PokeCard-image">
          <img src={imgSrc} />
        </div>
        <div className="PokeCard-data"> Type: {this.props.type} </div>
        <div className="PokeCard-data"> Experience: {this.props.exp} </div>
      </div>
    );
  }
}
export default PokeCard;
