import React, { ChangeEvent, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import CounterContainer from './styles';

export default function CounterInput() {
  const [number, setNumber] = useState(1);
  return (
    <CounterContainer>
      <IoIosArrowDown
        color={number <= 1 ? 'gray' : 'black'}
        onClick={() => number > 1 && setNumber((prev) => prev - 1)}
      />
      <input
        type="text"
        min={1}
        value={number}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNumber(() => Number(e.target.value))
        }
      />
      <IoIosArrowUp onClick={() => setNumber((prev) => prev + 1)} />
    </CounterContainer>
  );
}
