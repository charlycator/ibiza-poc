"use client";
import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { europeMerc } from "@react-jvectormap/europe";

const cryptos = ["Bitcoin", "USDC", "Ether", "SOL", "Gnosis", "Ripple", "Dogecoin", "Matic", "Tether", "Cardano", "Tron"]

const MapOne = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Trending crypto investments
      </h4>
      <div id="mapOne" className="mapOne map-btn h-100 w-1000">
        <VectorMap
          map={europeMerc}
          backgroundColor="white"
          regionStyle={{
            initial: {
              fill: "#D1D5DB",
            },
            hover: {
              fillOpacity: 1,
              fill: "blue",
            },
            selected: {
              fill: "#FFFB00",
            },
          }}
          onRegionTipShow={function reginalTip(event, label, code) {
            //@ts-ignore
            return label.html(`
                  <div style="background-color: #F8FAFC; color: black; padding: 2px 8px"; >
                    ${
                      cryptos[Math.floor(Math.random() * (cryptos.length-1))]
                    }
                  </div>`);
          }}
        />
      </div>
    </div>
  );
};

export default MapOne;
