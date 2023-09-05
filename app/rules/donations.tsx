import { FC, useState } from 'react';
import Image from "next/image";


import { USDCCryptoIcon } from "@/components/Icons";

import saveTheChildrenLogo from '../../images/ngo-save-the-children.png';
import ukraineLogo from '../../images/ngo-ukraine.png';
import yuvaLogo from '../../images/ngo-yuva.jpg';
import redCrossLogo from '../../images/ngo-red-cross.png';
import wwfLogo from '../../images/ngo-wwf-green.png'


const DonationsRules: FC = () => {
  const [ukraine, setUkraine] = useState<boolean>(true);
  const [wwf, setWWF] = useState<boolean>(true);
  const [saveTheChildren, setSaveTheChildren] = useState<boolean>(true);
  const [redCross, setRedCross] = useState<boolean>(true);
  const [yuva, setYuva] = useState<boolean>(true);

  const List = () => {
    const data = [
      {
        logo: ukraineLogo,
        name: 'Assistance to Ukraninians',
        flag: ukraine,
        cb: setUkraine,
        value: 100
      },
      {
        logo: wwfLogo,
        name: 'World Wild Life',
        flag: wwf,
        cb: setWWF,
        value: 35
      },
      {
        logo: saveTheChildrenLogo,
        name: 'Save the children',
        flag: saveTheChildren,
        cb: setSaveTheChildren,
        value: 5,
      },
      {
        logo: redCrossLogo,
        name: 'International Red Cross',
        cb: setRedCross,
        flag: redCross,
        value: 5,
      },
      {
        logo: yuvaLogo,
        name: 'Yuva',
        cb: setYuva,
        flag: yuva,
        value: 15,
      },
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
          <Image src={item.logo} height={20} width={20} alt={item.name} />
          <span className='pl-2'>
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
              USDC
            </span>
          </div>
        )}
      </div>
    ));
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className=" border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white flex flex-row justify-between">
          Contribute to the cause of your choice
          <USDCCryptoIcon white={false} size={25} />
        </h3>
      </div>
      <p className='p-6'>
        Help the causes that you want to support in carrying out their work and reaching more people. We will donate them USDC on a monthly basis, without you having to worry about anything else. We do not charge any fees for this transfer to ensure that they receive the full amount.
        If you don&apos;t have enough USDC in your portfolio, we will charge the necessary amount to your bank account to make possible the donation.
      </p>
      <p className='p-6'>
        Right now you are supporting to:
      </p>

      <List />

      <div className="relative flex flex-row justify-center pt-6 ml-16 w-1/2">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a cause..." required />
          </div>
        </form>
      </div>

      <div className="flex justify-end p-6 mt-8">
        <button
          className="flex justify-center rounded bg-meta-4 py-2 px-6 font-medium text-gray hover:bg-opacity-95"
          type="submit">
          Save
        </button>
      </div>
    </div >
  )
}

export default DonationsRules;