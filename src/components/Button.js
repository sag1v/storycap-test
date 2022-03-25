import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-color: green;
  &:hover {
    color: red;
    border-color: blue;
    cursor: pointer;
  }
  font-size: ${({ size }) => (size === "large" ? "20px" : "14px")};
`;

export default Button;
