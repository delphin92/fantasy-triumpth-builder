import React from "react";
import TemplateTroopsTable from "pages/Template/TemplateTroopsTable";
import TemplateHeroesTable from "pages/Template/TemplateHeroesTable";
import {Card, Col, Row} from "react-bootstrap";
import TemplateArmyCardsTable from "pages/Template/TemplateArmyCardsTable";

interface ArmyTemplateProps {

}

const ArmyTemplate: React.FC<ArmyTemplateProps> = () => (
  <div>
    <Card className="mb-2">
      <Card.Header>Troops</Card.Header>
      <Card.Body>
        <TemplateTroopsTable/>
      </Card.Body>
    </Card>
    <Row>
      <Col sm={12}>
        <Card>
          <Card.Header>Heroes</Card.Header>
          <Card.Body>
            <TemplateHeroesTable/>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12}>
        <Card>
          <Card.Header>Army Cards</Card.Header>
          <Card.Body>
            <TemplateArmyCardsTable/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default ArmyTemplate;