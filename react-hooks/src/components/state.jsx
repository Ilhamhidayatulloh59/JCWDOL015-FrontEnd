import { useEffect, useState } from 'react'

export default function StateComp() {
  const [count, setCount] = useState(0)

  const increment = (num) => {
    setCount(count + num)
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment(5)}>increment</button>
    </div>
  );
}
