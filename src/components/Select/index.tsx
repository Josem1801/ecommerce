import React from 'react';
import { Option, SelectInput } from './styles';

interface SelectProps {
  options: {
    value: string;
    name: string;
  }[];
}
export default function Select({ options }: SelectProps) {
  return (
    <SelectInput>
      {options.map(({ name, value }) => (
        <Option value={value} key={value}>
          {name}
        </Option>
      ))}
    </SelectInput>
  );
}
