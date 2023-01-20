// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/*
npm i @watergis/mapbox-gl-legend --save
npm i mapbox-gl-style-switcher --save
npm install --save maplibre-gl-measures

npm i --save maplibre-gl-basemaps
npm i --save mapbox.minimap
*/


import * as React from 'react';
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function Root() {
  return (
    <Map
      initialViewState={{
        latitude: 37.96940,
        longitude: -6.94880,
        bearing: 0,
        // pitch: 60,
        // zoom: 13
        pitch: 0,
        zoom: 4
      }}
      mapLib={maplibregl}
      style={{ width: '100vw', height: '100vh' }}
      // mapStyle="https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_gray_scale_fondo_negro/style.json"
      mapStyle="https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-basic/style.json"
      // mapStyle="https://klokantech.github.io/roman-empire/style.json"
    >

      <GeolocateControl position="top-right" />
      <FullscreenControl position="top-right" />
      <NavigationControl position="top-right" />
      <ScaleControl />
      <Marker longitude={-6.94880} latitude={37.96940} color="blue" />
    </Map>
  );
}

export default Root;