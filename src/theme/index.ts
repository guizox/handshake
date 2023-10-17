import { MediaQueries, mediaQueries } from "./media";
import { Palette, palette } from "./palette";

export type Theme = {
  mediaQueries: MediaQueries;
  palette: Palette;
};

export const theme = {
  mediaQueries,
  palette,
};
