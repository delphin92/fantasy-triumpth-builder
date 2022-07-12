import React from "react";
import ArmyListTroopsTable from "pages/ArmyList/ArmyListTroopsTable";
import {Card} from "react-bootstrap";
import ArmyListHeroesTable from "pages/ArmyList/ArmyListHeroesTable";

interface ArmyListProps {

}

const ArmyList: React.FC<ArmyListProps> = () => (
  <div>
    <Card className="mb-2">
      <Card.Header>Troops</Card.Header>
      <Card.Body>
        <ArmyListTroopsTable/>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Heroes</Card.Header>
      <Card.Body>
        <ArmyListHeroesTable/>
      </Card.Body>
    </Card>
  </div>
);

export default ArmyList;