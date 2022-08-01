import React, {createContext} from "react";
import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {ArmyTemplateTroop, getTroopCloseCombat, getTroopMove} from "model/army";
import TroopAttributeValue from "pages/GameMode/TroopAttributeValue";
import InfoList from "components/InfoList";

interface GameTroopsTableProps {

}

export const TroopContext = createContext<ArmyTemplateTroop>(undefined as unknown as ArmyTemplateTroop);

const GameTroopsTableRow: React.FC<{troop: ArmyTemplateTroop}> = ({troop}) => {
  const move = getTroopMove(troop);
  const [vsFoot, vsMounted] = getTroopCloseCombat(troop)


  return(
    <TroopContext.Provider value={troop}>
      <tr>
        <td>{troop.name}</td>
        <td>{troop.troopType.name}</td>
        <td><TroopAttributeValue value={move} attribute="move"/>&nbsp;MU</td>
        <td>+<TroopAttributeValue value={vsFoot} attribute="vsFoot"/></td>
        <td>+<TroopAttributeValue value={vsMounted} attribute="vsMounted"/></td>
        <td>
          {troop.troopType.shoot ?
            <>+{troop.troopType.shoot} ({troop.troopType.shootDistance}&nbsp;MU)</>
            : ''
          }
        </td>
        <td>+{troop.troopType.target}</td>
        <td><InfoList data={troop.troopType.shatter}/></td>
        <td>
          {troop.cards.some(card => card.name === 'Brittle')
            ? 'Any'
            : (
              <ul className="ps-3">
                {troop.troopType.shattered?.map(str =>
                  <li key={str}>{str}</li>
                )}
              </ul>
            )
          }
        </td>
        <td><InfoList data={troop.troopType.evade}/></td>
        <td><InfoList data={troop.troopType.panic}/></td>
        <td>
          <ul className="ps-3">
            {troop.cards.filter(card => !!card.rule).map(card =>
              <li key={card.name}>{card.rule}</li>
            )}
          </ul>
        </td>
      </tr>
    </TroopContext.Provider>
  );
}

const GameTroopsTable: React.FC<GameTroopsTableProps> = () => {
  const { troops, troopsCounts } = useSelector((state: RootState) => state.armyState);

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
          <GameTroopsTableRow key={i} troop={troop}/>
        )}
      </tbody>
    </Table>
  );
};

export default GameTroopsTable;