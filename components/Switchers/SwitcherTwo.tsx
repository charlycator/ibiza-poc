import { FC, forwardRef, useEffect, useState } from 'react';

interface IProps {
  onChangeSwitch: Function,
  isSelected?: boolean,
  name?: string,
  ref: HTMLInputElement
}

const SwitcherTwo: FC<IProps> = forwardRef(({ onChangeSwitch, name, isSelected = false, ref }) => {
  const [enabled, setEnabled] = useState(isSelected);

  console.log('NAME: ', name);

  useEffect(() => {
    onChangeSwitch(enabled);
  }, [enabled]);

  return (
    <div x-data="{ switcherToggle: false }">
      <label
        htmlFor="toggle2"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            id="toggle2"
            type="checkbox"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="h-5 w-14 rounded-full bg-meta-9 shadow-inner dark:bg-[#5A616B]"></div>
          <div
            className={`dot absolute left-0 -top-1 h-7 w-7 rounded-full bg-white shadow-switch-1 transition ${
              enabled && '!right-0 !translate-x-full !bg-primary dark:!bg-white'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
})

export default SwitcherTwo;
