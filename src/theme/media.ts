import { css, Interpolation } from "styled-components";
import { breakpoints } from "./breakpoints";

export type QueryCheck = {
  minWidth?: number;
  maxWidth?: number;
};

export type MediaQuery = (styles: Interpolation<any>) => Interpolation<any>;

const createQueryCheck = ({ minWidth, maxWidth }: QueryCheck): string => {
  const checks: string[] = [];

  if (minWidth) {
    checks.push(`(min-width: ${minWidth}px)`);
  }

  if (maxWidth) {
    checks.push(`(max-width: ${maxWidth}px)`);
  }

  return checks.join(" and ");
};

export const createMediaQuery = (items: QueryCheck[]): MediaQuery => {
  const checkParams = items.map((query) => createQueryCheck(query)).join(", ");

  return (styles: Interpolation<any>) => css`
    @media ${checkParams} {
      ${styles}
    }
  `;
};

const fromMobile = createMediaQuery([
  {
    minWidth: breakpoints.mobile.min,
  },
]);

const fromMobileLarge = createMediaQuery([
  {
    minWidth: breakpoints.largeMobile.min,
  },
]);

const fromTablet = createMediaQuery([
  {
    minWidth: breakpoints.tablet.min,
  },
]);

const fromDesktopSmall = createMediaQuery([
  {
    minWidth: breakpoints.smallDesktop.min,
  },
]);

const fromDesktop = createMediaQuery([
  {
    minWidth: breakpoints.desktop.min,
  },
]);
const fromDesktopLarge = createMediaQuery([
  {
    minWidth: breakpoints.largeDesktop.min,
  },
]);

const fromDesktopXLarge = createMediaQuery([
  {
    minWidth: breakpoints.xLargeDesktop.min,
  },
]);

export type MediaQueries = {
  fromMobile: MediaQuery;
  fromMobileLarge: MediaQuery;
  fromTablet: MediaQuery;
  fromDesktopSmall: MediaQuery;
  fromDesktop: MediaQuery;
  fromDesktopLarge: MediaQuery;
  fromDesktopXLarge: MediaQuery;
};

export const mediaQueries = {
  fromMobile,
  fromMobileLarge,
  fromTablet,
  fromDesktopSmall,
  fromDesktop,
  fromDesktopLarge,
  fromDesktopXLarge,
};
