import React from 'react';
import { FaMapMarkerAlt, FaPlus, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <FaBars size={20} />
                <h2>Regions</h2>
            </div>
            <ul>
                <li>
                    <FaMapMarkerAlt /> Southern Ethiopia
                    <ul>
                        <li>South Omo</li>
                        <li className="selected">Hammer</li>
                        <li>Dassenach</li>
                        <li>Gnanngatom</li>
                    </ul>
                </li>
                <li>Borena</li>
                <li>Eastern Borena</li>
                <li>Somali</li>
            </ul>
            <div className="sidebar-footer">
                <FaPlus className="add-button" />
            </div>
        </div>
    );
};

export default Sidebar;
