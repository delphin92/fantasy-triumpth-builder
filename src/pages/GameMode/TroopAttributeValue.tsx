import React, {useContext} from "react";
import {TroopContext} from "pages/GameMode/GameTroopsTable";
import {TroopType} from "model/troops";

interface TroopAttributeValueProps {
  attribute: keyof TroopType;
  value: number;
}

const TroopAttributeValue: React.FC<TroopAttributeValueProps> = ({attribute, value}) => {
  const troop = useContext(TroopContext);

  return (
    <>{value}{troop.troopType[attribute] !== value ? '*' : null}</>
  );
};

export default TroopAttributeValue;