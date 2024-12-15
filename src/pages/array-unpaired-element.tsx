export const ArrayUnpairedElement = () => {
  const testArray = [9, 3, 9, 3, 9, 7, 9];

  const unpairedElement = testArray.reduce((acc, num) => acc ^ num, 0);
  return (
    <div>
      <h1>Array unpaired element</h1>

      <p>
        The array is {testArray.toString()}, and the unpaired element is{' '}
        {unpairedElement}
      </p>
    </div>
  );
};
