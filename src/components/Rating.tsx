import React from 'react';

interface RatingProps {
  count: number;
  average: number;
}

const Rating = ({ count, average }: RatingProps) => {
  return (
    <div>
      <p>Count: {count}</p>
      <p>Average: {average}</p>
    </div>
  );
};

export default Rating;
