import React, { useState, ChangeEvent, useCallback, useRef } from 'react';
import throttle from 'lodash/throttle';
import { searchMovies } from '@/graphql/api';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const throttledHandleChange = useRef(
    throttle(
      async (value: string) => {
        const data = await searchMovies({ input: value });
        console.log(`Input value: ${value}`);
        console.log('party on 🎉', data);
      },
      1000,
      { leading: false, trailing: true }
    )
  ).current;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      throttledHandleChange(e.target.value);
    },
    [throttledHandleChange]
  );

  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      <button
        onClick={() => {
          console.log(inputValue);
        }}
      >
        hello
      </button>
    </>
  );
};

export default Search;
