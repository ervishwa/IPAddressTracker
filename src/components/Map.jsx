import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon from "../icon";

export default function Map() {
  // const position = [51.505, -0.09];
  return (
    <MapContainer
    center={[51.505, -0.09]}
    zoom={13}
    scrollWheelZoom={false}
    style={{ height: "500px", width: "100vw" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={icon} position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}
