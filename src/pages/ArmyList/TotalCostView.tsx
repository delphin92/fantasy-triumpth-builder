import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {getArmyCardsCost, getHeroesCost, getTroopsCost} from "model/army";

interface TotalCostViewProps {

}

const TotalCostView: React.FC<TotalCostViewProps> = () => {
  const { troops, troopsCounts, heroes, heroesTaken, armyCards, armyCardsCounts } =
    useSelector((state: RootState) => state.armyState);

  return (
    <h4>Total list cost: {
      getTroopsCost(troops, troopsCounts) +
      getHeroesCost(heroes, heroesTaken) +
      getArmyCardsCost(armyCards, armyCardsCounts)
    } out of 51
    </h4>
  );
};

export default TotalCostView;