import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import RoomIcon from "@mui/icons-material/Room";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "./map.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiaWNocmFrLWhhcmJhb3VpIiwiYSI6ImNsaTJmMm8wNjA1ODczcG4wYm1tMmdlbnQifQ.1Ia11ZV0BckkKrshSskCNA";

const Map = ({ events, setEvents }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [137.915, 36.259],
      zoom: 9,
    });
    map.setProjection("globe");
    map.on("load", () => {
      mapconfig(map);
    });
    map.on("style.load", () => {
      map.setFog({});
    });

    return () => {
      map.remove();
    };
  }, []);
  const mapconfig = (map) => {
    map.addControl(Draw, "top-right");

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
  };
  var Draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true,
    },
  });
  return (
    <Card className="map-card">
      <CardHeader
        title="Map"
        titleTypographyProps={{ variant: "h5" }}
        avatar={<RoomIcon sx={{ color: "green" }} />}
      ></CardHeader>
      <CardContent className="card-content " sx={{ padding: 0 }}>
        <div id="map-container" className="map-container " />
      </CardContent>
    </Card>
  );
};
export default Map;
