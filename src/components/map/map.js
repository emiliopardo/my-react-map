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
            // uri: `https://klokantech.github.io/roman-empire/style.json`
            uri: `http://10.240.1.134:8080/styles/roman-empire/style.json`
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
