import React from "react";
import TemplateTroopsTable from "pages/Template/TemplateTroopsTable";
import TemplateHeroesTable from "pages/Template/TemplateHeroesTable";
import {Card} from "react-bootstrap";

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
    <Card>
      <Card.Header>Heroes</Card.Header>
      <Card.Body>
        <TemplateHeroesTable/>
      </Card.Body>
    </Card>
  </div>
);

export default ArmyTemplate;