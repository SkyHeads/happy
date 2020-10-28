import React, { FormEvent, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from 'react-icons/fi';

import './create-orphanage.css';
import Siderbar from '../../components/Siderbar';
import mapIcon from '../../utils/mapIcon';

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [opening_on_weekends, setOpeningWeekends] = useState(true);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { latitude, longitude } = position;

    console.log({
      position,
      name,
      about,
      latitude,
      longitude,
      instructions,
      opening_hours,
      opening_on_weekends,
    });
  }

  return (
    <div id="page-create-orphanage">
      <Siderbar />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.6742228, -46.5436003]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image" />

              <button type="button" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Hórario de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={e => setOpeningHours(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={opening_on_weekends ? 'active' : ''}
                  onClick={() => setOpeningWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!opening_on_weekends ? 'active' : ''}
                  onClick={() => setOpeningWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateOrphanage;

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
