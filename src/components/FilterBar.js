import React from 'react';
import '../App.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <input type="text" placeholder="Search" className="search-input" />
            <div className="regions">
                <h3>Southern Ethiopia</h3>
                <ul>
                    <li>South Omo</li>
                    <li className="active">Hammer</li>
                    <li>Dassenach</li>
                    <li>Gnagantom</li>
                    <li>Borena</li>
                    <li>Eastern Borena</li>
                    <li>Somali</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;