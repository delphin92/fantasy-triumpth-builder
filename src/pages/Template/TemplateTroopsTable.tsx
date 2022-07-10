import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {Button, FormControl, Table} from "react-bootstrap";
import {chCb} from "utils/inputUtils";
import {addTroop, changeField} from "redux/armyTemplate";
import {ArmyTemplateTroop} from "model/army";
import Select from "react-select";
import {
  closeOrderFootTypes,
  closeOrderMountedTypes,
  openOrderFootTypes,
  openOrderMountedTypes,
} from "model/troops";

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
    chCb(value => dispatch(changeField({i, field, value})))

  return (
    <div>
      <Button onClick={() => dispatch(addTroop())}>Add Row</Button>
      <Table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Troop Type</th>
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
                value={troop.troopType}
                onChange={(value) => dispatch(changeField({i, field: 'troopType', value}))}
              />
            </td>
            <td>
              {troop.troopType.cost}
            </td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
  );
};

export default TemplateTroopsTable;