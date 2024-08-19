import React from 'react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import PlansTable from './components/PlansTable';
import './App.css';
import './components/Sidebar/Sidebar.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <Map />
                <PlansTable />
            </div>
        </div>
    );
}

export default App;
