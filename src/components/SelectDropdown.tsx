import React from 'react';
import InputLabel from './InputLabel';
import UpArrowIcon from '@app/assets/svg/UpArrowIcon';
import DropdownArrowIcon from '@app/assets/svg/DropdownArrowIcon';

export interface IOpenDropdownType {
  state: boolean;
  value: string[];
}

interface IOption {
  name: string;
  value: string;
}
export default function SelectDropdown({
  openDropDown,
  setOpenDropDown,
  optionList,
  label,
  id,
}: {
  openDropDown: IOpenDropdownType;
  setOpenDropDown: (value: {
    (val: IOpenDropdownType): IOpenDropdownType;
  }) => void;
  optionList: IOption[];
  label: string;
  id: string;
}) {
  const openDropdownValue = openDropDown.value.join(', ');
  return (
    <div className="relative">
      <InputLabel label={label} />
      <div
        onClick={() =>
          setOpenDropDown((prev: IOpenDropdownType) => ({
            ...prev,
            state: !prev.state,
          }))
        }
        className={`flex items-center gap-2.5 rounded-xl px-4 py-3.5  ${openDropDown.state ? 'border-[3px] border-[#131316] bg-white' : 'border border-[#EFF1F6] bg-[#EFF1F6]'}`}
      >
        <div className="h-6 w-full">
          {openDropdownValue.length > 38
            ? openDropdownValue.slice(0, 38) + '...'
            : openDropdownValue}
        </div>
        {openDropDown.state ? (
          <UpArrowIcon />
        ) : (
          <DropdownArrowIcon width="8.83px" height="5.02px" />
        )}
      </div>

      {openDropDown.state && (
        <div className="shadow-sideBarShadow absolute z-20 w-full rounded-xl bg-white p-2">
          <div>
            {optionList.map((option: IOption, index: number) => (
              <div
                key={index}
                className="rounded-[10px] p-[14px] hover:bg-[#EFF1F6]"
              >
                <label className="container">
                  {option.name}
                  <input
                    type="checkbox"
                    name={id}
                    checked={openDropDown.value.includes(option.value)}
                    value={option.value}
                    onChange={(e) =>
                      setOpenDropDown((prev: IOpenDropdownType) => {
                        const arr = prev.value;
                        const newValue = e.target.checked
                          ? [...prev.value, e.target.value]
                          : arr.filter((i: string) => i !== e.target.value);
                        return {
                          ...prev,
                          value: newValue,
                        };
                      })
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
