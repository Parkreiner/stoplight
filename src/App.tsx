import { useEffect, useReducer } from "react";
import Stoplight from "./Stoplight";

// Don't worry if you don't understand what the logic is doing. It's just a way
// to make sure that you're dealing with your side effects properly, by setting
// up the app to destroy your component instance and rebuld it from scratch
// every six seconds
export default function App() {
  const [keyBoolean, toggleKeyBoolean] = useReducer((bool) => !bool, true);
  const mountKey = String(keyBoolean);

  useEffect(() => {
    const intervalId = window.setInterval(toggleKeyBoolean, 6_000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Stoplight key={mountKey} />
    </main>
  );
}
