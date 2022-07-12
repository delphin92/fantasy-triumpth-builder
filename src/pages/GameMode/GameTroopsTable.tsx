import React from "react";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";

interface GameTroopsTableProps {

}

const GameTroopsTable: React.FC<GameTroopsTableProps> = () => {
  const { troops, troopsCounts } = useSelector((state: RootState) => state.armyTemplate);

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Troop Type</th>
          <th>Move</th>
          <th>Vs Foot</th>
          <th>Vs Mounted</th>
          <th>Shoot</th>
          <th>Target</th>
          <th>Shatter</th>
          <th>Shattered</th>
          <th>Evade</th>
          <th>Panic</th>
          <th>Additional Rules</th>
        </tr>
      </thead>
      <tbody>
        {troops.filter((_, i) => !!troopsCounts[i]).map((troop, i) =>
          <tr key={i}>
            <td>{troop.name}</td>
            <td>{troop.troopType.name}</td>
            <td>{troop.troopType.move}&nbsp;MU</td>
            <td>+{troop.troopType.vsFoot}</td>
            <td>+{troop.troopType.vsMounted}</td>
            <td>
              {troop.troopType.shoot ?
                <>+{troop.troopType.shoot} ({troop.troopType.shootDistance}&nbsp;MU)</>
                : ''
              }
            </td>
            <td>+{troop.troopType.target}</td>
            <td>{troop.troopType.shatter}</td>
            <td>
              {troop.cards.some(card => card.name === 'Brittle')
                ? 'Any'
                : troop.troopType.shattered instanceof Array
                  ? (
                    <ul className="ps-3">
                      {troop.troopType.shattered.map(str =>
                        <li key={str}>{str}</li>
                      )}
                    </ul>
                  )
                  : troop.troopType.shattered
              }
            </td>
            <td>{troop.troopType.evade}</td>
            <td>{troop.troopType.panic}</td>
            <td>
              <ul className="ps-3">
                {troop.cards.filter(card => !!card.rule).map(card =>
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

export default GameTroopsTable;