import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {Button, FormControl, Table} from "react-bootstrap";
import {chCb} from "utils/inputUtils";
import {addTroop, changeTroopField} from "redux/armyTemplate";
import {ArmyTemplateTroop, getTroopCost} from "model/army";
import Select from "react-select";
import {
  closeOrderFootTypes,
  closeOrderMountedTypes,
  openOrderFootTypes,
  openOrderMountedTypes,
} from "model/troops";
import {standBattleCards} from "model/battleCards";

interface TemplateTroopsTableProps {

}

const troopTypesOptions = [{
  label: 'Open Order Foot',
  options: openOrderFootTypes,
}, {
  label: 'Close Order Foot',
  options: closeOrderFootTypes,
}, {
  label: 'Open Mounted Foot',
  options: openOrderMountedTypes,
}, {
  label: 'Close Mounted Foot',
  options: closeOrderMountedTypes,
}]

const TemplateTroopsTable: React.FC<TemplateTroopsTableProps> = () => {
  const { troops } = useSelector((state: RootState) => state.armyTemplate);
  const dispatch = useDispatch();
  const change = (i: number, field: keyof ArmyTemplateTroop) =>
    chCb(value => dispatch(changeTroopField({i, field, value})))

  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Troop Type</th>
          <th>Battle Cards</th>
          <th>Cost</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
        </thead>
        <tbody>
          {troops.map((troop, i) =>
            <tr key={i}>
              <td>
                <FormControl value={troop.name} onChange={change(i, 'name')}/>
              </td>
              <td>
                <FormControl value={troop.description} onChange={change(i, 'description')}/>
              </td>
              <td>
                <Select
                  options={troopTypesOptions}
                  getOptionLabel={troopType => troopType.name}
                  getOptionValue={troopType => troopType.name}
                  value={troop.troopType}
                  onChange={(value) => dispatch(changeTroopField({i, field: 'troopType', value}))}
                />
              </td>
              <td>
                <Select
                  isMulti
                  options={standBattleCards}
                  getOptionLabel={card => card.name}
                  getOptionValue={card => card.name}
                  value={troop.cards}
                  onChange={(value) => dispatch(changeTroopField({i, field: 'cards', value}))}
                />
              </td>
              <td>
                {getTroopCost(troop)}
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Button onClick={() => dispatch(addTroop())}>Add Row</Button>
    </div>
  );
};

export default TemplateTroopsTable;