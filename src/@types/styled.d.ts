// styled.d.ts

// Importando o módulo 'styled-components'
import 'styled-components';

// Definindo os tipos do seu tema
declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      WHITE: string;

      GREEN_700: string;
      GREEN_500: string;

      RED: string;
      RED_DARK: string;

      GRAY_700: string;
      GRAY_600: string;
      GRAY_500: string;
      GRAY_400: string;
      GRAY_300: string;
      GRAY_200: string;
      GRAY_100: string;
    };
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    };
    FONT_SIZE: {
      SM: number;
      MD: number;
      LG: number;
      XL: number;
    };
    // Adicione outros tipos do tema conforme necessário
  }
}
