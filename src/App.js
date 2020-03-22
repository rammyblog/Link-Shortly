
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import BurgerComponent from './components/Burger/Burger';
import MenuComponent from './components/Menu/Menu';
import Intro from './components/IntroHeading/Intro';
import ShortenBox from './components/shorten-box/ShortenBox';
import SiteFeatures from './components/SiteFeaturesSection/SiteFeatures';
import Footer from './components/footer/Footer';
import {GlobalProvider} from './context/GlobalContext';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <GlobalStyles />
        <div className='container'>
          <div ref={node}>
            <BurgerComponent open={open} setOpen={setOpen} />
            <MenuComponent open={open} setOpen={setOpen} />
          </div>
        </div>

        <section className='wrapper'>
          <div className='container'>
          <Intro />
          <ShortenBox />
          </div>
        </section>
          <SiteFeatures />
          <Footer />
      </GlobalProvider>
    </ThemeProvider>
  );
}
export default App;