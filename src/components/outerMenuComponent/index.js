import {React, useState} from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { FaHome, FaSearch, FaMapMarkedAlt, FaList, FaPlus, FaCalendar, FaFileContract, FaWifi, FaFile, FaFileAlt } from 'react-icons/fa';

const OuterMenuContainer = styled.div`
  width: 60px;
  height: 100vh;
  background-color: #FAF9F0;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const MenuIcon = styled.div`
  margin: 20px 0;
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => (props.selected ? '#ffffff' : '#00994B')};
  background-color: ${(props) => (props.selected ? '#8CC63F' : 'transparent')};
  &:hover {
    color: #00994B;
  }
`;

const OuterMenu = () => {

  const [selectedIcon, setSelectedIcon] = useState(null);
  
  return (
    <OuterMenuContainer>

    <MenuIcon>
     <img src={logo} alt="Logo"  style={{ width: '60px', height: '60px' }} />
    </MenuIcon>  

    <MenuIcon
      selected={selectedIcon === 'home'}
      onClick={() => setSelectedIcon('home')}
    >
      <FaCalendar />
    </MenuIcon>
    <MenuIcon
      selected={selectedIcon === 'search'}
      onClick={() => setSelectedIcon('search')}
    >
      <FaSearch />
    </MenuIcon>
    <MenuIcon
      selected={selectedIcon === 'map'}
      onClick={() => setSelectedIcon('map')}
    >
      <FaFileContract />
    </MenuIcon>
    <MenuIcon
      selected={selectedIcon === 'list'}
      onClick={() => setSelectedIcon('list')}
    >
      <FaFileAlt />
    </MenuIcon>
    <MenuIcon
      selected={selectedIcon === 'plus'}
      onClick={() => setSelectedIcon('plus')}
    >
      <FaWifi />
    </MenuIcon>
  </OuterMenuContainer>
  );
};

export default OuterMenu;
