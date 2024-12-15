function solution(A: number[]): number {
  // Create a Set from the array A. A Set automatically removes duplicates.
  const uniqueValues = new Set(A);

  // The size of the Set is the number of distinct values in the array.
  return uniqueValues.size;
}

console.log(solution([2, 1, 1, 2, 3, 1])); // Output: 3
