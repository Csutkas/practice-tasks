import React from 'react';

const Home: React.FC = () => {
  const [test, setTest] = React.useState(1041);

  function dec2bin(dec: number) {
    return (dec >>> 0).toString(2);
  }

  const binary = dec2bin(test);
  function binaryGap(N: number): number {
    const binaryN = dec2bin(N);
    const array: string[] = binaryN.split('1');

    const maxGap: number = array.reduce(
      (max, gap) => Math.max(max, gap.length),
      0
    );

    return maxGap || 0;
  }

  const result = binaryGap(test);

  return (
    <div className="bg-slate-100">
      <h1>Binary gap</h1>
      <p>
        A binary gap within a positive integer N is any maximal sequence of
        consecutive zeros that is surrounded by ones at both ends in the binary
        representation of N.
      </p>
      <span>Enter a number: </span>
      <input
        type="text"
        value={test}
        onChange={(e) => setTest(Number(e.target.value))}
      />
      <p>
        Binary representation of {test} is {binary}, the longest binary gap is{' '}
        {result}
      </p>
    </div>
  );
};

export default Home;
