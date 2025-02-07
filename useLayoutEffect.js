import { useLayoutEffect, useState, useEffect } from "react";

function Content() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increase</button>
    </div>
  );
}
export default Content;

// gọi lại đồng bộ callback
// khác với useEffect đó là sẽ thực hiện callbacks và sự thay đổi của dependency rồi mới render lại UI
