import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";

interface GameArmyCardsTableProps {

}

const GameArmyCardsTable: React.FC<GameArmyCardsTableProps> = () => {
  const { armyCards, armyCardsCounts } = useSelector((state: RootState) => state.armyState);

  return (
    <ul className="ps-3">
      {armyCards.filter((card, i) => !!armyCardsCounts[i] && !!card.card?.rule).map(card =>
        <li key={card.card?.name}>{card.card?.rule}</li>
      )}
    </ul>
  );
};

export default GameArmyCardsTable;