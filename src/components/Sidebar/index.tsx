import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarker from '../../assets/mapmarker.svg';
import './index.css';

const Sidebar = () => {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
        <img src={mapMarker} alt="Happy" />
        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
  );
}

export default Sidebar;