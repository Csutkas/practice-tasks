function solution(A: number[]): number {
  const totalSum = A.reduce((sum, value) => sum + value, 0); // Total sum of the array
  let minDifference = Infinity; // To track the minimum difference
  let leftSum = 0; // Sum of the left part of the tape

  // Iterate through the array to calculate the difference at each split point
  for (let P = 1; P < A.length; P++) {
    leftSum += A[P - 1]; // Add the current element to the left sum
    const rightSum = totalSum - leftSum; // Calculate the right sum
    const currentDifference = Math.abs(leftSum - rightSum); // Calculate the absolute difference

    // Update the minimum difference
    minDifference = Math.min(minDifference, currentDifference);
  }

  return minDifference; // Return the minimal difference
}

// Example usage
const A = [3, 1, 2, 4, 3];
console.log(solution(A)); // Output: 1
