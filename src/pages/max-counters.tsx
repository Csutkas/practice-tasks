function solution(N: number, A: number[]): number[] {
  const counters = new Array(N).fill(0);
  let maxCounter = 0; // To track the maximum counter value
  let lastUpdate = 0; // To track the last max counter update

  for (const operation of A) {
    if (operation >= 1 && operation <= N) {
      // Increase operation
      const index = operation - 1;
      counters[index] = Math.max(counters[index], lastUpdate); // Apply the last update lazily
      counters[index] += 1;
      maxCounter = Math.max(maxCounter, counters[index]);
    } else if (operation === N + 1) {
      // Max counter operation
      lastUpdate = maxCounter;
    }
  }

  // Finalize all counters to include the last max update
  for (let i = 0; i < N; i++) {
    counters[i] = Math.max(counters[i], lastUpdate);
  }

  return counters;
}

// Example usage
const N = 5;
const A = [3, 4, 4, 6, 1, 4, 4];
console.log(solution(N, A)); // Output: [3, 2, 2, 4, 2]
