import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import {
  BitcoinCryptoIcon,
  EtherCryptoIcon,
  USDCCryptoIcon,
  OpenLinkIcon,
} from "@/components/Icons";
import Link from "next/link";

import saveTheChildrenLogo from '../../images/ngo-save-the-children.png';
import ukraineLogo from '../../images/ngo-ukraine.png';
import yuvaLogo from '../../images/ngo-yuva.jpg';
import redCrossLogo from '../../images/ngo-red-cross.png';

type DONATIONS_PORTFOLIO = {
  ngoLogo: StaticImageData | string;
  ngoLogoH: number;
  ngoLogoW: number;
  name: string;
  cryptoIcon: React.ReactNode;
  cryptoAmount: number;
  crypto: string;
  cryptoSymbol: string;
  website: string;
}

const data: DONATIONS_PORTFOLIO[] = [
  {
    cryptoIcon: <EtherCryptoIcon white={false} />,
    crypto: 'Ether',
    cryptoSymbol: 'ETH',
    cryptoAmount: 3,
    ngoLogo: ukraineLogo,
    ngoLogoH: 40,
    ngoLogoW: 30,
    name: 'Humanitarian Assistance to Ukrainians',
    website: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi'
  },
  {
    cryptoIcon: <BitcoinCryptoIcon white={false} />,
    crypto: 'Bitcoin',
    cryptoSymbol: 'BTC',
    cryptoAmount: 0.1,
    ngoLogo: saveTheChildrenLogo,
    ngoLogoH: 40,
    ngoLogoW: 40,
    name: 'Save the Children',
    website: 'https://www.icrc.org/en',
  },
  {
    cryptoIcon: <USDCCryptoIcon white={false} />,
    crypto: 'USDC',
    cryptoSymbol: 'USDC',
    cryptoAmount: 230,
    ngoLogo: redCrossLogo,
    ngoLogoH: 40,
    ngoLogoW: 40,
    name: 'International Red Cross',
    website: 'https://www.savethechildren.org/'
  },
  {
    cryptoIcon: <USDCCryptoIcon white={false} />,
    crypto: 'USDC',
    cryptoSymbol: 'USDC',
    cryptoAmount: 560,
    ngoLogo: yuvaLogo,
    ngoLogoH: 40,
    ngoLogoW: 40,
    website: 'https://yuvaindia.org/',
    name: 'Yuva',
  },
];

interface IProps {
  actionButtonText?: string,
  total?: string,
  title: string,
}

const DonationsPortfolioTable: FC<IProps> = ({ total, title, actionButtonText }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {title}{total && (<span>: {total}</span>)}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              NGO
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Contact
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Donated
            </h5>
          </div>

          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Donate more
            </h5>
          </div>
        </div>

        {data.map((item, key) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-4 ${key === data.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex flex-col items-start py-2.5 xl:py-5">
              <div className="flex flex-row items-center">
                <Image src={item.ngoLogo} height={item.ngoLogoH} width={item.ngoLogoW} alt={item.name} />
                <span className="pl-2 text-black dark:text-white">
                  {item.name}
                </span>
              </div>
            </div>

            <div className="flex justify-center p-2.5 xl:p-5">
              <Link
                href={item.website}
                className="flex flex-row items-center"
                target="new"
              >
                <span className="pr-2">
                  Website
                </span>
                <OpenLinkIcon white={false} size={10} />
              </Link>
            </div>

            <div className="flex justify-center p-2.5 xl:p-5 items-center">
              <p className="text-black dark:text-white">
                {item.cryptoAmount} {item.cryptoSymbol}
              </p>
            </div>

            <div className="hidden justify-center items-center sm:flex xl:p-5">
              <Link
                href="#"
                className="inline-flex items-center bg-meta-4 dark:bg-black dark:text-white py-1 px-2 text-center font-medium text-white hover:bg-opacity-90"
              >
                Donate
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default DonationsPortfolioTable;
