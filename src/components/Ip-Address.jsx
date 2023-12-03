import React from "react";

export default function IpAddress() {
  return (
    <div className="w-3/4 h-36 bg-white rounded-lg grid grid-cols-4 relative z-10">
      <div className="border-r border-r-black text-left p-5">
        <p className="mb-3 font-bold text-gray-500">Ip Address</p>
        <p className="text-xl font-medium">192.212.174.101</p>
      </div>
      <div className="border-r border-r-black  text-left p-5">
        <p className="mb-3 font-bold text-gray-500">Location</p>
        <p className="text-xl font-medium">Brooklyn, NY 10001</p>
      </div>
      <div className="border-r border-r-black text-left p-5">
        <p className="mb-3 font-bold text-gray-500">TimeZone</p>
        <p className="text-xl font-medium">UTC-05:00</p>
      </div>
      <div className="text-left p-5">
        <p className="mb-3 font-bold text-gray-500">ISP</p>
        <p className="text-xl font-medium">Spacex starlink</p>
      </div>
    </div>
  );
}
