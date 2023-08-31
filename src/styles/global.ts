import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  .TitleXL {
  font-family: 'Baloo 2', cursive;
  font-size: 4.8rem;
  line-height: 1.3;
  font-weight: 800;
  }

  .TitleL {
  font-family: 'Baloo 2', cursive;
  font-size: 3.2rem;
  line-height: 1.3;
  font-weight: 800;
  }

  .TitleM {
  font-family: 'Baloo 2', cursive;
  font-size: 2.4rem;
  line-height: 1.3;
  font-weight: 800;
  }

  .TitleS {
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 700;
  }

  .TitleXS {
  font-family: 'Baloo 2', cursive;
  font-size: 1.8rem;
  line-height: 1.3;
  font-weight: 700;
  }

  .TextL {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 400;
  }
  
  .TextM {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  line-height: 1.3;
  font-weight: 400;
  }
  
  .TextS {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 400;
  }
  
  .TextXS {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 1.3;
  font-weight: 700;
  }
  
  .Tag {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
  text-transform: uppercase;
  }
  
  .ButtonG {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 700;
  }
  
  .ButtonM {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    line-height: 1.6;
    font-weight: 400;
  }
`
