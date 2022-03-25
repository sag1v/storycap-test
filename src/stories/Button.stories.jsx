import React from "react";

import Button from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
};

export const General = () => <Button id="btn">General</Button>;

export const Click = () => (
  <Button id="btn" size="large">
    Click
  </Button>
);
Click.parameters = {
  screenshot: {
    // comment this line to fix the "Focus" story image test when storycap runs with --parallel 1
    click: "#btn",
  },
};

export const WithHover = () => <Button id="btn">Hover</Button>;

WithHover.parameters = {
  screenshot: {
    hover: "#btn",
  },
};

export const Focus = () => (
  <Button id="btn" size="large">
    Focus
  </Button>
);
Focus.parameters = {
  screenshot: {
    focus: "#btn",
  },
};
