import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {toggleHero} from "redux/armyState";
import {FormCheck, Table} from "react-bootstrap";
import {getHeroCost, getHeroesCost} from "model/army";

interface ArmyListHeroesTableProps {

}

const ArmyListHeroesTable: React.FC<ArmyListHeroesTableProps> = () => {
  const { heroes, heroesTaken } = useSelector((state: RootState) => state.armyState);
  const dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Battle Cards</th>
            <th>Dueling value</th>
            <th>Taken</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero, i) =>
            <tr key={i}>
              <td>{hero.name}</td>
              <td>{getHeroCost(hero)}</td>
              <td>{hero.cards.map(card => card.name).join(', ')}</td>
              <td>{hero.duelingValue}</td>
              <td>
                <FormCheck
                  type="switch"
                  checked={heroesTaken[i]}
                  onChange={() => dispatch(toggleHero(i))}
                />
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <h5>Heroes cost: {getHeroesCost(heroes, heroesTaken)}</h5>
    </div>
  );
};

export default ArmyListHeroesTable;