import React from "react";
import {FormControl, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {getTroopCost} from "model/army";
import {chCb} from "utils/inputUtils";
import {changeTroopCount} from "redux/armyTemplate";

interface ArmyListTroopsTableProps {

}

const ArmyListTroopsTable: React.FC<ArmyListTroopsTableProps> = () => {
  const { troops, troopsCounts } = useSelector((state: RootState) => state.armyTemplate);
  const dispatch = useDispatch();
  const change = (i: number) =>
    chCb(count => dispatch(changeTroopCount({i, count: count ? parseInt(count) : null})))

  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Troop Type</th>
          <th>Battle Cards</th>
          <th>Cost</th>
          <th>Count</th>
        </tr>
        </thead>
        <tbody>
          {troops.map((troop, i) =>
            <tr key={i}>
              <td>{troop.name}</td>
              <td>{troop.troopType.name}</td>
              <td>{troop.cards.map(card => card.name).join(', ')}</td>
              <td>{getTroopCost(troop)}</td>

              <td>
                <FormControl type="number" value={troopsCounts[i] ?? ''} onChange={change(i)}/>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <h5>Total cost: {troops.map((troop, i) => getTroopCost(troop) * (troopsCounts[i] ?? 0)).reduce((all, cur) => all + cur, 0)}</h5>
    </div>
  );
};

export default ArmyListTroopsTable;