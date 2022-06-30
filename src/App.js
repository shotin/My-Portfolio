import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Header, Home, About, Comic, Lab, Shop, Navbar, Explore, Meet, News, Admin} from './components/index'
import { Toggle } from './components/Toggle/Toggle';
import { useDarkMode } from './components/styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './components/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import Volt from './ComicPDF/Volt';
import CryptoDetails from './components/NewsDetails/CryptoDetails';
import Login from './components/admin/Login';

function App() {
       const [ theme, toggleTheme ] = useDarkMode();
       const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
   <React.Fragment>
  <ThemeProvider theme={themeMode}>
  <GlobalStyles />
        <Switch>
             <Route exact path='/'>
                    <Header />
             </Route>

             <Route exact path='/home'>
                    <Navbar />
                    <Home />
             </Route>

             <Route exact path='/about'>
                   <Navbar />
                    <About />
             </Route>

             <Route exact path='/explore'>
                 <Navbar style={{ backgroundColor:'#882CC4'}} />
                 <Explore />
             </Route>

             <Route exact path='/comic'>
                    <Navbar />
                    <Comic />
             </Route>

             <Route exact path='/lab'>
                    <Navbar />
                    <Lab />
             </Route>

             <Route exact path='/shop'>
                    <Navbar />
                    <Shop />
             </Route>

             <Route exact path='/admin'>
                    {/* <Navbar /> */}
                    <Admin />
             </Route>

             <Route exact path='/meet'>
                    <Navbar />
                    <Meet />
             </Route>     

               <Route exact path='/news'>
                    <Navbar />
                    <News />
             </Route>   

              <Route exact path='/Volt'>
                   <Volt />
             </Route>    

             <Route exact path='/cryptoDetails'>
                   <Navbar />
                   <CryptoDetails />
             </Route>    

              <Route exact path='/login'>
                <Login />
             </Route>       
        </Switch>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        </ThemeProvider>
   </React.Fragment>
  );
}

export default App;
