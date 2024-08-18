import React from 'react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import PlansTable from './components/PlansTable';
import ProfileSection from './components/ProfileSection';
import { FaPlus } from 'react-icons/fa';
import './App.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                <Map />
                <PlansTable />
            </div>
            <ProfileSection />
            <FaPlus className="floating-button" />
        </div>
    );
}

export default App;
