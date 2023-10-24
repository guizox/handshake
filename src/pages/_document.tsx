import StyledComponentsRegistry from "@/lib/registry";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <StyledComponentsRegistry>
      <Html lang="en">
        <Head />
        <body style={{ margin: 0, background: "#F3F3F3" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    </StyledComponentsRegistry>
  );
}
