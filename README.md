# Reproduction bug for storycap

First clone this repo and install dependencies

```bash
git clone https://github.com/sag1v/storycap-test.git
cd storycap-test
npm install
```

## Run Tests

In order to run tests, run:

```bash
npm run tests:visual
```

⚠️ Attention: Depending on your local chromium version, tests should pass. If they don't pass due to font rendering or spaces you can update them with:

```bash
npm run tests:visual:update
```

## Reproduce the bug

After you see that the tests are passing, go to `capture.sh` script and change the `--parallel` to 1:

```diff
- storycap --serverCmd "http-server storybook-static -p 9009" --outDir "integration/__screenshots__" --parallel 4 http://localhost:9009
+ storycap --serverCmd "http-server storybook-static -p 9009" --outDir "integration/__screenshots__" --parallel 1 http://localhost:9009
```

Now run the tests again

```bash
npm run tests:visual
```

## Expected behavior

All tests are passing

## Actual behavior

`Focus` image is changed and failed (the button is no longer focused)

## Debugging

In `Button.stories.jsx` file, comment out the `click` parameter for the `Click` story.  

```diff
Click.parameters = {
  screenshot: {
    // comment this line to fix the "Focus" story image test when storycap runs with --parallel 1
-   click: "#btn",
+   //click: "#btn",
  },
};
```

We should expect to see 2 tests failing now right? `Focus` (like before) and `Click`.  
Well, no. Now only `Click` test is failing (as it should) but `Focus` is back to normal and passes (as it should) 🤷

If you want, you can add a mouse tracker to the page to see where is the mouse position while screenshot is taken.  
In `./storybook/preview.js` file, add the `withMouseTrack` decorator:

```diff
- export const decorators = [withScreenshot]
+ export const decorators = [withScreenshot, withMouseTrack];
```

Run the tests again:

```bash
npm run tests:visual
```
