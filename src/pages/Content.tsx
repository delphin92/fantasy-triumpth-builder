import React from "react";
import { Container } from "react-bootstrap";
import ArmyTemplate from "pages/Template/ArmyTemplate";
import ArmyList from "pages/ArmyList/ArmyList";
import GameMode from "pages/GameMode/GameMode";
import {Redirect, useRoutes} from "raviger";

interface ContentProps {

}

const routes: Record<string, (params: Record<string, string>) => React.ReactElement> = {
  '/': () => <Redirect to="/template"/>,
  '/:tab': ({tab}) => <Redirect to={`/_/${tab}`}/>,
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