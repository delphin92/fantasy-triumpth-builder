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
        </tr>
      </thead>
      <tbody>
        {troops.filter((_, i) => !!troopsCounts[i]).map((troop, i) =>
          <tr key={i}>
            <td>{troop.name}</td>
            <td>{troop.troopType.name}</td>
            <td>{troop.troopType.move}</td>
            <td>{troop.troopType.vsFoot}</td>
            <td>{troop.troopType.vsMounted}</td>
            <td>{troop.troopType.shoot}</td>
            <td>{troop.troopType.target}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default GameTroopsTable;