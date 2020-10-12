import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarker from '../assets/mapmarker.svg';

import '../styles/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Joinville</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>
            <Map 
                center={[-26.3503247, -48.8498116]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
                >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
            <Link to="#" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;