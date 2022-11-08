import * as React from 'react';

function useArray<T>(value: T[]) {
  const [arr, setArr] = React.useState(value);

  const add = (person: T) => {
    setArr([...arr, person])
  };

  const removeIndex = (index: number) => {
    const copy = [...arr];
    console.log('arr===', arr);
    console.log('copy==', copy);
    copy.splice(index, 1);
    setArr(copy);
  }

  const clear = () => {
    setArr([]);
  }

  return { value: arr, add, removeIndex, clear };
}

export default useArray;
