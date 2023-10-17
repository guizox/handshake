import { theme } from "../theme";
import {
  RenderOptions,
  RenderResult,
  render as _render,
} from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => _render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { render };
