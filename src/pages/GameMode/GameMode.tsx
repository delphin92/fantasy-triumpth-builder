import React from "react";
import GameTroopsTable from "pages/GameMode/GameTroopsTable";
import {Card, Col, Row} from "react-bootstrap";
import GameHeroesTable from "pages/GameMode/GameHeroesTable";
import GameArmyCardsTable from "pages/GameMode/GameArmyCardsTable";

interface GameModeProps {

}

const GameMode: React.FC<GameModeProps> = () => (
  <>
    <Card className="mb-2">
      <Card.Header>Troops</Card.Header>
      <Card.Body>
        <GameTroopsTable/>
      </Card.Body>
    </Card>
    <Row>
      <Col sm={6}>
        <Card>
          <Card.Header>Heroes</Card.Header>
          <Card.Body>
            <GameHeroesTable/>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6}>
        <Card>
          <Card.Header>Army Cards</Card.Header>
          <Card.Body>
            <GameArmyCardsTable/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </>
);

export default GameMode;