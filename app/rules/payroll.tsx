import React, { FC } from 'react';

const PayrollRules: FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Invest part of your salary
        </h3>
      </div>
      <p className='p-6'>
        You can invest a portion of your paycheck recurringly, but to safeguard your financial stability, we limit your investments to a maximum of 10% of each paycheck you receive.
      </p>
      <div className='p-6'>
        <span className='pr-2'>
          Invest the
        </span>
        <input
          type="text"
          placeholder="xxx"
          defaultValue={'10'}
          className="w-[40px] rounded-lg border-[1.5px] border-stroke bg-transparent px-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
        <span className="pl-1">
          % of my salary
        </span>
      </div>
      <div className="flex justify-end gap-4.5 mt-6 p-6">
        <button
          className="flex justify-center rounded bg-meta-4 py-2 px-6 font-medium text-gray hover:bg-opacity-95"
          type="submit">
          Save
        </button>
      </div>
    </div >
  )
}

export default PayrollRules;