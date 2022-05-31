import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }

  .app__header li a {
    color: ${({ theme }) => theme.navbarColor};
  }

  .app__next-big h2 {
    color: ${({ theme }) => theme.navbarColor};
  }

  .meetBorder h4, .meetBorder p {
    color: ${({ theme }) => theme.navbarColor};
  }

  .ceo h1, .ceo p {
    color: ${({ theme }) => theme.navbarColor};
  }
  .meetBorder {
    border-right: 0.5px solid ${({ theme }) => theme.navbarColor};;
    border-bottom: 0.5px solid ${({ theme }) => theme.navbarColor};;
    border-top: 0.5px solid ${({ theme }) => theme.navbarColor};;
    border-left:0.5px solid ${({ theme }) => theme.navbarColor};;
}

.describe {
  color: ${({ theme }) => theme.meet};
}

`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
};

export const darkTheme = {
  body: '#121212',
  text: '#fff',
  navbarColor: '#fff',
  meet: '#000'
}