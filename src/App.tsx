import React, {useEffect} from 'react';
import './App.css';
import Header from "components/Header";
import Content from "pages/Content";
import {usePathParams} from "raviger";
import {loadHash} from "model/saveLoad";

function App() {
  const hash = usePathParams('/:hash/:tab')?.hash;

  useEffect(() => {
    hash && loadHash(hash);
  }, [hash]);

  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
