function solution(A: number, B: number, K: number): number {
  // Count of numbers divisible by K up to B
  const countUpToB = Math.floor(B / K);

  // Count of numbers divisible by K up to A-1
  const countUpToA = Math.floor((A - 1) / K);

  // The difference gives the count of numbers divisible by K in [A..B]
  return countUpToB - countUpToA;
}

// Example usage
const A = 6,
  B = 11,
  K = 2;
console.log(solution(A, B, K)); // Output: 3
