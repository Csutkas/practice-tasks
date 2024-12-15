import React from 'react';

export const ArrayCyclicRotation = () => {
  const testArray = [3, 8, 9, 7, 6];
  const [repeat, setRepeat] = React.useState(2);

  const shiftLastElementOfTheArrayToTheFirstPosition = (
    arr: number[],
    repeatTimes: number
  ): number[] => {
    if (arr.length === 0) {
      return [];
    }
    const newArray = [...arr];

    for (let i = 0; i < repeatTimes; i++) {
      const lastElement = newArray.pop();
      newArray.unshift(lastElement!);
    }
    return newArray;
  };

  const result = shiftLastElementOfTheArrayToTheFirstPosition(
    testArray,
    repeat
  );

  return (
    <div>
      <h1>Array cyclic rotation</h1>
      <span>Enter the repeat time: </span>
      <input
        type="text"
        value={repeat}
        onChange={(e) => setRepeat(Number(e.target.value))}
      />
      <p>
        The array is {testArray.toString()}, and the shifted array is{' '}
        {result.toString()}
      </p>
    </div>
  );
};
