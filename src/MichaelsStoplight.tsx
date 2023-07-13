import { useEffect, useReducer } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import styles from "./Stoplight.module.css";

const stoplightColors = ["red", "yellow", "green"] as const;
type StoplightColor = (typeof stoplightColors)[number];

function reduceStoplightState(actionlessState: StoplightColor): StoplightColor {
  // Not doing anything clever with math and wrapping around array indices,
  // because then I'd have to work harder to assure type safety
  switch (actionlessState) {
    case "red": {
      return "yellow";
    }

    case "yellow": {
      return "green";
    }

    case "green": {
      return "red";
    }
  }
}

function useCyclingStoplight() {
  const [stoplightColor, cycleColor] = useReducer(reduceStoplightState, "red");

  useEffect(() => {
    console.log("New effect");

    const intervalId = window.setInterval(() => {
      console.log("New interval");
      cycleColor();
    }, 2_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return stoplightColor;
}

const backgroundColors = {
  red: "hsl(355deg, 100%, 52%)",
  yellow: "hsl(60deg, 100%, 52%)",
  green: "hsl(125deg, 100%, 52%)",
} as const satisfies Record<StoplightColor, string>;

const unlitColor = "hsl(0deg, 0%, 25%)";

export default function MichaelsStoplight() {
  const currentStoplightColor = useCyclingStoplight();

  return (
    <article className={styles.stoplightContainer}>
      <p role="status">The current color is {currentStoplightColor}.</p>

      <figure>
        <figcaption>
          <VisuallyHidden.Root>
            A visual of a stoplight that changes colors every 2 seconds.
          </VisuallyHidden.Root>
        </figcaption>

        <div role="presentation" className={styles.stoplightBody}>
          {stoplightColors.map((color) => (
            <div
              key={color}
              className={styles.stoplightLightbulb}
              style={{
                backgroundColor:
                  color === currentStoplightColor
                    ? backgroundColors[color] ?? unlitColor
                    : unlitColor,
              }}
            />
          ))}
        </div>
      </figure>
    </article>
  );
}
