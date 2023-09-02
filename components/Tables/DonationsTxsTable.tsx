import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import saveTheChildrenLogo from '../../images/ngo-save-the-children.png';
import ukraineLogo from '../../images/ngo-ukraine.png';
import yuvaLogo from '../../images/ngo-yuva.jpg';
import redCrossLogo from '../../images/ngo-red-cross.png';
import Link from "next/link";

type DONATIONS_DATA = {
  date: string;
  ngoLogo: StaticImageData | string;
  ngoLogoH: number;
  ngoLogoW: number;
  name: string;
  cryptoAmount: number;
  crypto: string;
  cryptoSymbol: string;
}

const data: DONATIONS_DATA[] = [
  {
    date: '25/08/2023',
    crypto: 'Ether',
    cryptoSymbol: 'ETH',
    cryptoAmount: 0.4,
    ngoLogo: ukraineLogo,
    ngoLogoH: 40,
    ngoLogoW: 30,
    name: 'Humanitarian Assistance to Ukrainians',
  },
  {
    date: '25/08/2023',
    crypto: 'Bitcoin',
    cryptoSymbol: 'BTC',
    cryptoAmount: 0.01,
    ngoLogo: saveTheChildrenLogo,
    ngoLogoH: 40,
    ngoLogoW: 40,
    name: 'Save the Children',
  },
  {
    date: '22/08/2023',
    crypto: 'USDC',
    cryptoSymbol: 'USDC',
    cryptoAmount: 23,
    ngoLogo: redCrossLogo,
    ngoLogoH: 40,
    ngoLogoW: 40,
    name: 'International Red Cross',
  },
  {
    date: '22/08/2023',
    crypto: 'USDC',
    cryptoSymbol: 'USDC',
    cryptoAmount: 50,
    ngoLogo: yuvaLogo,
    ngoLogoH: 40,
    ngoLogoW: 40,
    name: 'Yuva',
  },
  {
    date: '21/08/2023',
    crypto: 'Ether',
    cryptoSymbol: 'ETH',
    cryptoAmount: 0.2,
    ngoLogo: ukraineLogo,
    ngoLogoH: 40,
    ngoLogoW: 30,
    name: 'Humanitarian Assistance to Ukrainians',
  },
  {
    date: '15/07/2023',
    crypto: 'Ether',
    cryptoSymbol: 'ETH',
    cryptoAmount: 0.1,
    ngoLogo: ukraineLogo,
    ngoLogoH: 40,
    ngoLogoW: 30,
    name: 'Humanitarian Assistance to Ukrainians',
  },
];

interface IProps {
  actionButtonText?: string,
  total?: string,
  title: string,
}

const DonationsTxsTable: FC<IProps> = ({ total, title, }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {title}{total && (<span>: {total}</span>)}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Cause
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
        </div>

        {data.map((item, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-3 ${key === data.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {item.date}
              </p>
            </div>

            <div className="flex flex-col items-start py-2.5 xl:py-5">
              <div className="flex flex-row items-center">
                <Image src={item.ngoLogo} height={item.ngoLogoH} width={item.ngoLogoW} alt={item.name} />
                <span className="pl-2 text-black dark:text-white">
                  {item.name}
                </span>
              </div>
            </div>

            <div className="flex justify-center p-2.5 xl:p-5 items-center">
              <p className="text-black dark:text-white">
                {item.cryptoAmount} {item.cryptoSymbol}
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

export default DonationsTxsTable;
