/*
import React from 'react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import PlansTable from './components/PlansTable';
import './App.css';
import './components/Sidebar/Sidebar.css';
import OuterMenu from './components/outerMenuComponent';

function App() {
    return (
        <div className="app">
            <OuterMenu />
            <Sidebar />
            <div className="content">
                <Map />
                <PlansTable />
            </div>
        </div>
    );
}

export default App;
*/

import React from 'react';
import OuterMenu from './components/outerMenuComponent';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import PlansTable from './components/PlansTable';
import Map from './components/Map';

const MainContainer = styled.div`
  display: flex;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  height: 100vh;
`;

const App = () => {
  return (
    <MainContainer>
       <OuterMenu />
            <Sidebar />
            <div className="content">
                <Map />
                <PlansTable />
            </div>
    </MainContainer>
  );
};

export default App;