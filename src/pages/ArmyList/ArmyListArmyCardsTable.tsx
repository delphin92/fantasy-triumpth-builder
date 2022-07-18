import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {FormControl, Table} from "react-bootstrap";
import {chCb} from "utils/inputUtils";
import {changeArmyCardCount} from "redux/armyState";

interface ArmyListArmyCardsTableProps {

}

const ArmyListArmyCardsTable: React.FC<ArmyListArmyCardsTableProps> = () => {
  const { armyCards, armyCardsCounts } = useSelector((state: RootState) => state.armyState);
  const dispatch = useDispatch();
  const change = (i: number) =>
    chCb(count => dispatch(changeArmyCardCount({i, count: count ? parseInt(count) : null})))

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Cost</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {armyCards.filter(card => !!card.card).map((card, i) =>
            <tr key={i}>
              <td>{card.card?.name}</td>
              <td>{card.card?.cost as number}</td>

              <td>
                <FormControl type="number" value={armyCardsCounts[i] ?? ''} onChange={change(i)}/>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <h5>Total cost: {armyCards.map((card, i) => card.card?.cost as number * (armyCardsCounts[i] ?? 0)).reduce((all, cur) => all + cur, 0)}</h5>
    </div>
  );
};

export default ArmyListArmyCardsTable;