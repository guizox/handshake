import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar, NavbarProps } from "../components/molecules/Navbar/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SECOND = 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: SECOND * 100,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar
          testId="navbar"
          currentTab={
            router.pathname.replace("/", "") as NavbarProps["currentTab"]
          }
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
