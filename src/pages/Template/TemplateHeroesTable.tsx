import React from "react";
import {Button, FormControl, Table} from "react-bootstrap";
import {addHero, changeHeroField} from "redux/armyState";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/rootReducer";
import {getHeroCost, Hero} from "model/army";
import {chCb} from "utils/inputUtils";
import Select from "react-select";
import {heroAndTransferBattleCards} from "model/battleCards";

interface TemplateHeroesTableProps {

}

const TemplateHeroesTable: React.FC<TemplateHeroesTableProps> = () => {
  const { heroes } = useSelector((state: RootState) => state.armyState);
  const dispatch = useDispatch();
  const change = (i: number, field: keyof Hero) =>
    chCb(value => dispatch(changeHeroField({i, field, value})))

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Cards</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
        {heroes.map((hero, i) =>
          <tr key={i}>
            <td>
              <FormControl
                value={hero.name}
                onChange={change(i, 'name')}
              />
            </td>

            <td>
              <FormControl
                value={hero.description}
                onChange={change(i, 'description')}
              />
            </td>

            <td>
              <Select
                isMulti
                options={heroAndTransferBattleCards}
                getOptionLabel={card => card.name}
                getOptionValue={card => card.name}
                value={hero.cards}
                onChange={(value) => dispatch(changeHeroField({i, field: 'cards', value}))}
              />
            </td>

            <td>
              {getHeroCost(hero)}
            </td>
          </tr>
        )}
        </tbody>
      </Table>

      <Button onClick={() => dispatch(addHero())}>Add Row</Button>
    </div>
  );
};

export default TemplateHeroesTable;