import { useEffect, useReducer } from "react";
import Stoplight from "./Stoplight";

// Flip this to true once you're ready to test out your effects
const destroyEvery6Seconds = false;

// Don't worry if you don't understand what the logic is doing. A lot of this
// is kind of hacky to compensate for the fact that I didn't have time to make
// any component tests
export default function App() {
  const [destructionVal, toggleDestructionVal] = useReducer((bool) => {
    return destroyEvery6Seconds ? !bool : true;
  }, true);

  useEffect(() => {
    const intervalId = window.setInterval(toggleDestructionVal, 6_000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Stoplight key={String(destructionVal)} />
    </main>
  );
}
