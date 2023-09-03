import Image from "next/image";
import { FC } from "react";

import {
  BitcoinCryptoIcon,
  EtherCryptoIcon,
  SOLCryptoIcon,
  USDCCryptoIcon,
  ADACryptoIcon,
  RippleCryptoIcon,
} from "@/components/Icons";
import Link from "next/link";

type CRYPTO_PORTFOLIO = {
  logo: React.ReactNode;
  symbol: string;
  crypto: string;
  unitValue: number;
  held: number;
  invested: number;
  current: number;
  profit: string;
  levelUp: boolean;
}

const data: CRYPTO_PORTFOLIO[] = [
  {

    logo: <EtherCryptoIcon white={false} />,
    crypto: 'Ether',
    symbol: 'ETH',
    unitValue: 1600,
    held: 2,
    invested: 2100,
    current: 3200,
    profit: '+52.38%',
    levelUp: true,
  },
  {
    logo: <BitcoinCryptoIcon white={false} />,
    crypto: 'Bitcoin',
    symbol: 'BTC',
    unitValue: 27000,
    held: 0.05,
    invested: 1000,
    current: 1350,
    profit: '+35%',
    levelUp: true,
  },
  {
    logo: <SOLCryptoIcon white={false} />,
    crypto: 'SOL',
    symbol: 'SOL',
    unitValue: 20,
    held: 10,
    invested: 520,
    current: 200,
    profit: '-38.4%',
    levelUp: false,
  },
  {
    logo: <USDCCryptoIcon white={false} />,
    crypto: 'USDC',
    symbol: 'USDC',
    unitValue: 1,
    held: 156,
    invested: 156,
    current: 156,
    profit: '0%',
    levelUp: true,
  },
  {
    logo: <ADACryptoIcon white={false} />,
    crypto: 'ADA',
    symbol: 'ADA',
    unitValue: 0.25,
    held: 0,
    invested: 0,
    current: 0,
    profit: '-',
    levelUp: true,
  },
];

interface IProps {
  actionButtonText?: string,
  total?: string,
  title: string,
}

const CryptoPortfolioTable: FC<IProps> = ({ total, title, actionButtonText }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {title}{total && (<span>: {total}</span>)}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 md:grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Crypto
            </h5>
          </div>
          <div className=" p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Held
            </h5>
          </div>
          <div className="hidden md:block p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Invested
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Current value
            </h5>
          </div>
          <div className="hidden md:block p-2.5 text-center  xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Profit
            </h5>
          </div>
          <div className="hidden md:block p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {data.map((item, key) => (
          <div
            className={`grid grid-cols-3 md:grid-cols-6 ${key === data.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex flex-col py-2.5 xl:py-5">
              <div className="flex flex-row">
                {item.logo}
                <span className="pl-2 text-black dark:text-white">
                  {item.crypto}
                </span>
              </div>
              <div className="pl-7 text-xs">
                ${item.unitValue}
              </div>

            </div>

            <div className="flex justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {item.held} {item.symbol}
              </p>
            </div>

            <div className="hidden md:flex justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                ${item.invested}
              </p>
            </div>

            <div className="justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                ${item.current}
              </p>
              <p className={`md:hidden ${item.levelUp ? 'text-success' : 'text-d'}`}>
                {item.profit}
              </p>
              <Link
                href="#"
                className="inline-flex md:hidden items-center bg-meta-4 dark:bg-black dark:text-white my-5 py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
              >
                Withdraw
              </Link>
            </div>

            <div className="hidden justify-center p-2.5 sm:flex xl:p-5 text-meta-7">
              <p className={`${item.levelUp ? 'text-success' : 'text-d'}`}>
                {item.profit}
              </p>
            </div>

            <div className="hidden justify-center sm:flex xl:p-5">
              <Link
                href="#"
                className="inline-flex items-center bg-meta-4 dark:bg-black dark:text-white py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
              >
                Withdraw
              </Link>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CryptoPortfolioTable;
