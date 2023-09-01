import React, { FC, useState } from 'react';

const SpareChangeRules: FC = () => {
  const [spareChange, setSpareChange] = useState<string>('the real spare change');


  const List = () => {
    const data = [
      {
        name: 'the real spare change',
      },
      {
        name: 'x2 spare change',
      },
      {
        name: 'x3 spare change',
      },
      {
        name: 'x4 spare change',
      },
      {
        name: 'x10 spare change',
      },
      {
        name: '',
        isCustom: true,
      }
    ]

    const onOptionChange = (e) => {
      setSpareChange(e.target.value);
    }
    return data.map((item, key) => (
      <div className="flex flex-row gap-1.5 px-6.5 py-4" key={`${item.name}-${key}`}>
        <input
          checked={item.name === spareChange}
          type="radio"
          id={`${item.name}Checkbox}`}
          name={`${item.name}Checkbox}`}
          value={item.name}
          onChange={onOptionChange} />
        {!item.isCustom && <span className="flex flex-row items-center">
          <span>
            {item.name}
          </span>
        </span>}
        {item.isCustom && <div>
          <input
            type="text"
            placeholder="xxx"
            className="w-[40px] rounded-lg border-[1.5px] border-stroke bg-transparent px-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          <span className="pl-1">
            times my spare change
          </span>
        </div>}
      </div>
    ));
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Your invested round ups
        </h3>
      </div>
      <form>
        <List />
        <div className="flex justify-end p-6">
          <button
            className="flex justify-center rounded bg-meta-4 py-2 px-6 font-medium text-gray hover:bg-opacity-95"
            type="submit">
            Save
          </button>
        </div>
      </form>
    </div >
  )
}

export default SpareChangeRules;