import { useRef } from 'react';

function Example() {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef)

  const focusInput = () => {
    inputRef.current?.focus(); // input එකට focus කරන්න
    console.log(inputRef)
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default Example
