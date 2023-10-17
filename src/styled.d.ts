import { Theme } from "./theme/index";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
