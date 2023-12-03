import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon from "../icon";
import { Children, useEffect, useState } from "react";
import axios from "axios";

export default function Map({ ipAddress }) {
  // const position = [51.505, -0.09];
  const [long, setLong] = useState(51.505);
  const [lat, setLat] = useState(-0.09);

  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_OjIHvql39bZXiiicdHCet1f1ya8CY&ipAddress=${ipAddress}`;

  const getLongitudAndLatitude = async () => {
    try {
      const data = await axios.get(url);
      setLong(data.location.lng);
      setLat(data.location.lat);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    ipAddress && getLongitudAndLatitude();
  }, []);
  return (
    <MapContainer
      center={[long, lat]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100vw", zIndex: "0" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={icon} position={[long, lat]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
