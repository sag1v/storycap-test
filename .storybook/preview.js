import { withScreenshot } from "storycap";
import { trackMouse } from "./trackMouse";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// adds a mouse indicator to
const withMouseTrack = (story) => {
  trackMouse();
  return story();
};

export const decorators = [withScreenshot];
