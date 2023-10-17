const smallMobile = {
  min: 320,
  max: 359,
};

const mobile = {
  min: smallMobile.max + 1,
  max: 424,
};

const largeMobile = {
  min: mobile.max + 1,
  max: 767,
};

const tablet = {
  min: largeMobile.max + 1,
  max: 1023,
};

const smallDesktop = {
  min: tablet.max + 1,
  max: 1279,
};

const desktop = {
  min: smallDesktop.max + 1,
  max: 1439,
};

const largeDesktop = {
  min: desktop.max + 1,
  max: 2559,
};

const xLargeDesktop = {
  min: largeDesktop.max + 1,
};

export const breakpoints = {
  smallMobile,
  mobile,
  largeMobile,
  tablet,
  smallDesktop,
  desktop,
  largeDesktop,
  xLargeDesktop,
};
