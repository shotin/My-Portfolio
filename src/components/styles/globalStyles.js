import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.body};
  }

  .app__header li a {
    color: ${({ theme }) => theme.navbarColor};
  }

  .volt_dark {
    color: ${({ theme }) => theme.meet};
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

.app__news_bg {
  background: ${({ theme }) => theme.meet};
}

.app__about-main {
  background: ${({ theme }) => theme.meet};
}

.described {
  color: ${({ theme }) => theme.meet};
}

.specimen {
  color: ${({ theme }) => theme.navbarColor};
}

.search {
  color: ${({ theme }) => theme.navbarColor};
}

.title_dark {
  color: ${({ theme }) => theme.meet};
}

.input-container label {
  color: ${({ theme }) => theme.meet};
}

.login_dark {
  color: ${({ theme }) => theme.meet};
}

@media(max-width:1060px){
  .app__header li a {
    color: ${({ theme }) => theme.navbarColor};
  }

  .togg {
    color: ${({ theme }) => theme.navbarColor};
  }
}

@media(max-width:700px){
  .app__header li a {
    color: ${({ theme }) => theme.meet};
  }

  .togg {
    color: ${({ theme }) => theme.meet};
  }

  .seap_me h1  {
    color: ${({ theme }) => theme.navbarColor};
  }

  .seap_me p  {
    color: ${({ theme }) => theme.navbarColor};
  }

  .coming__soon {
    color: ${({ theme }) => theme.meet};
  }

  .nav-menu {
    background-color: ${({ theme }) => theme.meet};
  }

  .app__header li a {
    color: ${({ theme }) => theme.navbarColor};
  }

  .app_all {
    background-color: ${({ theme }) => theme.meet};
  }

  .togg {
    color: ${({ theme }) => theme.navbarColor};
  }
}`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  navbarColor: "#fff!important",
  meet: "#000!important",
};
