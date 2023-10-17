import StyledComponentsRegistry from "@/lib/registry";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <Main />
          <NextScript />
        </StyledComponentsRegistry>
      </body>
    </Html>
  );
}
