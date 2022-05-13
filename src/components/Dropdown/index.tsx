import Link from 'next/link';
import React, { useState } from 'react';
import { DropdownContainer, Option, OptionList } from './styles';

interface OptionType {
  route: string;
  name: string;
}
interface SelectProps {
  options: OptionType[];
  fixedValue?: string;
  select?: boolean;
}
export default function Dropdown({ options, fixedValue, select }: SelectProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [optionSelected, setOpctionSelected] = useState(0);
  const handleOptions = () => setShowOptions(!showOptions);
  const handleOptionSelected = (optionIdx: number) =>
    setOpctionSelected(optionIdx);
  return (
    <DropdownContainer onClick={handleOptions}>
      <Option>{fixedValue || options[optionSelected].name}</Option>
      <OptionList activeList={showOptions}>
        {options.map(({ name, route }, idx) => {
          if (idx === optionSelected) return null;
          return (
            <li key={route}>
              <Link href={route} passHref>
                <Option onClick={() => select && handleOptionSelected(idx)}>
                  {name}
                </Option>
              </Link>
            </li>
          );
        })}
      </OptionList>
    </DropdownContainer>
  );
}
Dropdown.defaultProps = {
  select: false,
  fixedValue: '',
};
