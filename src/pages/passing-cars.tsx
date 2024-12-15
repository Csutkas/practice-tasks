function solution(A: number[]): number {
  let eastCars = 0; // Count of cars traveling east (0s)
  let passingCars = 0; // Total number of passing cars

  for (const car of A) {
    if (car === 0) {
      // Increment the count of east-bound cars
      eastCars++;
    } else if (car === 1) {
      // Add the count of east-bound cars to passing pairs
      passingCars += eastCars;

      // Check for overflow
      if (passingCars > 1_000_000_000) {
        return -1;
      }
    }
  }

  return passingCars;
}

// Example usage
const A1 = [0, 1, 0, 1, 1];
console.log(solution(A1)); // Output: 5
