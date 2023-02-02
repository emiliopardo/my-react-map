import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import { MapboxStyleDefinition, MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import "mapbox-gl-style-switcher/styles.css";

export default function Map() {
    const styles: MapboxStyleDefinition[] = [
        {
            title: "Andalucía OSM OSM Liberty",
            uri: `http://10.240.1.134:8081/styles/style-osm-liberty/style.json`
        },
        {
            title: "Andalucía OSM Positron",
            uri: `http://10.240.1.134:8081/styles/style-osm-positron/style.json`
        },
        {
            title: "Andalucía OSM Dark-Matter",
            uri: `http://10.240.1.134:8081/styles/style-osm-dark-matter/style.json`
        },
        {
            title: "Roman Empire",
            uri: `http://10.240.1.134:8081/styles/roman-empire/style.json`
        },
        {
            title: "ESRI Imagery/Satellite",
            uri: `../../tiles/ESRI_Imagery_Satellite.json`
        },
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
            style: `http://10.240.1.134:8081/styles/style-osm-liberty/style.json`,
            center: [lng, lat],
            bearing: bearing,
            pitch: pitch,
            zoom: zoom
        });

        map.current.on('style.load', function () {
            map.current.addSource('corpus_urbium_baeticarum', {
                type: 'vector',
                url:
                    'http://localhost:8081/data/corpus_urbium_baeticarum.json'
            });
            map.current.addLayer({
                "id": "curvasNivel",
                "type": "line",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "curvasNivel",
                "paint": { "line-color": "rgba(226, 135, 67, 1)", "line-width": 0.5 }
            });
            map.current.addLayer({
                "id": "casaColumna",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "casaColumna",
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });

            map.current.addLayer({
                "id": "casaMartes",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "casaMartes",
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "casaNorte",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "casaNorte",
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "casaPeristilo",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "casaPeristilo",
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "foro",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "foro",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "macellum",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "macellum",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "termas",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "termas2019",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "muralla2Excav_8930N",
                "type": "fill",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "muralla2Excav_8930N",
                "paint": {
                    "fill-color": "rgba(181, 163, 163, 1)"
                }
            });
            map.current.addLayer({
                "id": "muralla1Excav_8930N",
                "type": "fill",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "muralla1Excav_8930N",
                "paint": {
                    "fill-color": "rgba(181, 163, 163, 1)"
                }
            });
            map.current.addLayer({
                "id": "muralla8930N",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "muralla8930N",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-extrusion-height": 0.5,
                    "fill-extrusion-color": "#873e23"
                }
            });
            map.current.addLayer({
                "id": "recinto1",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "recinto1",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "recinto2",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "recinto2",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "recinto3",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "recinto3",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-extrusion-color": "rgba(154, 150, 150, 0.6)",
                    "fill-extrusion-height": 0.5
                }
            });
            map.current.addLayer({
                "id": "murallaPerimetro8930N",
                "type": "fill-extrusion",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "murallaPerimetro8930N",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-extrusion-height": 0.5,
                    "fill-extrusion-color": "#873e23"
                }
            });
            map.current.addLayer({
                "id": "lacus_ligustinus",
                "type": "fill",
                "source": "corpus_urbium_baeticarum",
                "source-layer": "lacus_ligustinus",
                "paint": {
                    "fill-color": "rgba(40, 79, 160, 1)",
                    "fill-opacity": 0.5
                }
            });
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
