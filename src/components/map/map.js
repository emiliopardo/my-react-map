import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { MapboxStyleDefinition, MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import "mapbox-gl-style-switcher/styles.css";


export default function Map() {
    const styles: MapboxStyleDefinition[] = [
        {
            title: "Andalucía OSM OSM Liberty",
            uri: `https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-liberty/style.json`
        },
        {
            title: "Andalucía OSM Positron",
            uri: `https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-positron/style.json`
        },
        {
            title: "Roman Empire",
            uri: `https://klokantech.github.io/roman-empire/style.json`
        }
    ];

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-6.94880);
    const [lat] = useState(37.96940);
    const [zoom] = useState(14);
    const [bearing] = useState(0);
    const [pitch] = useState(60)

    useEffect(() => {
        if (map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://ws205.juntadeandalucia.es/tileserver/styles/style-osm-liberty/style.json`,
            center: [lng, lat],
            bearing: bearing,
            pitch: pitch,
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        map.current.addControl(new MapboxStyleSwitcherControl(styles, 'Andalucía OSM OSM Liberty'));
        new maplibregl.Marker({ color: "#FF0000" }).setLngLat([lng, lat]).addTo(map.current);

    });


    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}




// window.addEventListener("load", function () {
//     const map = new maplibregl.Map({
//         container: "Map",
//         attributionControl: false,
//         style: {
//             version: 8,
//             sources: {},
//             layers: []
//         }
//     });
//     map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");
//     map.addControl(
//         new MaplibreGLBasemapsControl(
//             {
//                 basemaps: [
//                     {
//                         id: "basemap_World_Topo_Map",
//                         tiles: ["//server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"],
//                         sourceExtraParams: {
//                             tileSize: 256,
//                             attribution: "Sources: Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), (c) OpenStreetMap contributors, and the GIS User Community",
//                             minzoom: 0,
//                             maxzoom: 22
//                         }
//                     },
//                     {
//                         id: "stamen",
//                         tiles: [
//                             "//stamen-tiles-a.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
//                             "//stamen-tiles-b.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
//                             "//stamen-tiles-c.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
//                             "//stamen-tiles-d.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
//                         ],
//                         sourceExtraParams: {
//                             tileSize: 256,
//                             attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a> &mdash; Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/''>CC-BY-SA</a>",
//                             minzoom: 0,
//                             maxzoom: 20
//                         }
//                     }
//                 ],
//                 initialBasemap: "stamen",
//                 expandDirection: "top"
//             }),
//         "bottom-left"
//     );
// });
