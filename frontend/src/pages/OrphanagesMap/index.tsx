import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import { Container, OrphanageAside } from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconAnchor: [29, 68],
  iconSize: [58, 68],
  popupAnchor: [170, 2]
});

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <OrphanageAside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>
        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </OrphanageAside>

      <Map
        center={[-23.630786,-46.5140821]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        <Marker
          position={[-23.630786,-46.5140821]}
          icon={mapIcon}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das meninas
            <Link to="">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
}

export default OrphanagesMap;