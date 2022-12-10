/** @format */

// import { Component } from "react";
import React from "react";
import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster: { name, email, id } }: CardProps) => {
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//     render() {
//         const { name, email, id } = this.props.monster;

//         return (<div className="card-container">
//             <img alt={`monster ${name}`}
//                 src={`https://robohash.org/${id}?set=set2`}
//             />
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//         )
//     }
// }

export default Card;
