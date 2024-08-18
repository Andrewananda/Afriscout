import React from 'react';
import { AiOutlineSearch, AiOutlineFilter } from 'react-icons/ai';
import './PlansTable.css';

const PlansTable = () => {
    return (
        <div className="plans-table">
            <div className="plans-header">
                <h3>Besherda_Argude</h3>
                <div className="plans-controls">
                    <button className="create-button">Create new plan</button>
                    <div className="search-filter">
                        <AiOutlineSearch size={20} className="icon-button" />
                        <input type="text" placeholder="Search" />
                        <AiOutlineFilter size={20} className="icon-button" />
                    </div>
                </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Season</th>
                    <th>RGU Status</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Livestock</th>
                    <th>Paddock Sequence</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Wet season</td>
                    <td className="status-active">Active</td>
                    <td>Jun 12th, 2024</td>
                    <td>Aug 12th, 2024</td>
                    <td>Cattle - 125, Shoat - 64, Camels - 20</td>
                    <td>Paddock 1: Aug 5th, 2024 - Aug 12th, 2024</td>
                </tr>
                <tr>
                    <td>Dry season</td>
                    <td className="status-completed">Completed</td>
                    <td>Jun 12th, 2024</td>
                    <td>Aug 12th, 2024</td>
                    <td>Cattle - 125, Shoat - 64, Camels - 20</td>
                    <td>Paddock 2: Aug 13th, 2024 - Sep 2nd, 2024</td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default PlansTable;
