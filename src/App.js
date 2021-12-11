import React from "react";
import "./App.css";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 19.89929, lng: 75.319489 }}
      />
    </>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
