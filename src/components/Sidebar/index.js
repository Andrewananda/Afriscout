import React, { useState } from 'react';
import './Sidebar.css';
import { FaMapMarkerAlt, FaPlus, FaBars } from 'react-icons/fa';

const Sidebar = () => {
    const [openDropdowns, setOpenDropdowns] = useState({});

    const menuItems = [
        { title: 'Home', link: '/' },
        { 
            title: 'Southern Ethopia', 
            dropdown: [
                { title: 'Dassenach', link: '/web-development' },
                { title: 'Gnangatom', link: '/mobile-development' }
            ] 
        },
        { 
            title: 'Borena', 
            dropdown: [
                { title: 'Dassenach', link: '/web-development' },
                { title: 'Gnangatom', link: '/mobile-development' }
            ] 
        },
        { 
            title: 'Eastern Borena', 
            dropdown: [
                { title: 'Dassenach', link: '/web-development' },
                { title: 'Gnangatom', link: '/mobile-development' }
            ] 
        },
    ];

    const toggleDropdown = (index) => {
        setOpenDropdowns(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="sidebar">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        {item.dropdown ? (
                            <>
                                <div onClick={() => toggleDropdown(index)} className="sidebar-item">
                                    {item.title}
                                </div>
                                {openDropdowns[index] && (
                                    <ul className="dropdown-menu">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a href={subItem.link} className="sidebar-subitem">{subItem.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <a href={item.link} className="sidebar-item">{item.title}</a>
                        )}
                    </li>
                ))}
            </ul>
            
            <div className="sidebar-footer">
                <FaPlus onClick={() => console.log("Test")} className="fab" style={{ backgroundColor: '#8CC63F' }} />
            </div>
        </div>
    );
};

export default Sidebar;