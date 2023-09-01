import { FC, useState } from 'react';

import {
    BitcoinCryptoIcon,
    EtherCryptoIcon,
    SOLCryptoIcon,
    USDCCryptoIcon,
    ADACryptoIcon,
    RippleCryptoIcon
} from "@/components/Icons";


const Cryptos: FC = () => {
    const [bitcoinSelected, setBitcoinSelected] = useState<boolean>(true);
    const [etherSelected, setEtherSelected] = useState<boolean>(true);
    const [SOLSelected, setSOLSelected] = useState<boolean>(true);
    const [USDCSelected, setUSDCSelected] = useState<boolean>(true);
    const [ADASelected, setADASelected] = useState<boolean>(false);
    const [rippleSelected, setRippleSelected] = useState<boolean>(false);

    const List = () => {
        const data = [
            {
                icon: <BitcoinCryptoIcon white={false} />,
                name: 'Bitcoin',
                flag: bitcoinSelected,
                cb: setBitcoinSelected,
                value: 8
            },
            {
                icon: <EtherCryptoIcon white={false} />,
                name: 'Ether',
                flag: etherSelected,
                cb: setEtherSelected,
                value: 10,
            },
            {
                icon: <SOLCryptoIcon white={false} />,
                name: 'SOL',
                cb: setSOLSelected,
                flag: SOLSelected,
                value: 15,
            },
            {
                icon: <USDCCryptoIcon white={false} />,
                name: 'USDC',
                cb: setUSDCSelected,
                flag: USDCSelected,
                value: 5,
            },
            {
                icon: <ADACryptoIcon white={false} />,
                name: 'ADA',
                cb: setADASelected,
                flag: ADASelected,
                value: null,
            },
            {
                icon: <RippleCryptoIcon white={false} />,
                name: 'Ripple',
                cb: setRippleSelected,
                flag: rippleSelected,
                value: null,
            }
        ]

        return data.map((item, key) => (
            <div className="flex flex-row gap-1.5 px-6.5 py-4" key={`${item.name}-${key}`}>
                <input
                    checked={item.flag}
                    type="checkbox"
                    id={`${item.name}Checkbox}`}
                    name={`${item.name}Checkbox}`}
                    value={item.name}
                    onClick={() => item.cb(!item.flag)} />
                <span className="flex flex-row items-center">
                    <div>
                        {item.icon}
                    </div>
                    <span>
                        {item.name}
                    </span>
                </span>
                {item.flag && (
                    <div>
                        <input
                            type="text"
                            placeholder="xxx"
                            defaultValue={item.value || ''}
                            className="w-[40px] rounded-lg border-[1.5px] border-stroke bg-transparent px-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        <span className="pl-1">
                            % of my portfolio
                        </span>
                    </div>
                )}
            </div>
        ));
    }

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Your automated crypto strategy
                </h3>
            </div>
            <List />
            <div className="flex justify-end p-6">
                <button
                    className="flex justify-center rounded bg-meta-4 py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                    type="submit">
                    Save
                </button>
            </div>
        </div >
    )
}

export default Cryptos;