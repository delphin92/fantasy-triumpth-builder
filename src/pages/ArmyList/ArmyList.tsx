import React from "react";
import ArmyListTroopsTable from "pages/ArmyList/ArmyListTroopsTable";
import {Card, Col, Row} from "react-bootstrap";
import ArmyListHeroesTable from "pages/ArmyList/ArmyListHeroesTable";
import ArmyListArmyCardsTable from "pages/ArmyList/ArmyListArmyCardsTable";

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
    <Row>
      <Col sm={6}>
        <Card>
          <Card.Header>Heroes</Card.Header>
          <Card.Body>
            <ArmyListHeroesTable/>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6}>
        <Card>
          <Card.Header>Army Cards</Card.Header>
          <Card.Body>
            <ArmyListArmyCardsTable/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default ArmyList;