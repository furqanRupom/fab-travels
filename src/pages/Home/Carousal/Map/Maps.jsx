import React from "react";
import 'leaflet/dist/leaflet.css'
import './Maps.css'

import { ImageOverlay, Marker, Popup, MapContainer, TileLayer } from "react-leaflet";

const Maps = ({lat,long}) => {
  return (
    <>
      <MapContainer center={[lat,long]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.8566,2.3522]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Maps;
