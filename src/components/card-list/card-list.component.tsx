/** @format */

// import { Component } from "react";
import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//     render() {
//         console.log('render');
//         const {monsters} = this.props;

//         return <div className="card-list">
//             {monsters.map(monster => {
//                 return <Card
//                     key={monster.id}
//                     monster={monster}
//                 />
//             })}
//         </div>
//     }
// }

export default CardList;
