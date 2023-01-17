import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      title: string;
      subtitle: string;
      text: string;
      box: string;
      background: string;
    };
  }
}
