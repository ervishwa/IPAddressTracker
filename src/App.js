import { useState } from "react";
import IpAddress from "./components/Ip-Address";
import Map from "./components/Map";
import bgImage from "./images/pattern-bg-desktop.png";

function App() {
  const [ipAddress, setIpAddress] = useState('182.69.182.86');
  return (
    <>
      <div className="relative">
        <img className="w-full" src={bgImage} alt="BackGround" />
        <p className="absolute top-10 left-[45%] text-white">
          IP Address Tracker
        </p>
        <div className="absolute top-20 left-[36%] w-[30%] h-12 flex rounded-xl">
          <input
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="Search for any IP address or domain"
            className="w-full p-4  rounded-l-xl"
          ></input>
          <div className="bg-black h-full w-[10%] text-black p-4 rounded-r-xl">
            <span class="material-symbols-outlined text-white">
              keyboard_arrow_right
            </span>
          </div>
        </div>
        <div className="absolute bottom-[-56px] left-52 w-full">
          <IpAddress />
        </div>
      </div>

      <Map ipAddress={ipAddress}/>
    </>
  );
}

export default App;
