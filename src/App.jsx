import './App.css';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';
import { Navbar } from './components/navbar/Navbar';
import { Brand } from './components/brand/Brand';
import { CTA } from './components/cta/CTA';
import { Header } from './containers/header/Header';
import { Blog } from './containers/blog/Blog';
import { WhatGPT3 } from './containers/whatGPT3/WhatGPT3';
import { Features } from './containers/features/Features';
import { Possibility } from './containers/possibility/Possibility';
import { Footer } from './containers/footer/Footer';


function App() {
  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default App
