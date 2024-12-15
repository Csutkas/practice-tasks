/* Boyer-Moore Voting Algorithm */
function solution(A: number[]): number {
  const N = A.length;

  if (N === 0) {
    return -1; // If the array is empty, there's no dominator
  }

  let candidate: number | null = null;
  let count = 0;

  // First pass: Find the candidate for the dominator
  for (let i = 0; i < N; i++) {
    if (count === 0) {
      candidate = A[i];
      count = 1;
    } else if (A[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Second pass: Verify if the candidate is actually the dominator
  let occurrence = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] === candidate) {
      occurrence++;
    }
  }

  // If the candidate occurs more than half the time, return an index of it
  if (occurrence > N / 2) {
    // Return any index where the candidate appears
    for (let i = 0; i < N; i++) {
      if (A[i] === candidate) {
        return i;
      }
    }
  }

  // If no dominator found, return -1
  return -1;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3])); // Output: 0
console.log(solution([2, 1, 1, 3, 4])); // Output: -1
console.log(solution([1])); // Output: 0
