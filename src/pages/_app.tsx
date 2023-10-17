import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/index";
import { QueryClient, QueryClientProvider } from "react-query";

const SECOND = 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: SECOND * 100,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
