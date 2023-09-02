"use client";
import React from "react";

import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import CardDataStats from "../CardDataStats";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>
      <h3 className="mb-8 text-2xl font-semibold text-black dark:text-white">
        Your portfolio
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          actionButtonText="Set new rule"
          actionButtonLink="/rules"
          title="Invested"
          total="$3456">
        </CardDataStats>
        <CardDataStats
          actionButtonText="Withdraw"
          actionButtonLink="/crypto-portfolio"
          title="Increased"
          total="$1450">
        </CardDataStats>
        <CardDataStats
          actionButtonText="Update"
          actionButtonLink="/rules"
          title="cryptos held"
          total="4">
        </CardDataStats>
        <CardDataStats
          actionButtonText="Donate"
          actionButtonLink="/rules"
          title="in donations"
          total="$682">
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
      </div>
    </>
  );
};

export default ECommerce;
