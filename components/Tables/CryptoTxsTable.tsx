import { FC } from "react";

import {
  BitcoinCryptoIcon,
  EtherCryptoIcon,
  SOLCryptoIcon,
  USDCCryptoIcon,
  ADACryptoIcon,
} from "@/components/Icons";
import Link from "next/link";

type CRYPTO_PORTFOLIO = {
  date: string;
  logo: React.ReactNode;
  symbol: string;
  crypto: string;
  unitValue: number;
  unitsPurchased: number;
  fiatInvested: number;
}

const data: CRYPTO_PORTFOLIO[] = [
  {
    date: '01/09/2023',
    logo: <EtherCryptoIcon white={false} />,
    crypto: 'Ether',
    symbol: 'ETH',
    unitValue: 1550,
    unitsPurchased: 0.2,
    fiatInvested: 310,
  },
  {
    date: '01/09/2023',
    logo: <BitcoinCryptoIcon white={false} />,
    crypto: 'Bitcoin',
    symbol: 'BTC',
    unitValue: 22000,
    unitsPurchased: 0.005,
    fiatInvested: 110,
  },
  {
    date: '01/09/2023',
    logo: <SOLCryptoIcon white={false} />,
    crypto: 'SOL',
    symbol: 'SOL',
    unitValue: 19,
    unitsPurchased: 1,
    fiatInvested: 19,
  },
  {
    date: '01/09/2023',
    logo: <USDCCryptoIcon white={false} />,
    crypto: 'USDC',
    symbol: 'USDC',
    unitValue: 12,
    unitsPurchased: 12,
    fiatInvested: 12,
  },
  {
    date: '18/08/2023',
    logo: <EtherCryptoIcon white={false} />,
    crypto: 'Ether',
    symbol: 'ETH',
    unitValue: 1200,
    unitsPurchased: 0.2,
    fiatInvested: 240,
  },
  {
    date: '18/08/2023',
    logo: <BitcoinCryptoIcon white={false} />,
    crypto: 'Bitcoin',
    symbol: 'BTC',
    unitValue: 21500,
    unitsPurchased: 0.005,
    fiatInvested: 107.5,
  },
  {
    date: '18/08/2023',
    logo: <SOLCryptoIcon white={false} />,
    crypto: 'SOL',
    symbol: 'SOL',
    unitValue: 15,
    unitsPurchased: 1,
    fiatInvested: 15,
  },
  {
    date: '18/08/2023',
    logo: <USDCCryptoIcon white={false} />,
    crypto: 'USDC',
    symbol: 'USDC',
    unitValue: 12,
    unitsPurchased: 12,
    fiatInvested: 12,
  },

];

interface IProps {
  actionButtonText?: string,
  total?: string,
  title: string,
}

const CryptoTxsTable: FC<IProps> = ({ total, title, actionButtonText }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {title}{total && (<span>: {total}</span>)}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Crypto
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Market Price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Purchase
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Invested
            </h5>
          </div>
        </div>

        {data.map((item, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${key === data.length - 1
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
            </div>

            <div className="flex justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {item.date}
              </p>
            </div>

            <div className="flex justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                ${item.unitValue}
              </p>
            </div>

            <div className="hidden justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-success">
                {item.unitsPurchased} {item.symbol}
              </p>
            </div>

            <div className="hidden justify-center p-2.5 sm:flex xl:p-5 text-meta-7">
              <p className="text-black dark:text-white">
                ${item.fiatInvested}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-16 bg-white dark:bg-boxdark flex flex-row justify-center items-center font-medium text-black dark:text-white">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md border border-black dark:bg-black dark:text-white py-1 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Load more
        </Link>
      </div>
    </div>
  );
};

export default CryptoTxsTable;
