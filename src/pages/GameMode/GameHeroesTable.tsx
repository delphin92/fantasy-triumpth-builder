import React from "react";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";

interface GameHeroesTableProps {

}

const GameHeroesTable: React.FC<GameHeroesTableProps> = () => {
  const { heroes, heroesTaken } = useSelector((state: RootState) => state.armyState);

  return (
    <Table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Dueling Value</th>
        <th>Additional Rules</th>
      </tr>
      </thead>
      <tbody>
        {heroes.filter((_, i) => heroesTaken[i]).map((hero, i) =>
          <tr key={i}>
            <td>{hero.name}</td>
            <td>{hero.duelingValue}</td>
            <td>
              <ul className="ps-3">
                {hero.cards.filter(card => !!card.rule).map(card =>
                  <li key={card.name}>{card.rule}</li>
                )}
              </ul>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default GameHeroesTable;