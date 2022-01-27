import { useState } from 'react'

export const useQuoteCount = ( initialState = 10 ) => {

  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter( counter + 1 )
  }
  
  const decrement = () => {
    // if( counter > 1)
      setCounter( counter - 1 )
  };

  const reset = () => {
    setCounter( initialState )
  };

  return {
    counter,
    increment,
    decrement,
    reset
  };

}