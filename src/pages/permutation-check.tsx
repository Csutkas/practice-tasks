function solution(A: number[]): number {
  const N = A.length;
  const seen = new Set<number>(); // To track seen elements

  for (const num of A) {
    // If a number is out of range or already seen, it's not a permutation
    if (num < 1 || num > N || seen.has(num)) {
      return 0;
    }
    seen.add(num);
  }

  // If all numbers from 1 to N are seen exactly once, it's a permutation
  return seen.size === N ? 1 : 0;
}

// Example usage
const A1 = [4, 1, 3, 2];
console.log(solution(A1)); // Output: 1

const A2 = [4, 1, 3];
console.log(solution(A2)); // Output: 0
