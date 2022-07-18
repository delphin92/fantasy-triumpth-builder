import React from "react";
import {Button, FormControl, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {ArmyCard} from "model/army";
import {chCb} from "utils/inputUtils";
import {addArmyCard, changeArmyCardField} from "redux/armyState";
import {armyBattleCards} from "model/battleCards";
import Select from "react-select";

interface TemplateArmyCardsTableProps {

}

const TemplateArmyCardsTable: React.FC<TemplateArmyCardsTableProps> = () => {
  const { armyCards } = useSelector((state: RootState) => state.armyState);
  const dispatch = useDispatch();
  const change = (i: number, field: keyof ArmyCard) =>
    chCb(value => dispatch(changeArmyCardField({i, field, value})))

  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>Card</th>
          <th>Description</th>
          <th>Cost</th>
        </tr>
        </thead>
        <tbody>
          {armyCards.map((card, i) =>
            <tr key={i}>
              <td>
                <Select
                  options={armyBattleCards}
                  getOptionLabel={card => card.name}
                  getOptionValue={card => card.name}
                  value={card.card}
                  onChange={(value) => dispatch(changeArmyCardField({i, field: 'card', value}))}
                />
              </td>
              <td>
                <FormControl
                  value={card.description}
                  onChange={change(i, 'description')}
                />
              </td>
              <td>
                {card.card?.cost as number}
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Button onClick={() => dispatch(addArmyCard())}>Add Row</Button>
    </div>
  );
};

export default TemplateArmyCardsTable;