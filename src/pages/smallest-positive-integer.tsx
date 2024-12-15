function solution(A: number[]): number {
  const seen = new Set<number>();

  // Add all positive numbers to the set
  for (const num of A) {
    if (num > 0) {
      seen.add(num);
    }
  }

  // Find the smallest missing positive integer
  let smallestPositive = 1;
  while (seen.has(smallestPositive)) {
    smallestPositive++;
  }

  return smallestPositive;
}

// Example usage
const A1 = [1, 3, 6, 4, 1, 2];
console.log(solution(A1)); // Output: 5

const A2 = [1, 2, 3];
console.log(solution(A2)); // Output: 4

const A3 = [-1, -3];
console.log(solution(A3)); // Output: 1
