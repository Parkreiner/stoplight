# Stoplight problem

Create a `<Stoplight />` component that, when mounted, will display a stoplight that cycles through the colors Red, Yellow, and Green, in that order, with a delay of 2 seconds between color changes. When the light is Green, it should cycle back to Red after 2 seconds.

`Stoplight.tsx` is the only file you need to touch for this challenge (aside from one test case listed below).

## Warning

You might get some TypeScript errors when using JSX. Didn't have enough time to figure this out, but it seems to be a compatibility problem between CodeSandbox and Vite. You shouldn't run into actual runtime errors, though. Everything should be working.

## Requirements

1. The stoplight must render correctly. Only one color must be lit at a time, with the light changing every 2 seconds.
2. Your rendered markup should be as semantic as possible.
   - Hint: Making a stoplight in HTML definitely isn't standard, so there's only going to be so much you can do. Don't run yourself ragged over this.
   - Still, there might be an ARIA role attribute you can use to indicate to a screen reader that something is mainly being used for its visual qualities.
3. There should be no React key warnings in the console.
4. This implementation will require `useEffect` in some way, but your effects must run only once on mount. They should not ever re-run as the stoplight color changes. There should also be zero issues if the component ever decides to unmount for any reason.

   - When you're ready to test the unmount behavior, go to `App.tsx` and flip the value of `destroyEvery6Seconds` to `true`. This will make `<App />` destroy the current `Stoplight` instance and rebuild it from scratch every 6 seconds. Try adding console.logs to your effects to make sure your effects are being dealt with properly. If your effects are set up correctly, you should not be able to tell your component keeps getting blown up.

5. The stoplight should be accessible to users who need to rely on screen readers. Even if they can't see the stoplight, there should be some kind of _text_ to tell them what the color of the stoplight is.
   - Hint: ARIA roles are relevant here, too. See if there's one that might announce new text each time it changes in an element.
6. You shouldn't _need_ to install extra dependencies, but Radix UI's VisuallyHidden component has been added for you. For extra credit, try playing around with it to see how it can be used to increase accessibility further.

## Styling

### Classes

You will need to provide some styling to handle the stoplight colors, but a lot of the styling has been taken care of for you. All CSS has been normalized, and the following class names have been provided. Feel free to modify them as much as you want.

- `stoplightContainer` - Container for the stoplight and any supporting text
- `stoplightBody` – The main body of the stoplight. Also centers it on the screen.
- `stoplightLightbulb` - Defines core styling for one of the lightbulbs in the stoplight. Does not define any color styling.

### Lightbulb colors

The stoplight lightbulbs must use the following colors. These must be treated as strings if you're trying to bring them into React directly:

- Red: `hsl(355deg, 100%, 52%)`
- Yellow: `hsl(60deg, 100%, 52%)`
- Green: `hsl(125deg, 100%, 52%)`
- Unlit: `hsl(0deg, 0%, 25%)`
