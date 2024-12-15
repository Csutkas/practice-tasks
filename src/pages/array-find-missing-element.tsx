export const ArrayFindMissingElement = () => {
  const testArray = [2, 3, 1, 5];
  function findMissingElement(array: number[]): number {
    // Calculate the expected sum of the first (N + 1) natural numbers
    const N = array.length; // Length of the array
    const totalSum = ((N + 1) * (N + 2)) / 2; // Sum of integers from 1 to (N + 1)

    // Calculate the actual sum of the elements in the array
    const actualSum = array.reduce((sum, value) => sum + value, 0);

    // The missing element is the difference between the expected sum and the actual sum
    return totalSum - actualSum;
  }

  return (
    <div>
      <h1>Array find missing element</h1>
      <p>
        The array is {testArray.toString()}, and the missing element is{' '}
        {findMissingElement(testArray)}
      </p>
    </div>
  );
};
