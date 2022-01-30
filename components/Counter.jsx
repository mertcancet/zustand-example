import { useStore } from "/store/index";

const Counter = () => {
  const { count, incrementCount, decrementCount, resetCount } = useStore(
    (state) => ({
      count: state.count,
      incrementCount: state.incrementCount,
      decrementCount: state.decrementCount,
      resetCount: state.resetCount,
    })
  );
  return (
    <div>
      <div>
        <h3>Count: {count}</h3>
      </div>

      <button onClick={incrementCount}> Increase Count</button>
      <button onClick={decrementCount}> Decrease Count</button>
      <button onClick={resetCount}> Reset Count</button>
    </div>
  );
};

export default Counter;
