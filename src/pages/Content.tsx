import React from "react";
import { Container } from "react-bootstrap";
import ArmyTemplate from "pages/Template/ArmyTemplate";
import ArmyList from "pages/ArmyList/ArmyList";
import GameMode from "pages/GameMode/GameMode";
import {useRoutes} from "raviger";

interface ContentProps {

}

const routes = {
  '/:hash/template': () => <ArmyTemplate/>,
  '/:hash/list': () => <ArmyList/>,
  '/:hash/game': () => <GameMode/>,
}

const Content: React.FC<ContentProps> = () => (
  <Container>
    {useRoutes(routes)}
  </Container>
);

export default Content;