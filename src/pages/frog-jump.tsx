import React from 'react';

export const FrogJump = () => {
  const [start, setStart] = React.useState(10);
  const [end, setEnd] = React.useState(85);
  const [jump, setJump] = React.useState(30);
  const frogJump = (start: number, end: number, jump: number): number => {
    const distance = end - start;
    const jumps = Math.ceil(distance / jump);
    return jumps;
  };

  return (
    <div>
      <h1>Frog jump</h1>
      <input
        type="text"
        value={start}
        onChange={(e) => setStart(Number(e.target.value))}
      />
      <input
        type="text"
        value={end}
        onChange={(e) => setEnd(Number(e.target.value))}
      />
      <input
        type="text"
        value={jump}
        onChange={(e) => setJump(Number(e.target.value))}
      />
      <p>
        The frog starts at position {start}, and the goal is to reach position{' '}
        {end} with jump distance {jump}. The frog needs to jump{' '}
        {frogJump(start, end, jump)} times.
      </p>
    </div>
  );
};
