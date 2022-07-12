import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {toggleHero} from "redux/armyTemplate";
import {FormCheck, Table} from "react-bootstrap";
import {getHeroCost} from "model/army";

interface ArmyListHeroesTableProps {

}

const ArmyListHeroesTable: React.FC<ArmyListHeroesTableProps> = () => {
  const { heroes, heroesTaken } = useSelector((state: RootState) => state.armyTemplate);
  const dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Cost</td>
            <td>Battle Cards</td>
            <td>Taken</td>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero, i) =>
            <tr key={i}>
              <td>{hero.name}</td>
              <td>{getHeroCost(hero)}</td>
              <td>{hero.cards.map(card => card.name).join(', ')}</td>
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

      <h5>Total cost: {heroes.filter((_, i) => heroesTaken[i]).map(hero => getHeroCost(hero)).reduce((all, cur) => all + cur, 0)}</h5>
    </div>
  );
};

export default ArmyListHeroesTable;