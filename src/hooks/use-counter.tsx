import { useState } from 'react';

export default function useCounter(defaultValue: number) {
  const [counter, setCounter] = useState(() => defaultValue || 0);

  const handleAddCounter = () => setCounter((prev) => prev + 1);
  const handleSubstractCounter = () => setCounter((prev) => prev - 1);
  const handleResetCounter = () => setCounter(0);

  return {
    counter,
    handleAddCounter,
    handleSubstractCounter,
    handleResetCounter,
  };
}
