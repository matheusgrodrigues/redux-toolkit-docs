import { useAppDispatch } from "../../hooks/hooks";
import Counter from "../../features/counter/counter";
import {
  increment,
  decrement,
  incrementByMount,
} from "../../features/counter/counterSlice";

export default function PageCounter() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Counter />
      <button onClick={() => dispatch(increment())}>Aumentar</button>
      <button onClick={() => dispatch(decrement())}>Diminuir</button>
      <button onClick={() => dispatch(incrementByMount(10))}>Somar +10</button>
    </div>
  );
}
