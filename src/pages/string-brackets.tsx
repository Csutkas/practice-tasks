function solution(S: string): number {
  const stack: string[] = [];

  // Traverse the string character by character
  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    // If the character is an opening bracket, push it onto the stack
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    }
    // If the character is a closing bracket, check for matching opening bracket
    else if (char === ')' || char === '}' || char === ']') {
      // If the stack is empty, or the top of the stack doesn't match, return 0
      if (stack.length === 0) {
        return 0;
      }
      const top = stack.pop();
      if (
        (char === ')' && top !== '(') ||
        (char === '}' && top !== '{') ||
        (char === ']' && top !== '[')
      ) {
        return 0;
      }
    }
  }

  // If the stack is empty, the string is properly nested, otherwise it's not
  return stack.length === 0 ? 1 : 0;
}

console.log(solution('()')); // Output: 1
console.log(solution('()[]{}')); // Output: 1
console.log(solution('(]')); // Output: 0
