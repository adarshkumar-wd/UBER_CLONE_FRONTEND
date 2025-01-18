import React from "react";

function LocationSearchPanel(props) {
  const locations = [
    "24B , near NSHM college , Durgapur , West Bengal , India",
    "City Center , near Bengal college of engineering and technology",
    "Banskapuria , Bhelantand near TATA DAV School , Sijua",
    "Bank More , Dhanbad near , City Style",
  ];

  return (
    <div onClick={() => props.setVechilePanel(true)} className="px-5 flex flex-col gap-3">
      {locations.map((location, index) => (
        <div key={index} className="flex items-center border-[1px] border-white border-b-gray-300 py-8 rounded-lg h-12 w-full active:border-black justify-around px-2 gap-3 ">
          <h2 className="h-7 w-7 flex items-center justify-center bg-gray-200 rounded-full">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h4 className="w-[80%]">
            {location}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default LocationSearchPanel;
