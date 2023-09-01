import React, { FC } from 'react';
import Image from "next/image";

import newBadge from '../../images/new-badge.png';


const HozonAIRules: FC = () => {
  return (
    <div className="rounded-sm border border-stroke shadow-default bg-white dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex flex-row items-center">
        <Image src={newBadge} alt="New feature" width={70} height={40} />
        <h1 className="text-2xl pl-4 text-meta-1 font-bold">
          HOZON AI
        </h1>
      </div>
      <p className='p-6 font-bold text-xl'>
        Tell us your risk level and our AI will do the rest!
      </p>
      <p className='p-6'>
        We work with AI to invest in a balanced manner according to the level of risk you're willing to take. Just tell us the maximum amount of money you're willing to invest each month, and we'll take care of the rest. By using this new feature, the other strategies will become invalid.
      </p>
      <div className='p-6'>
        <span className='pr-2'>
          Invest $
        </span>
        <input
          type="text"
          placeholder="xxx"
          defaultValue={'100'}
          className="w-[40px] rounded-lg border-[1.5px] border-stroke bg-transparent px-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <span className='pl-2'>
          monthly with risk:
        </span>
      </div>
      <div className="flex flex-col space-y-2 p-2 w-full justify-center px-6">
        <input type="range" className="w-full" min="1" max="4" step="1" />
        <ul className="flex justify-between w-full px-[10px]">
          <li className="flex justify-center relative"><span className="absolute">Low</span></li>
          <li className="flex justify-center relative"><span className="absolute">Medium</span></li>
          <li className="flex justify-center relative"><span className="absolute">High</span></li>
          <li className="flex justify-center relative"><span className="absolute">Higher</span></li>
        </ul>
      </div>
      <div className="flex justify-end gap-4.5 mt-6 p-6">
        <button
          className="flex justify-center rounded bg-meta-3 py-2 px-6 font-medium text-gray hover:bg-opacity-95"
          type="submit">
          Start using HOZON AI
        </button>
      </div>
    </div >
  )
}

export default HozonAIRules;